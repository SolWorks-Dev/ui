const fs = require('fs');
const path = require('path');
const { appList } = require('@solworks/application-registry');

const SITE_URL = 'https://solapps.dev';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const buildDir = path.join(__dirname, '..', 'build');
const templatePath = path.join(buildDir, 'index.html');

function encodeString(text) {
  return text.trim().replace(/\s+/g, '_').toLowerCase().replace(/\W/g, '');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeScript(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `  ${replacement}\n</head>`);
}

function renderPage(template, page) {
  const title = page.title;
  const description = page.description;
  const keywords = page.keywords.join(', ');
  const image = page.image || DEFAULT_IMAGE;
  const structuredData = page.structuredData
    ? `  <script type="application/ld+json">${escapeScript(page.structuredData)}</script>\n`
    : '';

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

  const replacements = [
    [/<meta name="title" content="[^"]*"[^>]*\/>/, `<meta name="title" content="${escapeHtml(title)}" />`],
    [/<meta name="description" content="[^"]*"[^>]*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`],
    [/<meta name="keywords" content="[^"]*"[^>]*\/>/, `<meta name="keywords" content="${escapeHtml(keywords)}" />`],
    [/<link rel="canonical" href="[^"]*"[^>]*\/>/, `<link rel="canonical" href="${escapeHtml(page.url)}" />`],
    [/<meta property="og:url" content="[^"]*"[^>]*\/>/, `<meta property="og:url" content="${escapeHtml(page.url)}" />`],
    [/<meta property="og:title" content="[^"]*"[^>]*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`],
    [/<meta property="og:description" content="[^"]*"[^>]*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`],
    [/<meta property="og:image" content="[^"]*"[^>]*\/>/, `<meta property="og:image" content="${escapeHtml(image)}" />`],
    [/<meta name="twitter:url" content="[^"]*"[^>]*\/>/, `<meta name="twitter:url" content="${escapeHtml(page.url)}" />`],
    [/<meta name="twitter:title" content="[^"]*"[^>]*\/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`],
    [/<meta name="twitter:description" content="[^"]*"[^>]*\/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`],
    [/<meta name="twitter:image" content="[^"]*"[^>]*\/>/, `<meta name="twitter:image" content="${escapeHtml(image)}" />`],
  ];

  replacements.forEach(([pattern, replacement]) => {
    html = replaceOrInsert(html, pattern, `  ${replacement}`);
  });

  if (structuredData) {
    html = html.replace('</head>', `${structuredData}</head>`);
  }

  return html;
}

function writePage(route, html) {
  const outputDir = path.join(buildDir, route);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
}

function categoryPages() {
  const categoriesByValue = new Map();
  [
    { value: 'curated', heading_label: 'Curated', tag_label: 'Curated' },
    ...appList.categories.filter((category) => category.value !== 'curated'),
  ].forEach((category) => {
    categoriesByValue.set(category.value, category);
  });

  const categories = [...categoriesByValue.values()];

  return categories.map((category) => {
    const apps = category.value === 'curated'
      ? appList.apps.filter((app) => app.app.is_curated)
      : appList.apps.filter((app) => app.app.categories[0] === category.value);
    const url = `${SITE_URL}/category/${category.value}`;
    const description = `Browse ${apps.length} ${category.heading_label} apps on Solana. Discover the best ${category.heading_label.toLowerCase()} projects in the Solana ecosystem.`;

    return {
      route: `category/${category.value}`,
      title: `${category.heading_label} | SolApps`,
      description,
      url,
      keywords: [
        category.heading_label,
        `${category.heading_label} Solana`,
        `Solana ${category.heading_label.toLowerCase()}`,
        'Solana apps',
        'Solana dApps',
        'crypto',
        'blockchain',
      ],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${category.heading_label} Apps on Solana`,
        description,
        url,
        isPartOf: {
          '@type': 'WebSite',
          name: 'SolApps',
          url: SITE_URL,
        },
        numberOfItems: apps.length,
      },
    };
  });
}

function appPages() {
  return appList.apps
    .filter((app) => !app.app.is_deprecated)
    .map((app) => {
      const category = appList.categories.find((cat) => cat.value === app.app.categories[0]);
      const url = `${SITE_URL}/apps/${encodeString(app.app.label)}`;

      return {
        route: `apps/${encodeString(app.app.label)}`,
        title: `${app.app.label} | SolApps`,
        description: app.description.short,
        url,
        image: app.urls.logo || DEFAULT_IMAGE,
        keywords: [
          app.app.label,
          `${app.app.label} Solana`,
          category?.heading_label || 'Solana app',
          'Solana app',
          'crypto',
          'blockchain',
          'Web3',
        ],
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: app.app.label,
          description: app.description.short,
          url,
          applicationCategory: category?.heading_label || 'Solana app',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          publisher: {
            '@type': 'Organization',
            name: 'SolApps',
            url: SITE_URL,
          },
          image: app.urls.logo || DEFAULT_IMAGE,
          sameAs: app.urls.website,
        },
      };
    });
}

function generateSeoPages() {
  if (!fs.existsSync(templatePath)) {
    console.log('Skipped SEO page generation: build/index.html not found');
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  const pages = [...categoryPages(), ...appPages()];

  pages.forEach((page) => {
    writePage(page.route, renderPage(template, page));
  });

  console.log(`Generated ${pages.length} SEO route snapshots`);
}

generateSeoPages();
