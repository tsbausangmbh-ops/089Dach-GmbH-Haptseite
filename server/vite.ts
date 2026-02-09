import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

const CRAWLER_BOTS = [
  'googlebot', 'google-inspectiontool', 'adsbot-google', 'apis-google',
  'mediapartners-google', 'storebot-google', 'google-extended', 'googleother',
  'bingbot', 'bingpreview', 'msnbot', 'slurp', 'duckduckbot',
  'baiduspider', 'yandexbot', 'sogou', 'facebookexternalhit', 'twitterbot',
  'linkedinbot', 'whatsapp', 'telegrambot', 'pinterestbot',
  'ahrefsbot', 'semrushbot', 'screaming frog', 'rogerbot', 'dotbot', 'mj12bot',
  'gptbot', 'chatgpt-user', 'anthropic-ai', 'claude-web', 'perplexitybot',
  'applebot', 'archive.org_bot', 'ia_archiver',
];

function isCrawler(ua: string | undefined): boolean {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return CRAWLER_BOTS.some(bot => lower.includes(bot));
}

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      if (isCrawler(req.headers['user-agent'])) {
        try {
          const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
          const appHtml = render(url);
          template = template.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          );
          console.log(`[SSR-Dev] Rendered for crawler: ${url}`);
        } catch (ssrErr) {
          console.error(`[SSR-Dev] SSR failed for ${url}:`, (ssrErr as Error).message);
        }
      }

      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
