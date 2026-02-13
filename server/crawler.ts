export const CRAWLER_USER_AGENTS = [
  'googlebot', 'googlebot-image', 'googlebot-news', 'googlebot-video',
  'google-inspectiontool', 'adsbot-google', 'adsbot-google-mobile',
  'apis-google', 'mediapartners-google', 'storebot-google',
  'google-extended', 'googleother',
  'bingbot', 'bingpreview', 'msnbot',
  'slurp', 'duckduckbot', 'baiduspider', 'yandexbot', 'sogou',
  'facebookexternalhit', 'twitterbot', 'linkedinbot',
  'whatsapp', 'telegrambot', 'pinterestbot', 'discordbot',
  'ahrefsbot', 'semrushbot', 'screaming frog', 'rogerbot',
  'dotbot', 'mj12bot', 'petalbot',
  'gptbot', 'chatgpt-user', 'anthropic-ai', 'claude-web',
  'perplexitybot', 'cohere-ai',
  'applebot', 'archive.org_bot', 'ia_archiver',
  'chrome-lighthouse', 'google page speed',
  'seznambot', 'mail.ru_bot', 'coccocbot', 'yeti',
  'embedly', 'quora link preview', 'showyoubot', 'outbrain',
  'flipboard', 'bitlybot', 'skypeuripreview', 'nuzzel',
  'qwantify', 'bitrix link preview', 'xing-contenttabreceiver',
  'redditbot', 'tumblr', 'vkshare', 'w3c_validator',
  'slackbot',
];

export const IGNORED_EXTENSIONS = [
  '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif',
  '.pdf', '.doc', '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar',
  '.exe', '.wmv', '.avi', '.ppt', '.mpg', '.mpeg', '.tif',
  '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4', '.m4a', '.swf',
  '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent', '.ttf',
  '.woff', '.woff2', '.svg', '.webp', '.webm', '.map', '.json',
];

export const IGNORED_PREFIXES = [
  '/api/', '/assets/', '/favicon', '/robots.txt', '/sitemap',
  '/opengraph', '/logo', '/llms.txt',
];

export function isCrawler(userAgent: string | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(bot => ua.includes(bot));
}

export function shouldSkipUrl(url: string): boolean {
  if (IGNORED_PREFIXES.some(prefix => url.startsWith(prefix))) return true;
  const urlPath = url.split('?')[0].toLowerCase();
  if (IGNORED_EXTENSIONS.some(ext => urlPath.endsWith(ext))) return true;
  return false;
}
