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
  
  // Hauptleistungen & Conversion-Seiten
  if (route === "/leistungen" || route === "/kontakt" || route === "/beratung" || route === "/rueckruf") return "0.95";
  
  // SEO-Hauptseiten mit Keywords
  if (route === "/dachdecker-muenchen" || route === "/dachdecker-spengler-muenchen") return "0.95";
  if (route.includes("-muenchen") && !route.startsWith("/dachdecker-")) return "0.9";
  
  // Unterleistungen
  if (route.startsWith("/leistungen/")) return "0.85";
  
  // Stadtteile & Umland
  if (route.startsWith("/dachdecker-") && !route.includes("muenchen")) return "0.85";
  
  // Ratgeber & FAQ
  if (route === "/ratgeber" || route === "/faq") return "0.8";
  if (route.startsWith("/ratgeber/")) return "0.75";
  
  // Weitere Seiten
  if (route === "/referenzen" || route === "/ueber-uns" || route === "/stadtteile") return "0.7";
  if (route === "/heizkostenrechner" || route === "/foerderung-rechner" || route === "/daemmung-info") return "0.7";
  
  // Legal & Info
  if (route === "/impressum" || route === "/datenschutz" || route === "/agb" || route === "/cookie-richtlinie" || route === "/cookies") return "0.3";
  
  return "0.6";
}

function getChangefreq(route: string): string {
  if (route === "/") return "weekly";
  
  // Conversion-Seiten
  if (route === "/leistungen" || route === "/kontakt" || route === "/beratung" || route === "/rueckruf") return "weekly";
  
  // SEO-Seiten
  if (route.includes("-muenchen")) return "weekly";
  
  // Stadtteile
  if (route.startsWith("/dachdecker-")) return "monthly";
  
  // Leistungen
  if (route.startsWith("/leistungen/")) return "weekly";
  
  // Ratgeber
  if (route.startsWith("/ratgeber")) return "monthly";
  
  // Referenzen & FAQ
  if (route === "/referenzen" || route === "/faq") return "weekly";
  
  // Legal
  if (route === "/impressum" || route === "/datenschutz" || route === "/agb" || route === "/cookie-richtlinie") return "yearly";
  
  return "monthly";
}

async function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Hauptseite mit Logo
  xml += `  <url>
    <loc>${DOMAIN}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${LOGO_URL}</image:loc>
      <image:title>${SITE_NAME}</image:title>
    </image:image>
  </url>
`;

  // Alle anderen Routen
  for (let i = 1; i < routes.length; i++) {
    const route = routes[i];
    const url = `${DOMAIN}${route}`;
    const priority = getPriority(route);
    const changefreq = getChangefreq(route);

    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  }

  // KI-Ressourcen hinzufügen
  const aiResources = [
    { path: "/llms.txt", priority: "0.5", changefreq: "monthly" },
    { path: "/llms-full.txt", priority: "0.5", changefreq: "monthly" },
    { path: "/ai.json", priority: "0.4", changefreq: "monthly" },
    { path: "/ai-sitemap.xml", priority: "0.4", changefreq: "monthly" },
    { path: "/geo.json", priority: "0.4", changefreq: "monthly" },
  ];

  for (const resource of aiResources) {
    xml += `  <url>
    <loc>${DOMAIN}${resource.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${resource.changefreq}</changefreq>
    <priority>${resource.priority}</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  await mkdir(path.resolve(rootDir, "dist/public"), { recursive: true });
  await writeFile(path.resolve(rootDir, "dist/public/sitemap.xml"), xml);

  await mkdir(path.resolve(rootDir, "client/public"), { recursive: true });
  await writeFile(path.resolve(rootDir, "client/public/sitemap.xml"), xml);

  console.log(`Sitemap generated with ${routes.length + aiResources.length} URLs`);
}

generateSitemap().catch((err) => {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
});
