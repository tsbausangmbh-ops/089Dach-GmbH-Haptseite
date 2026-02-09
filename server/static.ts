import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const CRAWLER_USER_AGENTS = [
  // Google Bots
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'Googlebot-Video',
  'Google-InspectionTool',
  'AdsBot-Google',
  'AdsBot-Google-Mobile',
  'APIs-Google',
  'Mediapartners-Google',
  'Storebot-Google',
  'Google-Extended',
  'GoogleOther',
  // Bing Bots
  'bingbot',
  'BingPreview',
  'msnbot',
  // Other Search Engines
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'Sogou',
  // Social Media
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'TelegramBot',
  'Pinterestbot',
  // SEO Tools
  'AhrefsBot',
  'SemrushBot',
  'Screaming Frog',
  'rogerbot',
  'DotBot',
  'MJ12bot',
  // AI Bots
  'GPTBot',
  'ChatGPT-User',
  'anthropic-ai',
  'Claude-Web',
  'PerplexityBot',
  'cohere-ai',
  // Other
  'Applebot',
  'archive.org_bot',
  'ia_archiver',
];

function isCrawler(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(bot => ua.includes(bot.toLowerCase()));
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Static assets with aggressive caching (1 year for immutable hashed files)
  app.use("/assets", express.static(path.join(distPath, "assets"), {
    maxAge: "1y",
    immutable: true,
    etag: true,
    lastModified: true,
    setHeaders: (res) => {
      res.setHeader("Vary", "Accept-Encoding");
      res.setHeader("X-Content-Type-Options", "nosniff");
    }
  }));

  // Images with long cache (30 days)
  app.use(express.static(distPath, {
    maxAge: "30d",
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      res.setHeader("Vary", "Accept-Encoding");
      
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
      } else if (filePath.endsWith(".xml") || filePath.endsWith(".txt") || filePath.endsWith(".json")) {
        res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");
      } else if (filePath.match(/\.(js|css)$/)) {
        res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      } else if (filePath.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2)$/)) {
        res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
      }
      res.setHeader("X-Content-Type-Options", "nosniff");
    }
  }));

  // SSR/Pre-rendered pages fallback with crawler optimization
  app.use("*", (req, res) => {
    const requestPath = req.originalUrl.split("?")[0].replace(/\/$/, "") || "/";
    const userAgent = req.headers['user-agent'];
    const crawlerDetected = isCrawler(userAgent);
    
    let indexPath: string;
    if (requestPath === "/") {
      indexPath = path.resolve(distPath, "index.html");
    } else {
      const prerenderPath = path.resolve(distPath, requestPath.slice(1), "index.html");
      if (fs.existsSync(prerenderPath)) {
        indexPath = prerenderPath;
      } else {
        indexPath = path.resolve(distPath, "index.html");
      }
    }
    
    const stats = fs.statSync(indexPath);
    
    if (crawlerDetected) {
      res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
      res.setHeader("X-Robots-Tag", "index, follow");
    } else {
      res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
    }
    
    res.setHeader("Vary", "Accept-Encoding, User-Agent");
    res.setHeader("Last-Modified", stats.mtime.toUTCString());
    
    res.setHeader("Link", [
      '</opengraph.jpg>; rel=preload; as=image',
      '<https://fonts.googleapis.com>; rel=preconnect',
      '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
      '</sitemap.xml>; rel=sitemap',
      '</llms.txt>; rel=ai-resource; type="text/plain"'
    ].join(", "));
    
    res.setHeader("X-Content-Type-Options", "nosniff");
    
    if (crawlerDetected) {
      console.log(`[Crawler] ${userAgent?.substring(0, 80)} -> ${requestPath}`);
    }
    
    res.sendFile(indexPath);
  });
}
