import express, { type Express } from "express";
import fs from "fs";
import path from "path";

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
  }));

  // Images with long cache (30 days)
  app.use(express.static(distPath, {
    maxAge: "30d",
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // Set appropriate cache headers based on file type
      if (filePath.endsWith(".html")) {
        // HTML files: short cache, revalidate
        res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
      } else if (filePath.endsWith(".xml") || filePath.endsWith(".txt") || filePath.endsWith(".json")) {
        // Sitemaps, robots.txt, JSON: medium cache
        res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");
      } else if (filePath.match(/\.(js|css)$/)) {
        // JS/CSS without hash: medium cache
        res.setHeader("Cache-Control", "public, max-age=604800, immutable");
      } else if (filePath.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2)$/)) {
        // Media files: long cache
        res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
      }
      // Add security headers
      res.setHeader("X-Content-Type-Options", "nosniff");
    }
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
