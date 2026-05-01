import React from 'react';
import { createStyles, Grid, keyframes } from '@mantine/core';
import { Bolt, Search } from 'tabler-icons-react';
import { SEO } from '../components/SEO';

const enter = keyframes({
  from: { opacity: 0, transform: 'translateY(18px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

const previewThemes = [
  {
    id: 'pulse',
    name: 'Pulse Terminal',
    tagline: 'A high-signal trading cockpit for power users.',
    description: 'Dark, electric, dense, and fast. Built around live signals, command search, sharp cards, and a protocol-first feel.',
    background: 'radial-gradient(circle at top left, rgba(20, 241, 149, 0.2), transparent 32%), linear-gradient(135deg, #060A12 0%, #0B1020 52%, #111827 100%)',
    surface: 'rgba(10, 16, 30, 0.76)',
    raised: 'rgba(18, 27, 47, 0.86)',
    border: 'rgba(125, 255, 206, 0.18)',
    text: '#F7FFF9',
    muted: '#A7B8C7',
    accent: '#14F195',
    accentAlt: '#9945FF',
    glow: '0 24px 80px rgba(20, 241, 149, 0.18)',
    hero: 'Own the fastest lane on Solana.',
    cta: 'Explore live apps',
  },
  {
    id: 'atlas',
    name: 'Atlas Editorial',
    tagline: 'A credible app guide with magazine-grade curation.',
    description: 'Bright, structured, and trustworthy. Ideal if Solapps should feel like the default research homepage for the ecosystem.',
    background: 'linear-gradient(135deg, #F7F3EA 0%, #EEE5D3 48%, #DDE8DC 100%)',
    surface: 'rgba(255, 252, 245, 0.86)',
    raised: '#FFFFFF',
    border: 'rgba(47, 42, 34, 0.14)',
    text: '#201A14',
    muted: '#695F53',
    accent: '#D97706',
    accentAlt: '#2F6F68',
    glow: '0 24px 70px rgba(65, 48, 24, 0.14)',
    hero: 'Find the Solana app worth your next click.',
    cta: 'Read the shortlist',
  },
  {
    id: 'arcade',
    name: 'Arcade Pop',
    tagline: 'A playful discovery layer for newcomers.',
    description: 'Colorful, social, and less intimidating. Uses chunky cards, big type, badges, and soft motion to make browsing feel fun.',
    background: 'radial-gradient(circle at 14% 12%, rgba(255, 211, 105, 0.7), transparent 22%), radial-gradient(circle at 82% 18%, rgba(255, 91, 129, 0.42), transparent 24%), linear-gradient(135deg, #FFF7D6 0%, #FDE5F5 46%, #DFF6FF 100%)',
    surface: 'rgba(255, 255, 255, 0.78)',
    raised: '#FFFFFF',
    border: 'rgba(65, 50, 125, 0.14)',
    text: '#251846',
    muted: '#6E5D8E',
    accent: '#FF5B81',
    accentAlt: '#5B6CFF',
    glow: '0 26px 80px rgba(255, 91, 129, 0.2)',
    hero: 'Browse Solana like an app store again.',
    cta: 'Start discovering',
  },
  {
    id: 'vault',
    name: 'Vault Minimal',
    tagline: 'A premium product directory for serious builders.',
    description: 'Quiet, monochrome, and refined. Designed for trust, enterprise polish, and a calmer Solana brand expression.',
    background: 'linear-gradient(135deg, #0F1115 0%, #191D24 44%, #E7E1D6 44%, #F5F0E8 100%)',
    surface: 'rgba(255, 255, 255, 0.82)',
    raised: '#FBF8F1',
    border: 'rgba(22, 24, 29, 0.16)',
    text: '#111318',
    muted: '#5B6069',
    accent: '#111318',
    accentAlt: '#A37B38',
    glow: '0 28px 90px rgba(17, 19, 24, 0.18)',
    hero: 'The vetted index for Solana applications.',
    cta: 'View verified apps',
  },
];

const sampleApps = [
  { name: 'Jupiter', tag: 'Swap', score: '98' },
  { name: 'Backpack', tag: 'Wallet', score: '95' },
  { name: 'Tensor', tag: 'NFTs', score: '92' },
];

const useStyles = createStyles((theme) => ({
  page: {
    animation: `${enter} 0.5s var(--ease-out-quart) forwards`,

    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },

  intro: {
    maxWidth: '980px',
    marginBottom: '28px',
  },

  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-full)',
    background: 'var(--bg-surface)',
    color: 'var(--color-primary)',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.1em',
    marginBottom: '18px',
    padding: '8px 12px',
    textTransform: 'uppercase',
  },

  title: {
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(42px, 8vw, 86px)',
    fontWeight: 900,
    letterSpacing: '-0.07em',
    lineHeight: 0.92,
    margin: '0 0 20px',
  },

  copy: {
    color: 'var(--text-secondary)',
    fontSize: '18px',
    lineHeight: 1.7,
    margin: 0,
    maxWidth: '760px',
  },

  selector: {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    margin: '34px 0',

    [theme.fn.smallerThan('md')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },

    [theme.fn.smallerThan('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },

  selectorButton: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    padding: '16px',
    textAlign: 'left',
    transition: 'border-color 200ms ease, background-color 200ms ease, transform 250ms var(--ease-out-quart), box-shadow 250ms var(--ease-out-quart)',

    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        borderColor: 'var(--border-strong)',
        boxShadow: 'var(--shadow-md)',
        transform: 'translateY(-2px)',
      },
    },

    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',

      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': {
          transform: 'none',
        },
      },
    },
  },

  selectorButtonActive: {
    borderColor: 'var(--color-primary)',
    boxShadow: '0 0 0 3px var(--color-primary-subtle)',
  },

  selectorName: {
    display: 'block',
    fontSize: '15px',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    marginBottom: '5px',
  },

  selectorText: {
    color: 'var(--text-secondary)',
    display: 'block',
    fontSize: '12px',
    lineHeight: 1.45,
  },

  themeCard: {
    borderRadius: '32px',
    boxShadow: 'var(--preview-glow)',
    color: 'var(--preview-text)',
    minHeight: '640px',
    overflow: 'hidden',
    padding: '18px',
    position: 'relative',
  },

  browser: {
    backdropFilter: 'blur(20px)',
    background: 'var(--preview-surface)',
    border: '1px solid var(--preview-border)',
    borderRadius: '26px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '604px',
    overflow: 'hidden',
  },

  browserTop: {
    alignItems: 'center',
    borderBottom: '1px solid var(--preview-border)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '18px 20px',
  },

  brand: {
    alignItems: 'center',
    display: 'flex',
    gap: '10px',
    fontWeight: 900,
    letterSpacing: '-0.04em',
  },

  brandMark: {
    alignItems: 'center',
    background: 'var(--preview-accent)',
    borderRadius: '12px',
    color: 'var(--preview-mark-text)',
    display: 'flex',
    height: '34px',
    justifyContent: 'center',
    width: '34px',
  },

  navPills: {
    display: 'flex',
    gap: '8px',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  navPill: {
    border: '1px solid var(--preview-border)',
    borderRadius: '999px',
    color: 'var(--preview-muted)',
    fontSize: '12px',
    fontWeight: 700,
    padding: '8px 11px',
  },

  previewBody: {
    display: 'grid',
    gap: '22px',
    gridTemplateColumns: 'minmax(0, 1.08fr) minmax(280px, 0.92fr)',
    padding: '28px',

    [theme.fn.smallerThan('md')]: {
      gridTemplateColumns: '1fr',
      padding: '22px',
    },
  },

  heroPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '506px',
  },

  themeLabel: {
    color: 'var(--preview-accent)',
    fontSize: '12px',
    fontWeight: 900,
    letterSpacing: '0.13em',
    marginBottom: '18px',
    textTransform: 'uppercase',
  },

  heroTitle: {
    color: 'var(--preview-text)',
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(42px, 6vw, 72px)',
    fontWeight: 900,
    letterSpacing: '-0.075em',
    lineHeight: 0.92,
    margin: '0 0 18px',
    maxWidth: '620px',
  },

  heroDescription: {
    color: 'var(--preview-muted)',
    fontSize: '16px',
    lineHeight: 1.7,
    margin: 0,
    maxWidth: '560px',
  },

  searchBar: {
    alignItems: 'center',
    background: 'var(--preview-raised)',
    border: '1px solid var(--preview-border)',
    borderRadius: '22px',
    display: 'flex',
    gap: '12px',
    marginTop: '28px',
    padding: '15px 17px',
  },

  searchText: {
    color: 'var(--preview-muted)',
    flex: 1,
    fontSize: '14px',
    fontWeight: 700,
  },

  commandKey: {
    border: '1px solid var(--preview-border)',
    borderRadius: '10px',
    color: 'var(--preview-muted)',
    fontSize: '12px',
    fontWeight: 900,
    padding: '6px 8px',
  },

  stats: {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    marginTop: '24px',

    [theme.fn.smallerThan('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },

  stat: {
    background: 'var(--preview-raised)',
    border: '1px solid var(--preview-border)',
    borderRadius: '20px',
    padding: '16px',
  },

  statValue: {
    color: 'var(--preview-text)',
    display: 'block',
    fontSize: '22px',
    fontWeight: 900,
    letterSpacing: '-0.04em',
  },

  statLabel: {
    color: 'var(--preview-muted)',
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    marginTop: '3px',
  },

  ctaRow: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '30px',
  },

  cta: {
    alignItems: 'center',
    background: 'var(--preview-accent)',
    border: 0,
    borderRadius: '999px',
    color: 'var(--preview-mark-text)',
    display: 'inline-flex',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 900,
    gap: '10px',
    padding: '14px 18px',
  },

  secondaryCta: {
    border: '1px solid var(--preview-border)',
    borderRadius: '999px',
    color: 'var(--preview-text)',
    fontSize: '14px',
    fontWeight: 800,
    padding: '13px 17px',
  },

  sidePanel: {
    display: 'grid',
    gap: '14px',
  },

  appCard: {
    background: 'var(--preview-raised)',
    border: '1px solid var(--preview-border)',
    borderRadius: '24px',
    padding: '18px',
  },

  appTop: {
    alignItems: 'center',
    display: 'flex',
    gap: '13px',
    justifyContent: 'space-between',
  },

  appIdentity: {
    alignItems: 'center',
    display: 'flex',
    gap: '12px',
  },

  appIcon: {
    alignItems: 'center',
    background: 'linear-gradient(135deg, var(--preview-accent), var(--preview-accent-alt))',
    borderRadius: '16px',
    color: 'white',
    display: 'flex',
    fontWeight: 900,
    height: '46px',
    justifyContent: 'center',
    width: '46px',
  },

  appName: {
    color: 'var(--preview-text)',
    display: 'block',
    fontSize: '16px',
    fontWeight: 900,
    letterSpacing: '-0.03em',
  },

  appTag: {
    color: 'var(--preview-muted)',
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    marginTop: '2px',
  },

  score: {
    border: '1px solid var(--preview-border)',
    borderRadius: '999px',
    color: 'var(--preview-accent)',
    fontSize: '12px',
    fontWeight: 900,
    padding: '7px 9px',
  },

  appMeta: {
    color: 'var(--preview-muted)',
    fontSize: '13px',
    lineHeight: 1.55,
    margin: '14px 0 0',
  },

  palette: {
    alignItems: 'center',
    background: 'var(--preview-raised)',
    border: '1px solid var(--preview-border)',
    borderRadius: '24px',
    display: 'flex',
    gap: '10px',
    padding: '16px',
  },

  swatch: {
    border: '1px solid var(--preview-border)',
    borderRadius: '999px',
    height: '34px',
    width: '34px',
  },

  summaryCard: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-xl)',
    padding: '24px',
  },

  summaryTitle: {
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-display)',
    fontSize: '22px',
    fontWeight: 900,
    letterSpacing: '-0.04em',
    margin: '0 0 10px',
  },

  summaryText: {
    color: 'var(--text-secondary)',
    fontSize: '14px',
    lineHeight: 1.65,
    margin: 0,
  },
}));

