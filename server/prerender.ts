import { type Request, type Response, type NextFunction } from "express";
import https from "https";

const PRERENDER_SERVICE_URL = "service.prerender.io";
const BASE_URL = process.env.PRERENDER_BASE_URL || "https://089dach.de";

const CRAWLER_USER_AGENTS = [
  'googlebot', 'yahoo', 'bingbot', 'baiduspider', 'facebookexternalhit',
  'twitterbot', 'rogerbot', 'linkedinbot', 'embedly', 'quora link preview',
  'showyoubot', 'outbrain', 'pinterest/0.', 'pinterestbot', 'developers.google.com/+/web/snippet',
  'slackbot', 'vkshare', 'w3c_validator', 'redditbot', 'applebot',
  'whatsapp', 'flipboard', 'tumblr', 'bitlybot', 'skypeuripreview',
  'nuzzel', 'discordbot', 'google page speed', 'qwantify', 'bitrix link preview',
  'xing-contenttabreceiver', 'chrome-lighthouse', 'telegrambot',
  'google-inspectiontool', 'petalbot', 'semrushbot', 'ahrefsbot',
  'screaming frog', 'dotbot', 'mj12bot', 'duckduckbot', 'sogou',
  'yandexbot', 'google-extended', 'googleother', 'adsbot-google',
  'adsbot-google-mobile', 'apis-google', 'mediapartners-google',
  'storebot-google', 'googlebot-image', 'googlebot-news', 'googlebot-video',
  'bingpreview', 'msnbot',
  'gptbot', 'chatgpt-user', 'anthropic-ai', 'claude-web', 'perplexitybot', 'cohere-ai',
  'ia_archiver', 'archive.org_bot',
  'seznambot', 'mail.ru_bot', 'coccocbot', 'yeti',
];

const IGNORED_EXTENSIONS = [
  '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif',
  '.pdf', '.doc', '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar',
  '.exe', '.wmv', '.avi', '.ppt', '.mpg', '.mpeg', '.tif',
  '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4', '.m4a', '.swf',
  '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent', '.ttf',
  '.woff', '.woff2', '.svg', '.webp', '.webm', '.map', '.json',
];

const IGNORED_PREFIXES = [
  '/api/', '/assets/', '/favicon', '/robots.txt', '/sitemap',
  '/opengraph', '/logo', '/llms.txt',
];

function shouldPrerender(req: Request): boolean {
  const userAgent = req.headers['user-agent'];
  if (!userAgent) return false;

  if (req.method !== 'GET' && req.method !== 'HEAD') return false;

  const url = req.originalUrl || req.url;

  if (IGNORED_PREFIXES.some(prefix => url.startsWith(prefix))) return false;

  const path = url.split('?')[0].toLowerCase();
  if (IGNORED_EXTENSIONS.some(ext => path.endsWith(ext))) return false;

  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(bot => ua.includes(bot));
}

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

export function prerenderMiddleware(token: string) {
  console.log(`[prerender] Prerender.io middleware enabled (base: ${BASE_URL})`);

  return async (req: Request, res: Response, next: NextFunction) => {
    if (!shouldPrerender(req)) {
      return next();
    }

    const url = req.originalUrl || req.url;
    const ua = req.headers['user-agent']?.substring(0, 80) || 'unknown';

    try {
      console.log(`[prerender] Crawler: ${ua} -> ${url}`);
      const result = await fetchPrerendered(url, token);

      if (result.statusCode >= 400) {
        console.log(`[prerender] Service returned ${result.statusCode}, falling back to SSR`);
        return next();
      }

      Object.entries(result.headers).forEach(([key, value]) => {
        res.setHeader(key, value);
      });

      res.setHeader('X-Prerender', 'true');
      res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
      res.status(result.statusCode).send(result.body);
    } catch (error: any) {
      console.log(`[prerender] Error: ${error.message}, falling back to SSR`);
      next();
    }
  };
}
