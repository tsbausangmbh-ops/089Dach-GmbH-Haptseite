import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "../shared/routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const DOMAIN = "https://089dach.de";
const LOGO_URL = "https://089dach.de/opengraph.jpg";
const SITE_NAME = "089Dach GmbH - Dachdecker-Meisterbetrieb München";

function getPriority(route: string): string {
  if (route === "/") return "1.0";
  if (route === "/leistungen" || route === "/kontakt" || route === "/rueckruf" || route === "/beratung") return "0.9";
  if (route.startsWith("/leistungen/")) return "0.8";
  if (route.startsWith("/dachdecker-") && !route.includes("muenchen")) return "0.85";
  if (route.includes("-muenchen")) return "0.8";
  if (route.startsWith("/ratgeber")) return "0.7";
  if (route === "/faq" || route === "/referenzen") return "0.8";
  if (route === "/impressum" || route === "/datenschutz" || route === "/agb" || route === "/cookie-richtlinie") return "0.3";
  return "0.5";
}

function getChangefreq(route: string): string {
  if (route === "/" || route === "/leistungen") return "weekly";
  if (route === "/referenzen" || route === "/faq") return "weekly";
  if (route.startsWith("/dachdecker-")) return "monthly";
  if (route.includes("-muenchen")) return "weekly";
  if (route.startsWith("/ratgeber")) return "monthly";
  if (route === "/impressum" || route === "/datenschutz" || route === "/agb") return "yearly";
  return "monthly";
}

async function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const url = route === "/" ? DOMAIN : `${DOMAIN}${route}`;
    const priority = getPriority(route);
    const changefreq = getChangefreq(route);

    if (i === 0) {
      xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${LOGO_URL}</image:loc>
      <image:title>${SITE_NAME}</image:title>
    </image:image>
  </url>
`;
    } else {
      xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    }
  }

  xml += `</urlset>`;

  await mkdir(path.resolve(rootDir, "dist/public"), { recursive: true });
  await writeFile(path.resolve(rootDir, "dist/public/sitemap.xml"), xml);

  await mkdir(path.resolve(rootDir, "client/public"), { recursive: true });
  await writeFile(path.resolve(rootDir, "client/public/sitemap.xml"), xml);

  console.log(`Sitemap generated with ${routes.length} URLs`);
}

generateSitemap().catch((err) => {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
});
