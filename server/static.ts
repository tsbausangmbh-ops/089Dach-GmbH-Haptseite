import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { isCrawler } from "./crawler";

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

  const STATIC_EXTENSIONS = [
    '.js', '.css', '.xml', '.png', '.jpg', '.jpeg', '.gif', '.webp',
    '.svg', '.ico', '.woff', '.woff2', '.ttf', '.json', '.txt',
    '.pdf', '.mp4', '.webm', '.map',
  ];

  app.use("*", (req, res) => {
    let requestPath: string;
    try {
      requestPath = decodeURIComponent(req.originalUrl.split("?")[0]).replace(/\/$/, "") || "/";
    } catch {
      res.status(400).end();
      return;
    }
    const userAgent = req.headers['user-agent'];
    const crawlerDetected = isCrawler(userAgent);

    if (STATIC_EXTENSIONS.some(ext => requestPath.toLowerCase().endsWith(ext))) {
      res.status(404).end();
      return;
    }

    let indexPath: string;
    let isPrerendered = false;

    if (requestPath === "/") {
      indexPath = path.resolve(distPath, "index.html");
      isPrerendered = true;
    } else {
      const prerenderPath = path.resolve(distPath, requestPath.slice(1), "index.html");
      if (fs.existsSync(prerenderPath)) {
        indexPath = prerenderPath;
        isPrerendered = true;
      } else {
        if (crawlerDetected) {
          console.log(`[Crawler 404] ${userAgent?.substring(0, 80)} -> ${requestPath}`);
          res.status(404).type('html').send('<!DOCTYPE html><html><head><title>404</title></head><body><h1>404 - Seite nicht gefunden</h1></body></html>');
          return;
        }
        indexPath = path.resolve(distPath, "index.html");
      }
    }

    const stats = fs.statSync(indexPath);

    res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
    if (crawlerDetected && isPrerendered) {
      res.setHeader("X-Robots-Tag", "index, follow");
      res.setHeader("X-Prerender", "static");
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
