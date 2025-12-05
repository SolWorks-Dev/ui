const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://solapps.dev';

const staticRoutes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
];

const categoryRoutes = [
  { slug: 'curated', name: 'Curated' },
  { slug: 'defi', name: 'DeFi' },
  { slug: 'nft', name: 'NFT' },
  { slug: 'gaming', name: 'Gaming' },
  { slug: 'wallet', name: 'Wallet' },
  { slug: 'dex', name: 'DEX' },
  { slug: 'tools', name: 'Tools' },
  { slug: 'social', name: 'Social' },
  { slug: 'staking', name: 'Staking' },
  { slug: 'payments', name: 'Payments' },
];

function encodeString(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let urls = [];

  staticRoutes.forEach((route) => {
    urls.push({
      loc: `${SITE_URL}${route.url}`,
      lastmod: today,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  });

  categoryRoutes.forEach((category) => {
    urls.push({
      loc: `${SITE_URL}/category/${category.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const buildDir = path.join(__dirname, '..', 'build');

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ Generated sitemap.xml in public/');

  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), xml);
    console.log('✅ Generated sitemap.xml in build/');
  }

  console.log(`📍 Total URLs: ${urls.length}`);
}

generateSitemap();

