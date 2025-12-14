import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertLeadSchema } from "@shared/schema";
import OpenAI from "openai";
import nodemailer from "nodemailer";
import { createCalendarEvent } from "./googleCalendar";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendNotificationEmail(subject: string, htmlContent: string) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@089dach.de",
      subject: subject,
      html: htmlContent,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      await sendNotificationEmail(
        `Neue Kontaktanfrage von ${validatedData.name}`,
        `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>E-Mail:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone || "Nicht angegeben"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${validatedData.message}</p>
        `
      );
      
      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ success: false, error: "Invalid contact data" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      await sendNotificationEmail(
        `Neuer Rückruf-Wunsch: ${validatedData.problem}`,
        `
        <h2>Neuer Rückruf-Wunsch über die Website</h2>
        <p><strong>Problem:</strong> ${validatedData.problem}</p>
        <p><strong>Dringlichkeit:</strong> ${validatedData.timing}</p>
        <p><strong>Details:</strong> ${validatedData.details || "Keine weiteren Angaben"}</p>
        <hr>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>E-Mail:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone}</p>
        `
      );

      // Create calendar event for callback request (Mo-Fr, 8:00-17:00)
      try {
        const nextWorkday = new Date();
        nextWorkday.setDate(nextWorkday.getDate() + 1);
        
        // Skip weekends: 0=Sunday, 6=Saturday
        while (nextWorkday.getDay() === 0 || nextWorkday.getDay() === 6) {
          nextWorkday.setDate(nextWorkday.getDate() + 1);
        }
        nextWorkday.setHours(8, 0, 0, 0);
        
        await createCalendarEvent(
          `Rückruf: ${validatedData.name} - ${validatedData.problem}`,
          `Kunde: ${validatedData.name}\nTelefon: ${validatedData.phone}\nE-Mail: ${validatedData.email}\nProblem: ${validatedData.problem}\nDringlichkeit: ${validatedData.timing}\nDetails: ${validatedData.details || "Keine"}`,
          nextWorkday,
          540 // 9 hours (8:00 - 17:00)
        );
        console.log("Calendar event created successfully");
      } catch (calError) {
        console.error("Error creating calendar event:", calError);
      }
      
      res.status(201).json({ success: true, data: lead });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(400).json({ success: false, error: "Invalid lead data" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message required" });
      }

      const openai = new OpenAI({
        apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
        baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Du bist der freundliche digitale Assistent von 089Dach GmbH, einem Münchner Dachdecker-Meisterbetrieb seit 1998. 
            
Deine Aufgabe:
- Beantworte Fragen rund ums Dach freundlich und kompetent
- Empfehle bei konkreten Problemen einen Rückruf oder Vor-Ort-Termin
- Weise auf unsere Leistungen hin: Bedachungen, Spenglerei, Dachsanierung, Dachfenster, Reparaturservice, Wartung, Energieberatung, Gaubenbau
- Bleibe immer höflich, empathisch und professionell
- Antworte auf Deutsch
- Halte Antworten kurz und hilfreich (max. 2-3 Sätze)

Kontaktdaten:
- Telefon: 089 12621964
- E-Mail: info@089dach.de
- Rückruf-Service: /rueckruf`
          },
          { role: "user", content: message }
        ],
        max_tokens: 200
      });

      const reply = completion.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";
      res.json({ reply });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Chat service unavailable" });
    }
  });

  return httpServer;
}
