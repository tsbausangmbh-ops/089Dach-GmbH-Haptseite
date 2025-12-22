import { build as viteBuild } from "vite";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "../shared/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

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

      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
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
