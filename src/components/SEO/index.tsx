import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'SolApps – The App Store for Solana';
const DEFAULT_DESCRIPTION = 'Discover the best Solana applications. SolApps is a curated directory of 500+ DeFi, NFT, gaming, and Web3 apps built on Solana.';
const DEFAULT_URL = 'https://solapps.dev';
const DEFAULT_IMAGE = 'https://solapps.dev/og-image.png';
const DEFAULT_KEYWORDS = [
  'Solana',
  'Solana apps',
  'Solana dApps',
  'DeFi',
  'NFT',
  'Web3',
  'crypto',
  'blockchain',
  'Solana ecosystem',
  'Solana directory',
  'cryptocurrency apps'
];

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = DEFAULT_KEYWORDS,
  author = 'SolApps',
  publishedTime,
  modifiedTime,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | SolApps`;
  
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SolApps',
    alternateName: 'SolApps - Solana App Directory',
    url: DEFAULT_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: 'SolApps',
      url: DEFAULT_URL,
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${DEFAULT_URL}/?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const jsonLd = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="SolApps" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific (for blog posts, etc.) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SolApps_" />
      <meta name="twitter:creator" content="@SolApps_" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

interface AppSEOProps {
  appName: string;
  appDescription: string;
  appUrl: string;
  category?: string;
  logoUrl?: string;
  websiteUrl?: string;
}

export const AppSEO = ({
  appName,
  appDescription,
  appUrl,
  category,
  logoUrl,
  websiteUrl,
}: AppSEOProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    description: appDescription,
    url: appUrl,
    applicationCategory: category || 'DeFi',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SolApps',
      url: DEFAULT_URL,
    },
    ...(logoUrl && {
      image: logoUrl,
    }),
    ...(websiteUrl && {
      sameAs: websiteUrl,
    }),
  };

  const keywords = [
    appName,
    `${appName} Solana`,
    category || 'DeFi',
    'Solana app',
    'crypto',
    'blockchain',
    'Web3',
  ];

  return (
    <SEO
      title={appName}
      description={appDescription}
      url={appUrl}
      keywords={keywords}
      type="website"
      structuredData={structuredData}
    />
  );
};

interface CategorySEOProps {
  categoryName: string;
  categorySlug: string;
  appCount?: number;
}

export const CategorySEO = ({
  categoryName,
  categorySlug,
  appCount,
}: CategorySEOProps) => {
  const description = appCount
    ? `Browse ${appCount} ${categoryName} apps on Solana. Discover the best ${categoryName.toLowerCase()} projects in the Solana ecosystem.`
    : `Browse ${categoryName} apps on Solana. Discover the best ${categoryName.toLowerCase()} projects in the Solana ecosystem.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} Apps on Solana`,
    description,
    url: `${DEFAULT_URL}/category/${categorySlug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'SolApps',
      url: DEFAULT_URL,
    },
    ...(appCount && {
      numberOfItems: appCount,
    }),
  };

  const keywords = [
    categoryName,
    `${categoryName} Solana`,
    `Solana ${categoryName.toLowerCase()}`,
    'Solana apps',
    'Solana dApps',
    'crypto',
    'blockchain',
  ];

  return (
    <SEO
      title={categoryName}
      description={description}
      url={`${DEFAULT_URL}/category/${categorySlug}`}
      keywords={keywords}
      structuredData={structuredData}
    />
  );
};

export default SEO;

