import React from 'react';
import { createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: '1px solid var(--border-subtle)',
    padding: '40px 0 32px',
    marginTop: '80px',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '48px',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      gap: '32px',
    },
  },

  brand: {
    maxWidth: '260px',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  brandName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '18px',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    marginBottom: '8px',
  },

  brandDescription: {
    fontSize: '13px',
    color: 'var(--text-tertiary)',
    lineHeight: 1.6,
  },

  columns: {
    display: 'flex',
    gap: '48px',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      gap: '32px',
    },
  },

  column: {},

  columnTitle: {
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--text-tertiary)',
    marginBottom: '12px',
    fontFamily: 'var(--font-body)',
  },

  columnLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  link: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'color 0.15s ease',

    '&:hover': {
      color: 'var(--text-primary)',
    },
  },

  bottom: {
    borderTop: '1px solid var(--border-subtle)',
    marginTop: '32px',
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
    },
  },

  copyright: {
    fontSize: '12px',
    color: 'var(--text-tertiary)',
    fontFamily: 'var(--font-body)',
  },

  bottomLinks: {
    display: 'flex',
    gap: '16px',
  },

  bottomLink: {
    fontSize: '12px',
    color: 'var(--text-tertiary)',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'color 0.15s ease',

    '&:hover': {
      color: 'var(--text-secondary)',
    },
  },
}));

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div className={classes.brand}>
          <div className={classes.brandName}>SolApps</div>
          <div className={classes.brandDescription}>
            A curated directory of applications and tools built on Solana.
          </div>
        </div>

        <div className={classes.columns}>
          <div className={classes.column}>
            <div className={classes.columnTitle}>Directory</div>
            <div className={classes.columnLinks}>
              <Link to="/category/curated" className={classes.link}>Curated</Link>
              <Link to="/category/defi" className={classes.link}>DeFi</Link>
              <Link to="/category/nft" className={classes.link}>NFTs</Link>
              <Link to="/category/tools" className={classes.link}>Tools</Link>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.columnTitle}>Resources</div>
            <div className={classes.columnLinks}>
              <a href="https://docs.solworks.dev" target="_blank" rel="noreferrer" className={classes.link}>
                Documentation
              </a>
              <a href="https://k722zc9ivtg.typeform.com/to/uN4Pklej" target="_blank" rel="noreferrer" className={classes.link}>
                Get listed
              </a>
              <a href="https://k722zc9ivtg.typeform.com/to/OHTjdlkb" target="_blank" rel="noreferrer" className={classes.link}>
                Partnerships
              </a>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.columnTitle}>Ecosystem</div>
            <div className={classes.columnLinks}>
              <a href="https://solworks.dev" target="_blank" rel="noreferrer" className={classes.link}>SolWorks</a>
              <a href="https://sujiko.trade" target="_blank" rel="noreferrer" className={classes.link}>Sujiko</a>
              <a href="https://soltoolkit.dev" target="_blank" rel="noreferrer" className={classes.link}>SolToolkit</a>
              <a href="https://soldisperse.app" target="_blank" rel="noreferrer" className={classes.link}>SolDisperse</a>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        <span className={classes.copyright}>&copy; {new Date().getFullYear()} SolApps</span>
        <div className={classes.bottomLinks}>
          <a href="https://solworks.dev" target="_blank" rel="noreferrer" className={classes.bottomLink}>
            Built by SolWorks
          </a>
        </div>
      </div>
    </footer>
  );
};
