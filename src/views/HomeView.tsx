import React, { useEffect, useState } from 'react';
import { Grid, LoadingOverlay, createStyles, keyframes } from '@mantine/core';
import { appList } from '@solworks/application-registry';
import { formatCategoryLink } from '../Common';
import { SEO } from '../components/SEO';
import { ApplicationCardLargeV2 } from '../components/ApplicationCardLargeV2';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { ActionCard } from '../components/ActionCard';

const fadeIn = keyframes({
  'from': { opacity: 0, transform: 'translateY(16px)' },
  'to': { opacity: 1, transform: 'translateY(0)' },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    animation: `${fadeIn} 0.6s var(--ease-out-quart) forwards`,
  },
  
  section: {
    marginBottom: '56px',
  },

  gridItem: {
    animation: `${fadeIn} 0.5s var(--ease-out-quart) forwards`,
    animationFillMode: 'both',
  }
}));

export const HomeView = () => {
  const { classes } = useStyles();
  const [curatedRowApps, setCuratedRowApps] = useState<JSX.Element[]>();
  const [sections, setSections] = useState<JSX.Element[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const totalApps = appList.apps.length;
  const categories = appList.categories.map(c => c.heading_label).slice(0, 5);

  useEffect(() => {
    const curatedApps = appList.apps
      .filter((app) => app.app.is_curated)
      .sort((a, b) => a.app.label.localeCompare(b.app.label));

    const curatedCards = curatedApps.slice(0, 8).map((app, index) => (
      <Grid.Col 
        span={12} 
        xs={6} 
        sm={6} 
        md={4} 
        lg={3} 
        key={app.app.value}
        className={classes.gridItem}
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        <ApplicationCardLargeV2
          logoUrl={app.urls.logo}
          appName={app.app.label}
          description={app.description.short}
          appValue={app.app.value}
          category="Curated"
          height={280}
        />
      </Grid.Col>
    ));
    setCuratedRowApps(curatedCards);

    const otherApps = appList.apps.filter((app) => !app.app.is_curated);
    const categories = [...new Set(otherApps.map((app) => app.app.categories[0]))].sort();

    const categorySections = categories.map((catValue) => {
      const categoryDef = appList.categories.find(c => c.value === catValue);
      if (!categoryDef) return null;

      const catApps = otherApps.filter(app => app.app.categories[0] === catValue).slice(0, 4);

      if (catApps.length === 0) return null;

      return (
        <section id={catValue} key={catValue} className={classes.section}>
          <SectionHeader
            title={categoryDef.heading_label}
            href={formatCategoryLink(catValue)}
          />
          <Grid gutter="xl">
            {catApps.map((app, index) => (
              <Grid.Col 
                span={12} 
                xs={6} 
                sm={6} 
                md={4} 
                lg={3} 
                key={app.app.value}
                className={classes.gridItem}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ApplicationCardLargeV2
                  logoUrl={app.urls.logo}
                  appName={app.app.label}
                  description={app.description.short}
                  appValue={app.app.value}
                  height={280}
                />
              </Grid.Col>
            ))}
          </Grid>
        </section>
      );
    }).filter(Boolean) as JSX.Element[];

    setSections(categorySections);
    setIsLoading(false);
  }, [classes.gridItem, classes.section]);

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SolApps – The App Store for Solana',
    description: `Discover ${totalApps}+ Solana applications. Browse curated DeFi, NFT, gaming, and Web3 apps including ${categories.join(', ')}.`,
    url: 'https://solapps.dev',
    isPartOf: {
      '@type': 'WebSite',
      name: 'SolApps',
      url: 'https://solapps.dev',
    },
    about: {
      '@type': 'Thing',
      name: 'Solana Blockchain Applications',
      description: 'Decentralized applications built on the Solana blockchain',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Solana Applications',
      numberOfItems: totalApps,
      itemListOrder: 'https://schema.org/ItemListUnordered',
    },
  };

  return (
    <div className={classes.wrapper}>
      <SEO
        title="SolApps – The App Store for Solana"
        description={`Discover ${totalApps}+ Solana applications. Browse curated DeFi, NFT, gaming, and Web3 apps. Find your next favorite crypto app today.`}
        url="https://solapps.dev"
        keywords={[
          'Solana',
          'Solana apps',
          'Solana dApps',
          'DeFi',
          'NFT',
          'Web3',
          'crypto apps',
          'blockchain apps',
          'Solana ecosystem',
          'decentralized finance',
          'NFT marketplace',
          'crypto wallet',
          'Solana gaming',
          ...categories,
        ]}
        structuredData={homeStructuredData}
      />

      <LoadingOverlay
        visible={isLoading}
        overlayOpacity={1}
        overlayColor="var(--bg-app)"
        loaderProps={{ color: 'var(--color-primary)', variant: 'dots', size: 'lg' }}
        transitionDuration={400}
        style={{ borderRadius: 'var(--radius-lg)' }}
      />

      <Hero />

      <ActionCard
        title="First time here?"
        text="From setting up your wallet to making your first swap—we've got beginner-friendly guides to get you onchain in minutes."
        actionLink="https://docs.solworks.dev/"
        actionButtonText="Start Learning"
      />

      <section id="curated" className={classes.section}>
        <SectionHeader title="Curated Apps" href={formatCategoryLink('curated')} />
        <Grid gutter="xl">
          {curatedRowApps}
        </Grid>
      </section>

      {sections}
    </div>
  );
};
