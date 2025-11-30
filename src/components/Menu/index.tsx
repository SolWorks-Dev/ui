import React, { FC } from 'react';
import { createStyles, Navbar, ScrollArea, Group, Text, keyframes } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Bolt } from 'tabler-icons-react';
import { MenuData } from './MenuData';
import { LinksGroup } from '../LinksGroup';

const fadeIn = keyframes({
  'from': { opacity: 0, transform: 'translateX(-8px)' },
  'to': { opacity: 1, transform: 'translateX(0)' },
});

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: 'var(--bg-app)',
    borderRight: 'none',
    position: 'fixed',
    top: 'var(--header-height)',
    left: 0,
    height: 'calc(100vh - var(--header-height))',
    paddingTop: '24px',
    zIndex: 50,
    overflowY: 'auto',

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '1px',
      height: '100%',
      background: 'linear-gradient(to bottom, var(--border-subtle), transparent)',
      pointerEvents: 'none',
    },

    '@media (max-width: 1279px)': {
      backgroundColor: 'var(--bg-surface)',
      boxShadow: 'var(--shadow-xl)',
    },

    '@media (min-width: 1280px)': {
      width: '280px',
    }
  },

  section: {
    marginLeft: `-${theme.spacing.md}px`,
    marginRight: `-${theme.spacing.md}px`,
    marginBottom: theme.spacing.lg,
  },

  links: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  header: {
    padding: `0 ${theme.spacing.md}px`,
    marginBottom: '8px',
  },

  sectionTitle: {
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-tertiary)',
    fontFamily: 'var(--font-body)',
    marginBottom: '12px',
    paddingLeft: '12px',
  },

  footer: {
    paddingTop: theme.spacing.lg,
    marginTop: 'auto',
    borderTop: '1px solid var(--border-subtle)',
    backgroundColor: 'var(--bg-app)',
    
    '@media (max-width: 1279px)': {
      backgroundColor: 'var(--bg-surface)',
    }
  },

  footerContent: {
    padding: '16px',
    borderRadius: 'var(--radius-lg)',
    background: 'var(--bg-secondary)',
    marginBottom: '16px',
  },

  footerTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '14px',
    color: 'var(--text-primary)',
    marginBottom: '6px',
  },

  footerText: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
  },

  footerLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    fontWeight: 600,
    color: 'var(--color-primary)',
    textDecoration: 'none',
    marginTop: '8px',
    transition: 'gap 0.2s ease',
    
    '&:hover': {
      gap: '8px',
    }
  },

  copyright: {
    textAlign: 'center',
    padding: '8px 0',
  },

  copyrightText: {
    fontSize: '11px',
    color: 'var(--text-tertiary)',
    fontFamily: 'var(--font-body)',
  },

  logoWrapper: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '4px 12px 4px 4px',
    borderRadius: 'var(--radius-full)',
    transition: 'all 0.25s var(--ease-out-quart)',
    
    '&:hover': {
      backgroundColor: 'rgba(255, 107, 53, 0.06)',
    }
  },

  logoIcon: {
    width: '38px',
    height: '38px',
    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8F6B 100%)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)',
  },

  logoTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },

  logoTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '18px',
    letterSpacing: '-0.03em',
    color: 'var(--text-primary)',
    lineHeight: 1.1,
  },

  logoSubtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '9px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-primary)',
    marginTop: '1px',
  },

  mobileHeader: {
    display: 'none',
    animation: `${fadeIn} 0.3s ease-out`,
    
    '@media (max-width: 1279px)': {
      display: 'flex',
    }
  }
}));

export const Menu: FC<{ showNavbar?: boolean; hideMenu?: () => void; isMenuOpen: boolean }> = ({
  showNavbar = true,
  hideMenu,
}) => {
  const { classes } = useStyles();

  return (
    <Navbar
      width={{ base: 300 }}
      p="md"
      className={classes.navbar}
      hidden={!showNavbar}
      hiddenBreakpoint="xl"
    >
      <Navbar.Section className={classes.mobileHeader}>
        <Group position="apart" mb="xl" px="xs">
          <Link to="/" className={classes.logoWrapper} onClick={hideMenu}>
            <div className={classes.logoIcon}>
              <Bolt size={20} strokeWidth={2.5} />
            </div>
            <div className={classes.logoTextGroup}>
              <span className={classes.logoTitle}>SolApps</span>
              <span className={classes.logoSubtitle}>Solana Directory</span>
            </div>
          </Link>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} className={classes.links}>
        <div style={{ paddingBottom: 20 }}>
          <Text className={classes.sectionTitle}>
            Directory
          </Text>
          {MenuData.map((item, index) => (
            <LinksGroup 
              {...item} 
              key={item.label} 
              hideMenu={hideMenu}
            />
          ))}
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <div className={classes.footerContent}>
          <div className={classes.footerTitle}>Building something?</div>
          <div className={classes.footerText}>
            Get your Solana project in front of thousands of users.
          </div>
          <a 
            href="https://docs.solworks.dev" 
            target="_blank" 
            rel="noreferrer"
            className={classes.footerLink}
          >
            Get listed free →
          </a>
        </div>
        <div className={classes.copyright}>
          <Text className={classes.copyrightText}>© 2024 SolApps</Text>
        </div>
      </Navbar.Section>
    </Navbar>
  );
};
