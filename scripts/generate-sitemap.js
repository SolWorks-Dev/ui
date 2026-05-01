const fs = require('fs');
const path = require('path');
const { appList } = require('@solworks/application-registry');

const SITE_URL = 'https://solapps.dev';

const staticRoutes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
];

function encodeString(text) {
  return text.trim().replace(/\s+/g, '_').toLowerCase().replace(/\W/g, '');
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

  const categoryRoutes = [
    { slug: 'curated' },
    ...appList.categories
      .filter((category) => category.value !== 'curated')
      .map((category) => ({ slug: category.value })),
  ];

  categoryRoutes.forEach((category) => {
    urls.push({
      loc: `${SITE_URL}/category/${category.slug}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  // Add individual app pages
  const apps = appList.apps.filter((a) => !a.app.is_deprecated);
  apps.forEach((a) => {
    const encoded = encodeString(a.app.label);
    urls.push({
      loc: `${SITE_URL}/apps/${encoded}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.6,
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
  console.log('Generated sitemap.xml in public/');

  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), xml);
    console.log('Generated sitemap.xml in build/');
  }

  console.log(`Total URLs: ${urls.length} (${staticRoutes.length} static + ${categoryRoutes.length} categories + ${apps.length} apps)`);
}

generateSitemap();
