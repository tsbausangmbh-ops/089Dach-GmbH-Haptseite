import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertLeadSchema } from "@shared/schema";
import OpenAI from "openai";
import nodemailer from "nodemailer";
import multer from "multer";
import { createCalendarEvent, getAvailableSlots } from "./googleCalendar";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Nur PDF und Bilder erlaubt'));
    }
  }
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface Attachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

async function sendNotificationEmail(subject: string, htmlContent: string, attachments?: Attachment[]) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@089dach.de",
      subject: subject,
      html: htmlContent,
      attachments: attachments?.map(a => ({
        filename: a.filename,
        content: a.content,
        contentType: a.contentType
      }))
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

async function sendCustomerConfirmationEmail(
  customerEmail: string,
  customerName: string,
  appointmentDate: Date | null,
  problem: string
) {
  try {
    let appointmentSection: string;
    let subject: string;
    let heading: string;

    if (appointmentDate) {
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
      };
      const formattedDate = appointmentDate.toLocaleDateString("de-DE", dateOptions);
      const formattedTime = appointmentDate.toLocaleTimeString("de-DE", timeOptions);

      subject = "Terminbestätigung: Ihre Beratung bei 089Dach GmbH";
      heading = "Vielen Dank für Ihre Terminbuchung!";
      appointmentSection = `
        <p>wir freuen uns, Ihnen Ihren Beratungstermin zu bestätigen:</p>
        
        <div style="background-color: white; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>📅 Datum:</strong> ${formattedDate}</p>
          <p style="margin: 5px 0;"><strong>🕐 Uhrzeit:</strong> ${formattedTime} Uhr</p>
          <p style="margin: 5px 0;"><strong>📋 Thema:</strong> ${problem}</p>
        </div>
        
        <p><strong>Wir rufen Sie zum vereinbarten Termin an.</strong></p>
      `;
    } else {
      subject = "Bestätigung: Ihre Beratungsanfrage bei 089Dach GmbH";
      heading = "Vielen Dank für Ihre Beratungsanfrage!";
      appointmentSection = `
        <p>wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
        
        <div style="background-color: white; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>📋 Thema:</strong> ${problem}</p>
        </div>
        
        <p><strong>Einer unserer Experten wird sich in Kürze telefonisch bei Ihnen melden.</strong></p>
      `;
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: customerEmail,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a365d; padding: 20px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0;">089Dach GmbH</h1>
            <p style="color: white; margin: 5px 0;">Ihr Dachdecker-Meisterbetrieb in München</p>
          </div>
          
          <div style="padding: 30px; background-color: #f8fafc;">
            <h2 style="color: #1a365d;">${heading}</h2>
            
            <p>Sehr geehrte/r ${customerName},</p>
            
            ${appointmentSection}
            
            <p>Falls Sie Fragen haben, erreichen Sie uns unter:</p>
            <ul style="list-style: none; padding: 0;">
              <li>📞 Telefon: <a href="tel:08912621964" style="color: #f59e0b;">089 12621964</a></li>
              <li>📧 E-Mail: <a href="mailto:info@089dach.de" style="color: #f59e0b;">info@089dach.de</a></li>
            </ul>
            
            <p>Mit freundlichen Grüßen,<br>
            <strong>Ihr Team von 089Dach GmbH</strong></p>
          </div>
          
          <div style="background-color: #1a365d; padding: 15px; text-align: center; color: white; font-size: 12px;">
            <p style="margin: 0;">089Dach GmbH | Dachdecker-Meisterbetrieb seit 1998</p>
            <p style="margin: 5px 0;">Telefon: 089 12621964 | E-Mail: info@089dach.de</p>
          </div>
        </div>
      `,
    });
    console.log("Customer confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending customer confirmation email:", error);
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

      // Create calendar event for callback request
      try {
        let eventStart: Date;
        let eventDuration: number;
        
        if (validatedData.callbackStart) {
          // Customer selected a specific time slot
          eventStart = new Date(validatedData.callbackStart);
          eventDuration = 60; // 1 hour slot
        } else {
          // No specific time - use next workday 8:00-17:00
          eventStart = new Date();
          eventStart.setDate(eventStart.getDate() + 1);
          while (eventStart.getDay() === 0 || eventStart.getDay() === 6) {
            eventStart.setDate(eventStart.getDate() + 1);
          }
          eventStart.setHours(8, 0, 0, 0);
          eventDuration = 540; // Full day
        }
        
        await createCalendarEvent(
          `Rückruf: ${validatedData.name} - ${validatedData.problem}`,
          `Kunde: ${validatedData.name}\nTelefon: ${validatedData.phone}\nE-Mail: ${validatedData.email}\nProblem: ${validatedData.problem}\nDringlichkeit: ${validatedData.timing}\nDetails: ${validatedData.details || "Keine"}`,
          eventStart,
          eventDuration
        );
        console.log("Calendar event created successfully");

        // Send confirmation email to customer if they provided email (from Beratungsseite)
        // Check if it's from Beratungsseite by looking at timing field
        const isFromBeratungsseite = validatedData.timing?.includes("Beratungsanfrage") || 
                                      validatedData.timing?.includes("Gewünschter Termin");
        if (validatedData.email && isFromBeratungsseite) {
          await sendCustomerConfirmationEmail(
            validatedData.email,
            validatedData.name,
            validatedData.callbackStart ? eventStart : null,
            validatedData.problem
          );
        }
      } catch (calError) {
        console.error("Error creating calendar event:", calError);
      }
      
      res.status(201).json({ success: true, data: lead });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(400).json({ success: false, error: "Invalid lead data" });
    }
  });

  // Leads endpoint with file upload support
  app.post("/api/leads-with-files", upload.array('files', 5), async (req, res) => {
    try {
      const formData = JSON.parse(req.body.data || '{}');
      const validatedData = insertLeadSchema.parse(formData);
      const lead = await storage.createLead(validatedData);
      
      // Prepare attachments from uploaded files
      const files = req.files as Express.Multer.File[];
      const attachments: Attachment[] = files?.map(file => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype
      })) || [];

      const attachmentInfo = attachments.length > 0 
        ? `<p><strong>Anhänge:</strong> ${attachments.length} Datei(en) angehängt</p>`
        : '';
      
      await sendNotificationEmail(
        `Neue Beratungsanfrage: ${validatedData.problem}`,
        `
        <h2>Neue Beratungsanfrage über die Website</h2>
        <p><strong>Problem:</strong> ${validatedData.problem}</p>
        <p><strong>Dringlichkeit:</strong> ${validatedData.timing}</p>
        <p><strong>Details:</strong> ${validatedData.details || "Keine weiteren Angaben"}</p>
        ${attachmentInfo}
        <hr>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>E-Mail:</strong> ${validatedData.email}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone}</p>
        `,
        attachments
      );

      // Create calendar event for callback request
      try {
        let eventStart: Date;
        let eventDuration: number;
        
        if (validatedData.callbackStart) {
          eventStart = new Date(validatedData.callbackStart);
          eventDuration = 60;
        } else {
          eventStart = new Date();
          eventStart.setDate(eventStart.getDate() + 1);
          while (eventStart.getDay() === 0 || eventStart.getDay() === 6) {
            eventStart.setDate(eventStart.getDate() + 1);
          }
          eventStart.setHours(8, 0, 0, 0);
          eventDuration = 540;
        }
        
        await createCalendarEvent(
          `Beratung: ${validatedData.name} - ${validatedData.problem}`,
          `Kunde: ${validatedData.name}\nTelefon: ${validatedData.phone}\nE-Mail: ${validatedData.email}\nProblem: ${validatedData.problem}\nDetails: ${validatedData.details || "Keine"}`,
          eventStart,
          eventDuration
        );

        const isFromBeratungsseite = validatedData.timing?.includes("Beratungsanfrage") || 
                                      validatedData.timing?.includes("Gewünschter Termin");
        if (validatedData.email && isFromBeratungsseite) {
          await sendCustomerConfirmationEmail(
            validatedData.email,
            validatedData.name,
            validatedData.callbackStart ? eventStart : null,
            validatedData.problem
          );
        }
      } catch (calError) {
        console.error("Error creating calendar event:", calError);
      }
      
      res.status(201).json({ success: true, data: lead });
    } catch (error) {
      console.error("Error creating lead with files:", error);
      res.status(400).json({ success: false, error: "Invalid lead data" });
    }
  });

  app.get("/api/availability", async (req, res) => {
    try {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 14);
      
      const slots = await getAvailableSlots(startDate, endDate);
      res.json({ slots: slots.filter(s => s.available) });
    } catch (error) {
      console.error("Error fetching availability:", error);
      res.status(500).json({ error: "Kalender nicht verfügbar" });
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
