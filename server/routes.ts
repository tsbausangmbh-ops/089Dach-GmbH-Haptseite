import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertLeadSchema } from "@shared/schema";

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

  return httpServer;
}
