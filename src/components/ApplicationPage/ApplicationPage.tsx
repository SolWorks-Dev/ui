import React, { FC, useEffect, useState } from 'react';
import { createStyles, Grid, Badge, Button, keyframes } from '@mantine/core';
import { ApplicationCardLargeV2 } from '../ApplicationCardLargeV2';
import { LinkCard } from '../LinkCard';
import { SocialsCard } from '../SocialsCard';
import { Breadcrumb } from '../Breadcrumb';
import { useParams } from 'react-router-dom';
import { categoryToColorHex, encodeString, formatLink, shuffle } from '../../Common';
import { App, appList } from '@solworks/application-registry';
import { AppSEO } from '../SEO';
import { SectionHeader } from '../SectionHeader';
import { Logo } from '../Logo';
import ReactMarkdown from 'react-markdown';
import { ExternalLink, AlertTriangle, ArrowRight } from 'tabler-icons-react';

export interface ApplicationPageProps {}

const fadeIn = keyframes({
  'from': { opacity: 0, transform: 'translateY(16px)' },
  'to': { opacity: 1, transform: 'translateY(0)' },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    animation: `${fadeIn} 0.5s var(--ease-out-quart) forwards`,
  },

  heroSection: {
    background: 'var(--bg-surface)',
    borderRadius: 'var(--radius-2xl)',
    border: '1px solid var(--border-subtle)',
    padding: '40px',
    marginBottom: '32px',
    boxShadow: 'var(--shadow-card)',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      background: 'var(--gradient-mesh)',
      opacity: 0.5,
      zIndex: 0,
    },

    '@media (max-width: 768px)': {
      padding: '28px',
    }
  },

  heroContent: {
    position: 'relative',
    zIndex: 1,
  },

  heroTop: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '24px',
    marginBottom: '24px',

    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }
  },

  logoWrapper: {
    padding: '8px',
    background: 'white',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-md)',
    flexShrink: 0,
  },

  heroInfo: {
    flex: 1,
  },

  appName: {
    fontFamily: 'var(--font-display)',
    fontSize: '36px',
    fontWeight: 800,
    color: 'var(--text-primary)',
    letterSpacing: '-0.03em',
    marginBottom: '12px',
    lineHeight: 1.1,

    '@media (max-width: 768px)': {
      fontSize: '28px',
    }
  },

  tagRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',

    '@media (max-width: 480px)': {
      justifyContent: 'center',
    }
  },

  categoryBadge: {
    background: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    padding: '8px 14px',
    borderRadius: 'var(--radius-full)',
    textTransform: 'capitalize',
    border: 'none',
  },

  deprecatedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: '#EF4444',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    padding: '8px 14px',
    borderRadius: 'var(--radius-full)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
  },

  heroActions: {
    display: 'flex',
    gap: '12px',
    marginTop: '24px',

    '@media (max-width: 480px)': {
      flexDirection: 'column',
      width: '100%',
    }
  },

  primaryButton: {
    height: '48px',
    padding: '0 28px',
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: 'var(--font-body)',
    color: 'white',
    background: 'var(--gradient-dark)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    transition: 'all 0.3s var(--ease-out-quart)',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-md)',
    },

    '@media (max-width: 480px)': {
      width: '100%',
    }
  },

  secondaryButton: {
    height: '48px',
    padding: '0 28px',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-primary)',
    background: 'white',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-full)',
    transition: 'all 0.3s var(--ease-out-quart)',

    '&:hover': {
      transform: 'translateY(-2px)',
      background: 'var(--bg-secondary)',
      borderColor: 'var(--text-primary)',
    },

    '@media (max-width: 480px)': {
      width: '100%',
    }
  },

  descriptionCard: {
    background: 'var(--bg-surface)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-subtle)',
    padding: '32px',
    boxShadow: 'var(--shadow-xs)',

    '@media (max-width: 768px)': {
      padding: '24px',
    }
  },

  descriptionTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '18px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '20px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--border-subtle)',
  },

  description: {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    lineHeight: 1.75,
    color: 'var(--text-secondary)',

    '& p': {
      margin: '0 0 16px 0',
      '&:last-child': { marginBottom: 0 }
    },

    '& a': {
      color: 'var(--color-primary)',
      textDecoration: 'none',
      fontWeight: 500,
      '&:hover': { textDecoration: 'underline' }
    },

    '& ul, & ol': {
      paddingLeft: '20px',
      margin: '16px 0',
    },

    '& li': {
      marginBottom: '8px',
    },

    '& code': {
      fontFamily: 'monospace',
      backgroundColor: 'var(--bg-secondary)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '13px',
    },

    '& h1, & h2, & h3, & h4': {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginTop: '24px',
      marginBottom: '12px',
    }
  },

  sidebar: {
    position: 'sticky',
    top: 'calc(var(--header-height) + 24px)',
  },

  sidebarSection: {
    marginBottom: '24px',
  },

  sidebarTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '14px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  linksGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  relatedSection: {
    marginTop: '64px',
    paddingTop: '48px',
    borderTop: '1px solid var(--border-subtle)',
  },

  relatedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },

  relatedTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: '24px',
    fontWeight: 800,
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
  },

  viewAllLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',

    '&:hover': {
      color: 'var(--text-primary)',
      gap: '10px',
    }
  }
}));

