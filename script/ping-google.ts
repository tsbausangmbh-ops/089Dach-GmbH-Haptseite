/**
 * Google Sitemap Ping Script
 * Benachrichtigt Google über Sitemap-Updates für schnelleres Crawling
 */

const SITEMAP_URL = 'https://089dach.de/sitemap.xml';
const GEO_SITEMAP_URL = 'https://089dach.de/geo-sitemap.xml';

async function pingGoogle(sitemapUrl: string): Promise<boolean> {
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  try {
    const response = await fetch(pingUrl);
    if (response.ok) {
      console.log(`✓ Google benachrichtigt: ${sitemapUrl}`);
      return true;
    } else {
      console.error(`✗ Google Ping fehlgeschlagen: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Fehler beim Google Ping:`, error);
    return false;
  }
}

async function pingBing(sitemapUrl: string): Promise<boolean> {
  const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  try {
    const response = await fetch(pingUrl);
    if (response.ok) {
      console.log(`✓ Bing benachrichtigt: ${sitemapUrl}`);
      return true;
    } else {
      console.error(`✗ Bing Ping fehlgeschlagen: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Fehler beim Bing Ping:`, error);
    return false;
  }
}

async function main() {
  console.log('🔔 Suchmaschinen über Sitemap-Update benachrichtigen...\n');
  
  // Google pingen
  await pingGoogle(SITEMAP_URL);
  await pingGoogle(GEO_SITEMAP_URL);
  
  // Bing pingen
  await pingBing(SITEMAP_URL);
  await pingBing(GEO_SITEMAP_URL);
  
  console.log('\n✅ Fertig! Suchmaschinen wurden benachrichtigt.');
  console.log('💡 Tipp: Überprüfen Sie den Indexierungsstatus in der Google Search Console.');
}

main();
