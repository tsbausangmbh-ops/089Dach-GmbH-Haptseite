import { build as viteBuild } from "vite";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "../shared/routes.js";
import { getSEODataForRoute } from "../shared/seo-data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function prerender() {
  console.log("Building SSR bundle...");

  await viteBuild({
    root: path.resolve(rootDir, "client"),
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "client", "src"),
        "@shared": path.resolve(rootDir, "shared"),
        "@assets": path.resolve(rootDir, "attached_assets"),
      },
    },
    esbuild: {
      jsx: "automatic",
    },
    build: {
      ssr: true,
      outDir: path.resolve(rootDir, "dist/ssr"),
      rollupOptions: {
        input: path.resolve(rootDir, "client/src/entry-server.tsx"),
        output: {
          format: "esm",
        },
        external: [/\.css$/],
      },
    },
    logLevel: "warn",
  });

  console.log("Pre-rendering", routes.length, "pages...");

  const template = await readFile(
    path.resolve(rootDir, "dist/public/index.html"),
    "utf-8"
  );

  const { render } = await import(
    path.resolve(rootDir, "dist/ssr/entry-server.js")
  );

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const appHtml = render(route);
      const canonicalUrl = route === "/" ? "https://089dach.de/" : `https://089dach.de${route}`;
      const seoData = getSEODataForRoute(route);
      
      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Update page title
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${escapeHtml(seoData.title)}</title>`
      );

      // Update meta description
      html = html.replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${escapeHtml(seoData.description)}" />`
      );

      // Update meta keywords if available
      if (seoData.keywords) {
        html = html.replace(
          /<meta name="keywords" content="[^"]*" \/>/,
          `<meta name="keywords" content="${escapeHtml(seoData.keywords)}" />`
        );
      }

      // Update Open Graph tags
      html = html.replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${escapeHtml(seoData.title)}" />`
      );
      html = html.replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${escapeHtml(seoData.description)}" />`
      );
      html = html.replace(
        '<meta property="og:url" content="https://089dach.de/" />',
        `<meta property="og:url" content="${canonicalUrl}" />`
      );

      // Update Twitter Card tags
      html = html.replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${escapeHtml(seoData.title)}" />`
      );
      html = html.replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${escapeHtml(seoData.description)}" />`
      );

      // Update canonical URL
      html = html.replace(
        '<link rel="canonical" href="https://089dach.de/" />',
        `<link rel="canonical" href="${canonicalUrl}" />`
      );

      // Update hreflang tags
      html = html.replace(
        /<link rel="alternate" hreflang="de" href="https:\/\/089dach\.de\/" \/>/g,
        `<link rel="alternate" hreflang="de" href="${canonicalUrl}" />`
      );
      html = html.replace(
        /<link rel="alternate" hreflang="de-DE" href="https:\/\/089dach\.de\/" \/>/g,
        `<link rel="alternate" hreflang="de-DE" href="${canonicalUrl}" />`
      );
      html = html.replace(
        /<link rel="alternate" hreflang="de-AT" href="https:\/\/089dach\.de\/" \/>/g,
        `<link rel="alternate" hreflang="de-AT" href="${canonicalUrl}" />`
      );
      html = html.replace(
        /<link rel="alternate" hreflang="de-CH" href="https:\/\/089dach\.de\/" \/>/g,
        `<link rel="alternate" hreflang="de-CH" href="${canonicalUrl}" />`
      );
      html = html.replace(
        /<link rel="alternate" hreflang="x-default" href="https:\/\/089dach\.de\/" \/>/g,
        `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`
      );

      // Fix opengraph image URL
      html = html.replace(
        /https:\/\/c3cfe89b-bd5d-4dc1-a831-1716e6b0ba0d-00-25v8xb9qce15h\.riker\.replit\.dev\/opengraph\.jpg/g,
        'https://089dach.de/opengraph.jpg'
      );

      const filePath =
        route === "/"
          ? path.resolve(rootDir, "dist/public/index.html")
          : path.resolve(rootDir, `dist/public${route}/index.html`);

      const dir = path.dirname(filePath);
      await mkdir(dir, { recursive: true });
      await writeFile(filePath, html);

      successCount++;
      if (successCount % 20 === 0) {
        console.log(`Pre-rendered ${successCount}/${routes.length} pages...`);
      }
    } catch (err) {
      errorCount++;
      console.error(`Error pre-rendering ${route}:`, (err as Error).message);
    }
  }

  console.log(
    `\nPre-rendering complete: ${successCount} pages rendered, ${errorCount} errors`
  );

  if (errorCount > 0) {
    console.error(`\nWarning: ${errorCount} pages failed to pre-render`);
  }
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