export const ApplicationPage: FC<ApplicationPageProps> = () => {
  let { id } = useParams();
  const [data, setData] = useState<App>();
  const [linkCards, setLinkCards] = useState<JSX.Element[]>([]);
  const [relatedCards, setRelatedCards] = useState<JSX.Element[]>([]);
  const { classes } = useStyles();

  useEffect(() => {
    const appData = appList.apps.find((app) => encodeString(app.app.label) === id);
    if (appData) {
      setData(appData as App);

      const tempCards: JSX.Element[] = [];
      
      tempCards.push(
        <LinkCard key="website" title="Website" url={appData.urls.website} />
      );

      if (appData.urls.application && appData.urls.application !== appData.urls.website) {
        tempCards.push(
          <LinkCard key="app" title="Launch App" url={appData.urls.application} />
        );
      }

      if (appData.urls.github && appData.urls.github !== "") {
        tempCards.push(
          <LinkCard key="github" title="GitHub" url={appData.urls.github} />
        );
      }

      if (appData.urls.other) {
        appData.urls.other.forEach((url) => {
          tempCards.push(
            <LinkCard key={url.name} title={url.name} url={url.url} />
          );
        });
      }
      setLinkCards(tempCards);

      let relatedApps = appList.apps
        .filter((app) => app.app.categories.includes(appData.app.categories[0]))
        .filter((x) => x.app.value !== appData.app.value);
      relatedApps = shuffle(relatedApps).slice(0, 4);

      setRelatedCards(
        relatedApps.map((app) => (
          <Grid.Col xs={6} md={6} lg={3} key={app.app.value}>
            <ApplicationCardLargeV2
              logoUrl={app.urls.logo}
              appName={app.app.label}
              description={app.description.short}
              appValue={app.app.value}
              height={260}
            />
          </Grid.Col>
        ))
      );
    }
  }, [id]);

  if (!data) return null;

  const category = appList.categories.find((cat) => cat.value === data.app.categories[0]);

  return (
    <div className={classes.wrapper}>
      <AppSEO
        appName={data.app.label}
        appDescription={data.description.short}
        appUrl={`https://solapps.dev${formatLink(data.app.label)}`}
        category={category?.heading_label}
        logoUrl={data.urls.logo}
        websiteUrl={data.urls.website}
      />

      <Breadcrumb appName={data.app.label} categoryName={category?.heading_label} />

      {/* Hero Section */}
      <div className={classes.heroSection}>
        <div className={classes.heroContent}>
          <div className={classes.heroTop}>
            <div className={classes.logoWrapper}>
              <Logo logoUrl={data.urls.logo} altText={`${data.app.label} logo`} sizePx={80} />
            </div>
            <div className={classes.heroInfo}>
              <h1 className={classes.appName}>{data.app.label}</h1>
              <div className={classes.tagRow}>
                {category && (
                  <Badge className={classes.categoryBadge}>
                    {category.heading_label}
                  </Badge>
                )}
                {data.app.is_deprecated && (
                  <div className={classes.deprecatedBadge}>
                    <AlertTriangle size={14} />
                    Deprecated
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={classes.heroActions}>
            {data.urls.application && (
              <Button
                className={classes.primaryButton}
                component="a"
                href={data.urls.application}
                target="_blank"
                rightIcon={<ExternalLink size={16} />}
              >
                Launch App
              </Button>
            )}
            <Button
              className={classes.secondaryButton}
              component="a"
              href={data.urls.website}
              target="_blank"
              rightIcon={<ExternalLink size={16} />}
            >
              Visit Website
            </Button>
          </div>
        </div>
      </div>

      <Grid gutter={32}>
        {/* Main Content */}
        <Grid.Col xs={12} md={7} lg={8}>
          <div className={classes.descriptionCard}>
            <div className={classes.descriptionTitle}>About {data.app.label}</div>
            <div className={classes.description}>
              <ReactMarkdown>{data.description.long}</ReactMarkdown>
            </div>
          </div>
        </Grid.Col>

        {/* Sidebar */}
        <Grid.Col xs={12} md={5} lg={4}>
          <div className={classes.sidebar}>
            <div className={classes.sidebarSection}>
              <div className={classes.sidebarTitle}>Links</div>
              <div className={classes.linksGrid}>
                {linkCards}
              </div>
            </div>

            <div className={classes.sidebarSection}>
              <div className={classes.sidebarTitle}>Community</div>
              <SocialsCard
                twitter={data.socials.twitter.map((handle) => ({
                  url: `https://twitter.com/${handle}`,
                  text: `@${handle}`,
                }))}
                discord={data.socials.discord.map((invite) => ({
                  url: `https://discord.gg/${invite}`,
                  text: 'Join Discord',
                }))}
                medium={data.socials.medium.map((blogLink) => ({
                  url: blogLink,
                  text: 'Read Blog',
                }))}
                telegram={data.socials.telegram.map((groupInvite) => ({
                  url: `https://t.me/${groupInvite}`,
                  text: 'Join Telegram',
                }))}
              />
            </div>
          </div>
        </Grid.Col>

        {/* Related Apps */}
        {relatedCards.length > 0 && (
          <Grid.Col span={12}>
            <div className={classes.relatedSection}>
              <div className={classes.relatedHeader}>
                <h2 className={classes.relatedTitle}>Similar Apps</h2>
                {category && (
                  <a href={`/categories/${category.value}`} className={classes.viewAllLink}>
                    View all {category.heading_label}
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
              <Grid gutter="xl">{relatedCards}</Grid>
            </div>
          </Grid.Col>
        )}
      </Grid>
    </div>
  );
};
