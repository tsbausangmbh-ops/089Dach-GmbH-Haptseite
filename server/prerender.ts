import { type Request, type Response, type NextFunction } from "express";
import https from "https";
import fs from "fs";
import path from "path";
import { isCrawler, shouldSkipUrl } from "./crawler";

const PRERENDER_SERVICE_URL = "service.prerender.io";
const BASE_URL = process.env.PRERENDER_BASE_URL || "https://089dach.de";

function fetchPrerendered(url: string, token: string): Promise<{ statusCode: number; body: string; headers: Record<string, string> }> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: PRERENDER_SERVICE_URL,
      path: `/${BASE_URL}${url}`,
      method: 'GET',
      headers: {
        'X-Prerender-Token': token,
        'User-Agent': 'prerender-middleware',
        'Accept': 'text/html',
      },
      timeout: 15000,
    };

    const request = https.request(options, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => {
        const headers: Record<string, string> = {};
        if (response.headers['content-type']) {
          headers['content-type'] = response.headers['content-type'] as string;
        }
        resolve({
          statusCode: response.statusCode || 200,
          body,
          headers,
        });
      });
    });

    request.on('error', reject);
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Prerender request timed out'));
    });

    request.end();
  });
}

function serveStaticFallback(req: Request, res: Response, distPath: string): boolean {
  const url = req.originalUrl || req.url;
  let requestPath: string;
  try {
    requestPath = decodeURIComponent(url.split('?')[0]).replace(/\/$/, '') || '/';
  } catch {
    return false;
  }

  let filePath: string;
  if (requestPath === '/') {
    filePath = path.resolve(distPath, 'index.html');
  } else {
    filePath = path.resolve(distPath, requestPath.slice(1), 'index.html');
  }

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    res.setHeader('X-Prerender', 'static-fallback');
    res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    res.setHeader('X-Robots-Tag', 'index, follow');
    res.setHeader('Vary', 'Accept-Encoding, User-Agent');
    res.setHeader('Last-Modified', stats.mtime.toUTCString());
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.sendFile(filePath);
    return true;
  }

  return false;
}

export function prerenderMiddleware(token: string) {
  const distPath = path.resolve(__dirname, 'public');
  console.log(`[prerender] Middleware enabled (prerender.io prio 1, static fallback)`);

  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();

    const url = req.originalUrl || req.url;
    if (shouldSkipUrl(url)) return next();
    if (!isCrawler(req.headers['user-agent'])) return next();

    const ua = req.headers['user-agent']?.substring(0, 80) || 'unknown';

    try {
      console.log(`[prerender] Crawler: ${ua} -> ${url}`);

      if (!token) {
        console.log(`[prerender] No token, using static fallback`);
        if (serveStaticFallback(req, res, distPath)) return;
        res.status(404).type('html').send('<!DOCTYPE html><html lang="de"><head><title>404</title></head><body><h1>404 - Seite nicht gefunden</h1></body></html>');
        return;
      }

      const result = await fetchPrerendered(url, token);

      if (result.statusCode >= 400) {
        console.log(`[prerender] Service returned ${result.statusCode}, trying static fallback`);
        if (serveStaticFallback(req, res, distPath)) return;
        console.log(`[prerender] No static fallback found for ${url}`);
        res.status(404).type('html').send('<!DOCTYPE html><html lang="de"><head><title>404</title></head><body><h1>404 - Seite nicht gefunden</h1></body></html>');
        return;
      }

      Object.entries(result.headers).forEach(([key, value]) => {
        res.setHeader(key, value);
      });

      res.setHeader('X-Prerender', 'prerender.io');
      res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
      res.status(result.statusCode).send(result.body);
    } catch (error: any) {
      console.log(`[prerender] Error: ${error.message}, trying static fallback`);
      if (serveStaticFallback(req, res, distPath)) return;
      console.log(`[prerender] No static fallback found for ${url}`);
      res.status(404).type('html').send('<!DOCTYPE html><html lang="de"><head><title>404</title></head><body><h1>404 - Seite nicht gefunden</h1></body></html>');
    }
  };
}
