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
      // Vary header for proper CDN/proxy caching
      res.setHeader("Vary", "Accept-Encoding");
      
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
      // Security headers
      res.setHeader("X-Content-Type-Options", "nosniff");
    }
  }));

  // SPA fallback with crawler optimization headers
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    const stats = fs.statSync(indexPath);
    
    // Cache headers
    res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
    res.setHeader("Vary", "Accept-Encoding");
    res.setHeader("Last-Modified", stats.mtime.toUTCString());
    
    // HTTP Link headers for crawler optimization (preload critical resources)
    res.setHeader("Link", [
      '</opengraph.jpg>; rel=preload; as=image',
      '<https://fonts.googleapis.com>; rel=preconnect',
      '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
      '</sitemap.xml>; rel=sitemap',
      '</llms.txt>; rel=ai-resource; type="text/plain"'
    ].join(", "));
    
    // Security headers
    res.setHeader("X-Content-Type-Options", "nosniff");
    
    res.sendFile(indexPath);
  });
}
