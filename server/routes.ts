import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertLeadSchema } from "@shared/schema";
import OpenAI from "openai";
import nodemailer from "nodemailer";
import multer from "multer";
import { createCalendarEvent, getAvailableSlots } from "./googleCalendar";
import path from "path";
import fs from "fs";

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
  // Trailing slash normalization - redirect /path/ to /path (except root /)
  app.use((req, res, next) => {
    if (req.path !== "/" && req.path.endsWith("/")) {
      const query = req.url.slice(req.path.length);
      const safePath = req.path.slice(0, -1).replace(/\/+/g, "/");
      return res.redirect(301, safePath + query);
    }
    next();
  });

  // robots.txt muss IMMER verfügbar sein - gesetzliche Pflicht für SEO
  app.get("/robots.txt", (_req, res) => {
    const robotsPath = path.resolve(process.cwd(), "client/public/robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.type("text/plain").sendFile(robotsPath);
    } else {
      res.type("text/plain").send("User-agent: *\nAllow: /\nSitemap: https://089dach.de/sitemap.xml");
    }
  });

  // sitemap.xml auch explizit bereitstellen
  app.get("/sitemap.xml", (_req, res) => {
    const sitemapPath = path.resolve(process.cwd(), "client/public/sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      res.type("application/xml").sendFile(sitemapPath);
    } else {
      res.status(404).send("Sitemap not found");
    }
  });

  // SEO 301 Redirects - alle alten/alternativen URLs zu kanonischen Seiten
  const seoRedirects: Record<string, string> = {
    // Leistungen ohne Prefix
    "/dachsanierung": "/leistungen/dachsanierung",
    "/spenglerei": "/leistungen/spenglerei",
    "/bedachungen": "/leistungen/bedachungen",
    "/dachfenster": "/leistungen/dachfenster",
    "/reparaturservice": "/leistungen/reparaturservice",
    "/energieberatung": "/leistungen/energieberatung",
    "/architektenleistungen": "/leistungen/architektenleistungen",
    "/gaubenbau": "/leistungen/gaubenbau",
    "/wartung": "/leistungen/wartung",
    "/flachdach": "/leistungen/flachdach",
    "/sturmschaden": "/leistungen/sturmschaden",
    "/dachbeschichtung": "/leistungen/dachbeschichtung",
    "/dachrinnenreinigung": "/leistungen/dachrinnenreinigung",
    "/notdienst": "/leistungen/notdienst",
    
    // Ratgeber ohne Prefix
    "/daemmung": "/ratgeber/daemmung",
    "/leckortung": "/ratgeber/leckortung",
    "/foerderung": "/ratgeber/foerderung",
    "/kosten": "/ratgeber/kosten",
    "/materialien": "/ratgeber/materialien",
    
    // Englische URLs
    "/about": "/ueber-uns",
    "/contact": "/kontakt",
    "/services": "/leistungen",
    "/privacy": "/datenschutz",
    "/imprint": "/impressum",
    "/callback": "/rueckruf",
    "/consultation": "/beratung",
    "/projects": "/referenzen",
    "/gallery": "/referenzen",
    "/portfolio": "/referenzen",
    "/blog": "/ratgeber",
    "/news": "/ratgeber",
    "/articles": "/ratgeber",
    "/termin": "/beratung",
    "/anfrage": "/beratung",
    "/angebot": "/beratung",
    
    // Stadtteil-Kurzformen
    "/dachdecker-ramersdorf": "/dachdecker-ramersdorf-perlach",
    "/dachdecker-haidhausen": "/dachdecker-au-haidhausen",
    "/dachdecker-isarvorstadt": "/dachdecker-ludwigsvorstadt-isarvorstadt",
    "/dachdecker-aubing": "/dachdecker-aubing-lochhausen-langwied",
    "/umland": "/stadtteile",
    
    // SEO Landingpage-Varianten
    "/dachsanierung-muenchen": "/leistungen/dachsanierung",
    "/spenglerei-muenchen": "/leistungen/spenglerei",
    "/flachdach-muenchen": "/leistungen/flachdach",
    "/dachentwaesserung-muenchen": "/leistungen/dachrinnenreinigung",
    "/dachreparatur-muenchen": "/dachreparatur",
    "/flachdachsanierung-muenchen": "/flachdachsanierung",
    "/dachdaemmung-muenchen": "/dachdaemmung",
    "/dachdecker-angebot-muenchen": "/beratung",
    
    // Tippfehler und alternative Schreibweisen
    "/dach-sanierung": "/leistungen/dachsanierung",
    "/dach-reparatur": "/dachreparatur",
    "/flach-dach": "/leistungen/flachdach",
    "/sturm-schaden": "/leistungen/sturmschaden",
    "/dach-fenster": "/leistungen/dachfenster",
    "/gauben-bau": "/leistungen/gaubenbau",
    "/energie-beratung": "/leistungen/energieberatung",
    "/dachdeckerei": "/dachdecker-muenchen",
    "/dachdeckermeister": "/dachdecker-muenchen",
    "/dachdecker": "/dachdecker-muenchen",
    "/spengler": "/dachdecker-spengler-muenchen",
    "/spengler-muenchen": "/dachdecker-spengler-muenchen",
    
    // Notdienst-Varianten
    "/notfall": "/dachdecker-notdienst-muenchen",
    "/notfall-dach": "/dachdecker-notdienst-muenchen",
    "/dach-notdienst": "/dachdecker-notdienst-muenchen",
    "/24h-notdienst": "/dachdecker-notdienst-muenchen",
    "/notdienst-muenchen": "/dachdecker-notdienst-muenchen",
    
    // Preis-Varianten
    "/preise": "/dachdecker-muenchen-kosten",
    "/kosten-dachdecker": "/dachdecker-muenchen-kosten",
    "/preis": "/dachdecker-muenchen-kosten",
    "/preisliste": "/dachdecker-muenchen-kosten",
    "/kostenvoranschlag": "/beratung",
    
    // Weitere häufige Suchanfragen
    "/dach-reparieren": "/dachreparatur",
    "/dach-sanieren": "/leistungen/dachsanierung",
    "/dach-erneuern": "/leistungen/dachsanierung",
    "/neues-dach": "/leistungen/dachsanierung",
    "/dach-undicht-hilfe": "/dach-undicht",
    "/wasserschaden-dach": "/dach-undicht",
    "/dach-leckt": "/dach-undicht",
    "/ziegel-kaputt": "/dachziegel-austauschen",
    "/dachziegel-ersetzen": "/dachziegel-austauschen",
    
    };

  Object.entries(seoRedirects).forEach(([from, to]) => {
    app.get(from, (_req, res) => {
      res.redirect(301, to);
    });
  });

  // Crawler optimization: Prevent API endpoints from being indexed
  app.use("/api", (_req, res, next) => {
    res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
    next();
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      await sendNotificationEmail(
        `Neue Kontaktanfrage von ${validatedData.name}`,
        `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone || "Nicht angegeben"}</p>
        <p><strong>E-Mail:</strong> ${validatedData.email}</p>
        <p><strong>Adresse:</strong> ${validatedData.address || "Nicht angegeben"}</p>
        <p><strong>Betreff:</strong> ${validatedData.subject || "Nicht angegeben"}</p>
        <hr>
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
      endDate.setDate(endDate.getDate() + 90); // 3 Monate
      
      const slots = await getAvailableSlots(startDate, endDate);
      res.json({ slots: slots.filter(s => s.available) });
    } catch (error) {
      console.error("Error fetching availability:", error);
      // Fallback: Generate available slots without calendar check
      const fallbackSlots = generateFallbackSlots();
      res.json({ slots: fallbackSlots });
    }
  });

  // Fallback slot generation when Google Calendar is not available
  function generateFallbackSlots() {
    const slots: { start: string; end: string; available: boolean }[] = [];
    const current = new Date();
    current.setDate(current.getDate() + 1); // Start tomorrow
    current.setHours(0, 0, 0, 0);
    
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 90); // 3 Monate
    
    // Simple seeded random for consistent "busy" slots
    const todayFactor = new Date().getDate();
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    
    while (current < endDate) {
      const dayOfWeek = current.getDay();
      
      if (dayOfWeek !== 0) { // Skip Sunday
        const startHour = dayOfWeek === 6 ? 10 : 8;
        const endHour = dayOfWeek === 6 ? 14 : 17;
        
        for (let hour = startHour; hour < endHour; hour++) {
          const slotStart = new Date(current);
          slotStart.setHours(hour, 0, 0, 0);
          
          const slotEnd = new Date(current);
          slotEnd.setHours(hour + 1, 0, 0, 0);
          
          // ~30% of slots appear busy (varies by day)
          const seed = current.getDate() * 13 + hour * 7 + todayFactor * 3;
          const isBusy = seededRandom(seed) < 0.3;
          
          if (slotStart > new Date() && !isBusy) {
            slots.push({
              start: slotStart.toISOString(),
              end: slotEnd.toISOString(),
              available: true,
            });
          }
        }
      }
      
      current.setDate(current.getDate() + 1);
    }
    
    return slots;
  }

  // IndexNow API for instant Google/Bing indexing
  // Note: IndexNow key is a public verification key (like Google Site Verification)
  // It's publicly accessible at /{key}.txt - not a secret
  const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "37773605839026c7ac35ad44e6a6393e";
  
  app.post("/api/indexnow", async (req, res) => {
    try {
      const { urls } = req.body;
      if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: "URLs array required" });
      }
      
      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: "089dach.de",
          key: INDEXNOW_KEY,
          keyLocation: `https://089dach.de/${INDEXNOW_KEY}.txt`,
          urlList: urls.map(url => url.startsWith("http") ? url : `https://089dach.de${url}`)
        })
      });
      
      res.json({ 
        success: response.ok, 
        status: response.status,
        submitted: urls.length 
      });
    } catch (error) {
      console.error("IndexNow error:", error);
      res.status(500).json({ error: "IndexNow submission failed" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message required" });
      }

      const openai = new OpenAI({
        apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
        baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL
      });

      const systemPrompt = `Du bist der freundliche digitale Assistent von 089Dach GmbH, einem Münchner Dachdecker-Meisterbetrieb seit 1998.

DEINE ROLLE:
1. RATGEBER: Hilf Kunden mit Fachwissen zu Dächern, Materialien, Förderungen
2. HELFER: Beantworte Fragen kompetent und einfühlsam
3. LEAD-GENERATOR: Leite jedes Gespräch sanft zum Rückruf-Service oder Beratungstermin

LEAD-GENERIERUNG (sehr wichtig!):
- Nach 2-3 hilfreichen Antworten: "Möchten Sie, dass wir Sie kostenlos zurückrufen?"
- Bei konkreten Problemen: "Das sollte sich ein Experte vor Ort ansehen. Soll ich einen Rückruf für Sie einrichten?"
- Bei Preisanfragen: "Für ein genaues Angebot besuchen Sie uns gerne kostenlos vor Ort. Wann passt es Ihnen?"
- Immer erwähnen: "Unsere Beratung ist kostenlos und unverbindlich"
- Link zum Rückruf: 089dach.de/rueckruf

WICHTIGSTE REGEL - IMMER ZUERST NACHFRAGEN:
- NIEMALS Preise nennen ohne vorher zu wissen, was der Kunde genau braucht!
- IMMER zuerst fragen: "Um Ihnen einen genauen Preis nennen zu können, müsste ich wissen..."
- Frage nach: Dachfläche in m², Dachtyp, aktueller Zustand, gewünschte Materialien
- Erst NACH diesen Informationen darfst du Preisrichtwerte nennen
- Bei Preisanfragen: "Das hängt von verschiedenen Faktoren ab. Darf ich fragen..."

PREISLISTE (Stand 12/2025 - nur als Richtwerte nach Kundenrückfrage nennen):
- Dachsanierung komplett: ab 195 €/m² inkl. Dämmung (je nach Material und Zustand)
- Flachdach abdichten: ab 110 €/m² (EPDM, Bitumen, Begrünung möglich)
- Dachfenster Velux/Roto: ab 1.560 € komplett inkl. Einbau
- Gaube (Schleppgaube): ab 15.600 € (Planung + Baugenehmigung + Bau)
- Steildach neu eindecken: ab 104 €/m² ohne Dämmung
- Spenglerei Kupfer: ab 59 €/m
- Spenglerei Zink: ab 33 €/m
- Dachwartung (jährlich): ab 325 € (Inspektion + Reinigung + Protokoll)
- Dachrinnenreinigung: ab 195 € Festpreis
- Dachreparatur klein: ab 260-650 € (nach Besichtigung)

WICHTIG: Auf unserer Website 089dach.de sind günstigere Preise - dort entfällt der Beratungszuschlag!

FÖRDERUNGEN 2025:
- KfW 261: bis 150.000€ Kredit, bis 20% Tilgungszuschuss
- BAFA: 15-20% Zuschuss für Dämmmaßnahmen
- Steuerbonus: 20% der Handwerkerkosten absetzbar (max. 1.200€/Jahr)

DACHSCHÄDEN ERKENNEN:
- Feuchte Flecken an der Decke
- Abblätternde Farbe, Schimmelbildung
- Lose oder fehlende Ziegel
- Verstopfte Dachrinnen, Moos/Flechten

MATERIALIEN:
- Tondachziegel: 50-80 Jahre Lebensdauer
- Betondachsteine: 30-40 Jahre, preiswert
- Schiefer: 100+ Jahre, Premium
- Metalldach: 50+ Jahre, wartungsarm

ANTWORTREGELN:
- Antworte auf Deutsch, freundlich und kompetent
- Halte Antworten kurz (2-4 Sätze)
- IMMER ZUERST NACHFRAGEN bevor du Preise nennst!
- Bei konkreten Problemen: empfehle kostenlosen Rückruf
- Sage bei Preisen immer "Richtwert" oder "ab" - nie verbindliche Preise
- Empfehle immer die kostenlose Vor-Ort-Beratung für ein genaues Angebot

KONTAKTDATEN:
- Rückruf-Service: 089dach.de/rueckruf (kostenlos!)
- E-Mail: info@089dach.de
- Kostenlose Beratung: 089dach.de/beratung`;

      const conversationMessages: Array<{role: "system" | "user" | "assistant", content: string}> = [
        { role: "system", content: systemPrompt }
      ];

      if (history && Array.isArray(history)) {
        history.forEach((msg: {role: string, content: string}) => {
          if (msg.role === "user" || msg.role === "assistant") {
            conversationMessages.push({ role: msg.role, content: msg.content });
          }
        });
      } else {
        conversationMessages.push({ role: "user", content: message });
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: conversationMessages,
        max_tokens: 150
      }, { timeout: 10000 });

      const reply = completion.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";
      res.json({ reply });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Chat service unavailable" });
    }
  });

  return httpServer;
}
