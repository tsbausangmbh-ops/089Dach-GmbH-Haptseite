import { build as viteBuild } from "vite";
import { readFile, writeFile, mkdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "../shared/routes.js";
import { getSEODataForRoute } from "../shared/seo-data.js";
import pLimit from "p-limit";
import { parseHTML } from "linkedom";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const PARALLEL_WORKERS = 6;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function updateMetaTag(document: Document, selector: string, attribute: string, value: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function updateLinkTag(document: Document, selector: string, attribute: string, value: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

async function prerenderRoute(
  route: string,
  template: string,
  render: (route: string) => string,
  rootDir: string
): Promise<{ success: boolean; route: string; error?: string }> {
  try {
    const appHtml = render(route);
    const canonicalUrl = route === "/" ? "https://089dach.de/" : `https://089dach.de${route}`;
    const seoData = getSEODataForRoute(route);

    const { document } = parseHTML(template);

    const root = document.getElementById("root");
    if (root) {
      root.innerHTML = appHtml;
    }

    const title = document.querySelector("title");
    if (title) {
      title.textContent = seoData.title;
    }

    updateMetaTag(document, 'meta[name="description"]', "content", seoData.description);
    if (seoData.keywords) {
      updateMetaTag(document, 'meta[name="keywords"]', "content", seoData.keywords);
    }

    updateMetaTag(document, 'meta[property="og:title"]', "content", seoData.title);
    updateMetaTag(document, 'meta[property="og:description"]', "content", seoData.description);
    updateMetaTag(document, 'meta[property="og:url"]', "content", canonicalUrl);

    updateMetaTag(document, 'meta[name="twitter:title"]', "content", seoData.title);
    updateMetaTag(document, 'meta[name="twitter:description"]', "content", seoData.description);

    updateLinkTag(document, 'link[rel="canonical"]', "href", canonicalUrl);

    const hreflangTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    hreflangTags.forEach((tag) => {
      const href = tag.getAttribute("href");
      if (href && href.includes("089dach.de/")) {
        tag.setAttribute("href", canonicalUrl);
      }
    });

    if (route === "/") {
      const heroImg = root?.querySelector('img[fetchpriority="high"]');
      if (heroImg) {
        const heroSrc = heroImg.getAttribute("src");
        if (heroSrc) {
          const head = document.querySelector("head");
          if (head) {
            const preloadLink = document.createElement("link");
            preloadLink.setAttribute("rel", "preload");
            preloadLink.setAttribute("as", "image");
            preloadLink.setAttribute("href", heroSrc);
            preloadLink.setAttribute("fetchpriority", "high");
            preloadLink.setAttribute("type", "image/webp");
            head.appendChild(preloadLink);
          }
        }
      }
    }

    let html = document.toString();
    
    html = html.replace(
      /https:\/\/[a-z0-9-]+\.[a-z]+\.replit\.dev\/opengraph\.(jpg|jpeg|png)/g,
      'https://089dach.de/opengraph.jpg'
    );
    html = html.replace(
      /https:\/\/[a-z0-9-]+\.[a-z]+\.replit\.dev/g,
      'https://089dach.de'
    );

    const filePath =
      route === "/"
        ? path.resolve(rootDir, "dist/public/index.html")
        : path.resolve(rootDir, `dist/public${route}/index.html`);

    const dir = path.dirname(filePath);
    await mkdir(dir, { recursive: true });
    await writeFile(filePath, html);

    return { success: true, route };
  } catch (err) {
    return { success: false, route, error: (err as Error).message };
  }
}

async function prerender() {
  const startTime = Date.now();
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

  const ssrBuildTime = Date.now();
  console.log(`SSR bundle built in ${((ssrBuildTime - startTime) / 1000).toFixed(2)}s`);
  console.log(`Pre-rendering ${routes.length} pages with ${PARALLEL_WORKERS} parallel workers...`);

  const template = await readFile(
    path.resolve(rootDir, "dist/public/index.html"),
    "utf-8"
  );

  const { render } = await import(
    path.resolve(rootDir, "dist/ssr/entry-server.js")
  );

  const limit = pLimit(PARALLEL_WORKERS);
  let completedCount = 0;

  const results = await Promise.all(
    routes.map((route) =>
      limit(async () => {
        const result = await prerenderRoute(route, template, render, rootDir);
        completedCount++;
        if (completedCount % 20 === 0 || completedCount === routes.length) {
          console.log(`Pre-rendered ${completedCount}/${routes.length} pages...`);
        }
        return result;
      })
    )
  );

  const successCount = results.filter((r) => r.success).length;
  const errorCount = results.filter((r) => !r.success).length;
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
  const prerenderTime = ((Date.now() - ssrBuildTime) / 1000).toFixed(2);

  console.log(`\nPre-rendering complete in ${totalTime}s (prerender: ${prerenderTime}s)`);
  console.log(`${successCount} pages rendered successfully, ${errorCount} errors`);

  if (errorCount > 0) {
    console.error("\nFailed pages:");
    results
      .filter((r) => !r.success)
      .forEach((r) => console.error(`  - ${r.route}: ${r.error}`));
  }

  const avgTimePerPage = (parseFloat(prerenderTime) / routes.length * 1000).toFixed(1);
  console.log(`\nAverage: ${avgTimePerPage}ms per page`);
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