export const RedesignPreviewView = () => {
  const { classes, cx } = useStyles();
  const [selectedTheme, setSelectedTheme] = React.useState(previewThemes[0].id);
  const selected = previewThemes.find((theme) => theme.id === selectedTheme) || previewThemes[0];

  return (
    <main className={classes.page}>
      <SEO
        title="Redesign Preview"
        description="Preview four visual directions for the Solapps redesign."
        url="https://solapps.dev/redesign-preview"
        noindex
      />

      <section className={classes.intro}>
        <div className={classes.eyebrow}>
          <Bolt size={15} />
          Redesign preview
        </div>
        <h1 className={classes.title}>Four directions for a sharper Solapps.</h1>
        <p className={classes.copy}>
          Pick a theme direction first. Each option previews the homepage tone, app cards, search surface, palette, and information density before the full site gets rebuilt.
        </p>
      </section>

      <div className={classes.selector} aria-label="Theme directions">
        {previewThemes.map((theme) => (
          <button
            type="button"
            key={theme.id}
            className={cx(classes.selectorButton, {
              [classes.selectorButtonActive]: selectedTheme === theme.id,
            })}
            onClick={() => setSelectedTheme(theme.id)}
          >
            <span className={classes.selectorName}>{theme.name}</span>
            <span className={classes.selectorText}>{theme.tagline}</span>
          </button>
        ))}
      </div>

      <section
        className={classes.themeCard}
        style={{
          '--preview-accent': selected.accent,
          '--preview-accent-alt': selected.accentAlt,
          '--preview-background': selected.background,
          '--preview-border': selected.border,
          '--preview-glow': selected.glow,
          '--preview-mark-text': selected.id === 'atlas' || selected.id === 'arcade' ? '#FFFFFF' : selected.id === 'vault' ? '#F8F3EA' : '#061018',
          '--preview-muted': selected.muted,
          '--preview-raised': selected.raised,
          '--preview-surface': selected.surface,
          '--preview-text': selected.text,
          background: selected.background,
        } as React.CSSProperties}
      >
        <div className={classes.browser}>
          <div className={classes.browserTop}>
            <div className={classes.brand}>
              <span className={classes.brandMark}>
                <Bolt size={19} strokeWidth={2.6} />
              </span>
              Solapps
            </div>
            <div className={classes.navPills}>
              <span className={classes.navPill}>Curated</span>
              <span className={classes.navPill}>DeFi</span>
              <span className={classes.navPill}>Tools</span>
            </div>
          </div>

          <div className={classes.previewBody}>
            <div className={classes.heroPanel}>
              <div>
                <div className={classes.themeLabel}>{selected.name}</div>
                <h2 className={classes.heroTitle}>{selected.hero}</h2>
                <p className={classes.heroDescription}>{selected.description}</p>

                <div className={classes.searchBar}>
                  <Search size={19} />
                  <span className={classes.searchText}>Search wallets, swaps, games, analytics...</span>
                  <span className={classes.commandKey}>CMD K</span>
                </div>

                <div className={classes.stats}>
                  <div className={classes.stat}>
                    <span className={classes.statValue}>540+</span>
                    <span className={classes.statLabel}>apps indexed</span>
                  </div>
                  <div className={classes.stat}>
                    <span className={classes.statValue}>42</span>
                    <span className={classes.statLabel}>fresh this month</span>
                  </div>
                  <div className={classes.stat}>
                    <span className={classes.statValue}>18</span>
                    <span className={classes.statLabel}>categories</span>
                  </div>
                </div>
              </div>

              <div className={classes.ctaRow}>
                <button type="button" className={classes.cta}>{selected.cta}</button>
                <span className={classes.secondaryCta}>Compare categories</span>
              </div>
            </div>

            <aside className={classes.sidePanel}>
              {sampleApps.map((app) => (
                <article className={classes.appCard} key={app.name}>
                  <div className={classes.appTop}>
                    <div className={classes.appIdentity}>
                      <span className={classes.appIcon}>{app.name.charAt(0)}</span>
                      <span>
                        <span className={classes.appName}>{app.name}</span>
                        <span className={classes.appTag}>{app.tag}</span>
                      </span>
                    </div>
                    <span className={classes.score}>{app.score}</span>
                  </div>
                  <p className={classes.appMeta}>Verified Solana app with clear category fit, fresh metadata, and quick paths to launch or learn.</p>
                </article>
              ))}

              <div className={classes.palette}>
                {[selected.accent, selected.accentAlt, selected.text, selected.muted].map((color) => (
                  <span className={classes.swatch} style={{ background: color }} key={color} />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Grid gutter="xl" mt={34}>
        {previewThemes.map((theme) => (
          <Grid.Col span={12} md={6} key={theme.id}>
            <article className={classes.summaryCard}>
              <h3 className={classes.summaryTitle}>{theme.name}</h3>
              <p className={classes.summaryText}>{theme.description}</p>
            </article>
          </Grid.Col>
        ))}
      </Grid>
    </main>
  );
};
