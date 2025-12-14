import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertLeadSchema } from "@shared/schema";
import OpenAI from "openai";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
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
