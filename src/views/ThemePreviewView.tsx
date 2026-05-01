import React, { FC, useState, useMemo } from 'react';
import './ThemePreviewView.css';

type ThemeKey = 'terminal' | 'editorial' | 'brutalist' | 'aurora';

interface ThemeMeta {
  key: ThemeKey;
  name: string;
  tagline: string;
  description: string;
}

const THEMES: ThemeMeta[] = [
  {
    key: 'terminal',
    name: 'Terminal',
    tagline: 'Built for builders.',
    description:
      'Monospace, dense, signal-rich. A Bloomberg-style terminal for the Solana ecosystem — high information density, no marketing fluff, every pixel earns its place.',
  },
  {
    key: 'editorial',
    name: 'Editorial',
    tagline: 'A magazine for onchain culture.',
    description:
      'Oversized serif headlines, generous whitespace, numbered listings. Treats Solana apps like the New York Times treats reviews — opinionated, considered, slow to load you in.',
  },
  {
    key: 'brutalist',
    name: 'Brutalist',
    tagline: 'No rounded corners. No vibes. Just apps.',
    description:
      'Hard yellow + ink black, raw borders, sticker badges, rotated chips. Anti-corporate, anti-AI, post-Web3-cliché. Loud where everything else whispers.',
  },
  {
    key: 'aurora',
    name: 'Aurora',
    tagline: 'Solana, after dark.',
    description:
      'Refined dark mode that finally uses Solana’s purple/green palette correctly. Layered glass, restrained motion, sharp typography. Premium without trying.',
  },
];

interface MockApp {
  name: string;
  category: string;
  blurb: string;
  initial: string;
  accent: string;
  metric?: string;
}

const APPS: MockApp[] = [
  { name: 'Jupiter', category: 'Aggregator', blurb: 'Best-price routing across every Solana DEX in one swap.', initial: 'J', accent: '#C7F284', metric: '$2.4B / 24h' },
  { name: 'Raydium', category: 'AMM', blurb: 'On-chain liquidity hub powering hybrid AMM and concentrated pools.', initial: 'R', accent: '#9945FF', metric: '$840M TVL' },
  { name: 'Drift', category: 'Derivatives', blurb: 'High-leverage perps, spot, and lending on a single margin account.', initial: 'D', accent: '#22D1EE', metric: '50x leverage' },
  { name: 'Marinade', category: 'Staking', blurb: 'Liquid staking spread across hundreds of validators automatically.', initial: 'M', accent: '#FF8B3D', metric: '7.2% APY' },
  { name: 'Tensor', category: 'NFT', blurb: 'Pro-grade NFT trading terminal with depth charts and sweeps.', initial: 'T', accent: '#FF4B6E', metric: '410k traders' },
  { name: 'Phoenix', category: 'DEX', blurb: 'Fully on-chain limit order book — no AMMs, no compromise.', initial: 'P', accent: '#FFCB30', metric: '0 downtime' },
  { name: 'Kamino', category: 'Lending', blurb: 'Automated liquidity, leverage, and yield strategies in one vault.', initial: 'K', accent: '#5BFFB1', metric: '$1.1B TVL' },
  { name: 'MagicEden', category: 'Marketplace', blurb: 'The largest NFT marketplace on Solana, with cross-chain reach.', initial: 'M', accent: '#E42575', metric: '#1 by volume' },
];

const CATEGORIES = [
  { name: 'DeFi', count: 142 },
  { name: 'NFT', count: 87 },
  { name: 'Gaming', count: 54 },
  { name: 'Infra', count: 39 },
  { name: 'Wallets', count: 21 },
  { name: 'DAOs', count: 18 },
  { name: 'Payments', count: 14 },
  { name: 'Social', count: 12 },
];

export const ThemePreviewView: FC = () => {
  const [active, setActive] = useState<ThemeKey>('terminal');

  const activeMeta = useMemo(() => THEMES.find((t) => t.key === active)!, [active]);

  return (
    <div className="tp-root">
      <ThemeSwitcher active={active} onChange={setActive} />
      <div className="tp-stage" data-theme={active}>
        <div className="tp-stage-header">
          <div>
            <span className="tp-stage-eyebrow">Theme {THEMES.findIndex(t => t.key === active) + 1} of 4</span>
            <h2 className="tp-stage-name">{activeMeta.name}</h2>
            <p className="tp-stage-tagline">{activeMeta.tagline}</p>
          </div>
          <p className="tp-stage-desc">{activeMeta.description}</p>
        </div>

        {active === 'terminal' && <TerminalTheme />}
        {active === 'editorial' && <EditorialTheme />}
        {active === 'brutalist' && <BrutalistTheme />}
        {active === 'aurora' && <AuroraTheme />}
      </div>
    </div>
  );
};

const ThemeSwitcher: FC<{ active: ThemeKey; onChange: (k: ThemeKey) => void }> = ({ active, onChange }) => (
  <nav className="tp-switcher" aria-label="Theme switcher">
    <div className="tp-switcher-inner">
      <div className="tp-switcher-brand">
        <span className="tp-switcher-dot" />
        SolApps · Theme Preview
      </div>
      <div className="tp-switcher-tabs" role="tablist">
        {THEMES.map((t, i) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={active === t.key}
            className={`tp-switcher-tab ${active === t.key ? 'is-active' : ''}`}
            onClick={() => onChange(t.key)}
          >
            <span className="tp-switcher-tab-num">0{i + 1}</span>
            <span className="tp-switcher-tab-name">{t.name}</span>
          </button>
        ))}
      </div>
      <div className="tp-switcher-hint">Pick one to build out fully →</div>
    </div>
  </nav>
);

/* ──────────────────────────────────────────────────────────────────────
   THEME 1 · TERMINAL
   ────────────────────────────────────────────────────────────────────── */

const TerminalTheme: FC = () => {
  const time = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
  return (
    <div className="t1">
      <header className="t1-top">
        <div className="t1-top-left">
          <span className="t1-logo">SOL/APPS</span>
          <span className="t1-sep">::</span>
          <span className="t1-mono">v4.0.0</span>
        </div>
        <div className="t1-top-mid">
          <Tick label="SOL" value="$184.22" delta="+2.41%" up />
          <Tick label="TPS" value="3,842" delta="-118" />
          <Tick label="EPOCH" value="624" delta="71%" up />
          <Tick label="MCAP" value="$87.4B" delta="+1.9%" up />
        </div>
        <div className="t1-top-right">
          <span className="t1-mono t1-dim">{time}</span>
          <button className="t1-btn">$ list</button>
          <button className="t1-btn t1-btn-primary">$ submit_app</button>
        </div>
      </header>

      <div className="t1-grid">
        <aside className="t1-sidebar">
          <div className="t1-side-block">
            <div className="t1-side-head">// categories</div>
            {CATEGORIES.map((c) => (
              <button key={c.name} className="t1-side-row">
                <span>{c.name}</span>
                <span className="t1-dim">{c.count}</span>
              </button>
            ))}
          </div>
          <div className="t1-side-block">
            <div className="t1-side-head">// filters</div>
            <label className="t1-side-row"><input type="checkbox" defaultChecked /> verified only</label>
            <label className="t1-side-row"><input type="checkbox" defaultChecked /> mainnet</label>
            <label className="t1-side-row"><input type="checkbox" /> open source</label>
            <label className="t1-side-row"><input type="checkbox" /> audited</label>
          </div>
        </aside>

        <main className="t1-main">
          <div className="t1-hero">
            <div className="t1-prompt">
              <span className="t1-prompt-arrow">{'>'}</span>
              <span className="t1-prompt-text">
                <span className="t1-cmd">solapps</span> --discover --network=mainnet --sort=signal
              </span>
              <span className="t1-cursor" />
            </div>
            <h1 className="t1-h1">
              500+ apps. <span className="t1-accent">Zero filler.</span>
            </h1>
            <p className="t1-sub">
              The terminal for Solana discovery. Audited contracts, verified teams, live metrics.
              No floating orbs, no AI gradients, no marketing copy. Just signal.
            </p>
            <div className="t1-search">
              <span className="t1-search-prefix">grep ›</span>
              <input className="t1-search-input" placeholder="search 'jupiter', 'lending', 'verified'..." />
              <kbd className="t1-kbd">⌘K</kbd>
            </div>
          </div>

          <div className="t1-section-head">
            <span className="t1-section-label">[01] curated</span>
            <span className="t1-dim">8 / 500 · sorted by signal_score desc</span>
          </div>

          <table className="t1-table">
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>category</th>
                <th>description</th>
                <th>signal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {APPS.map((a, i) => (
                <tr key={a.name} className="t1-row">
                  <td className="t1-dim">{String(i + 1).padStart(2, '0')}</td>
                  <td>
                    <div className="t1-app-cell">
                      <span className="t1-app-icon" style={{ color: a.accent }}>◆</span>
                      <strong>{a.name}</strong>
                    </div>
                  </td>
                  <td><span className="t1-cat">{a.category.toLowerCase()}</span></td>
                  <td className="t1-desc">{a.blurb}</td>
                  <td className="t1-metric">{a.metric}</td>
                  <td><button className="t1-row-btn">open ↗</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <footer className="t1-foot">
            <span className="t1-dim">{'>'} 8 results in 0.014s · solana-mainnet-beta · cluster: healthy</span>
          </footer>
        </main>
      </div>
    </div>
  );
};

const Tick: FC<{ label: string; value: string; delta: string; up?: boolean }> = ({ label, value, delta, up }) => (
  <div className="t1-tick">
    <span className="t1-tick-label">{label}</span>
    <span className="t1-tick-value">{value}</span>
    <span className={`t1-tick-delta ${up ? 'up' : 'down'}`}>{delta}</span>
  </div>
);

/* ──────────────────────────────────────────────────────────────────────
   THEME 2 · EDITORIAL
   ────────────────────────────────────────────────────────────────────── */

const EditorialTheme: FC = () => (
  <div className="t2">
    <header className="t2-top">
      <div className="t2-top-row">
        <div className="t2-mast">
          <div className="t2-issue">VOL. IV · ISSUE 09 · MAY 2026</div>
          <div className="t2-edition">The SolApps Review</div>
        </div>
        <div className="t2-top-meta">
          <span>Curated weekly</span>
          <span className="t2-dot">·</span>
          <span>500+ apps reviewed</span>
        </div>
      </div>
      <nav className="t2-nav">
        <a className="is-active">Front Page</a>
        <a>DeFi</a>
        <a>NFT</a>
        <a>Infra</a>
        <a>Gaming</a>
        <a>Archive</a>
        <a>Submit</a>
      </nav>
    </header>

    <section className="t2-hero">
      <div className="t2-hero-meta">
        <span className="t2-tag">— The Front Page</span>
        <span className="t2-date">Friday, May 1</span>
      </div>
      <h1 className="t2-headline">
        Five hundred apps,<br />
        one careful <em>library.</em>
      </h1>
      <p className="t2-dek">
        We read the docs, audit the contracts, and try every dApp before it appears here. SolApps is
        a slow, opinionated index of the Solana ecosystem — for people who would rather find one
        good thing than scroll past a hundred mediocre ones.
      </p>
      <div className="t2-byline">
        <span className="t2-rule" />
        <span>By the editors · 4 min read</span>
      </div>
    </section>

    <section className="t2-feature">
      <div className="t2-feature-img">
        <div className="t2-feature-frame">
          <span className="t2-feature-num">01</span>
          <span className="t2-feature-label">Editor’s Pick</span>
        </div>
      </div>
      <div className="t2-feature-body">
        <span className="t2-kicker">The Long Read</span>
        <h2 className="t2-feature-title">
          Jupiter, and the quiet case for aggregation.
        </h2>
        <p className="t2-feature-lede">
          For three years the team has built one of the most reliable products in crypto without a
          single token-marketing campaign. We sat down with the founders and read the source.
        </p>
        <a className="t2-feature-link">Read the review →</a>
      </div>
    </section>

    <section className="t2-listing">
      <div className="t2-listing-head">
        <h3 className="t2-listing-title">This Week’s Reviews</h3>
        <span className="t2-listing-count">8 of 500</span>
      </div>
      <ol className="t2-list">
        {APPS.map((a, i) => (
          <li key={a.name} className="t2-item">
            <span className="t2-item-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="t2-item-body">
              <div className="t2-item-meta">
                <span className="t2-item-cat">{a.category}</span>
                <span className="t2-item-metric">{a.metric}</span>
              </div>
              <h4 className="t2-item-title">{a.name}</h4>
              <p className="t2-item-blurb">{a.blurb}</p>
              <a className="t2-item-link">Continue reading</a>
            </div>
            <div className="t2-item-art" style={{ background: a.accent }}>{a.initial}</div>
          </li>
        ))}
      </ol>
    </section>

    <footer className="t2-foot">
      <div className="t2-foot-left">© 2026 The SolApps Review · Set in Tiempos &amp; Söhne</div>
      <div className="t2-foot-right">
        <a>Subscribe</a>
        <a>RSS</a>
        <a>Submit a project</a>
      </div>
    </footer>
  </div>
);

/* ──────────────────────────────────────────────────────────────────────
   THEME 3 · BRUTALIST
   ────────────────────────────────────────────────────────────────────── */

const BrutalistTheme: FC = () => (
  <div className="t3">
    <header className="t3-top">
      <div className="t3-logo">
        <span className="t3-logo-square" />
        SOLAPPS<span className="t3-logo-dot">.</span>
      </div>
      <nav className="t3-nav">
        <a>apps</a>
        <a>categories</a>
        <a>about</a>
        <a>submit</a>
      </nav>
      <button className="t3-cta">SUBMIT YOURS →</button>
    </header>

    <section className="t3-hero">
      <div className="t3-sticker t3-sticker-1">since 2022</div>
      <div className="t3-sticker t3-sticker-2">★ no AI slop ★</div>
      <h1 className="t3-h1">
        500<span className="t3-h1-plus">+</span><br />
        SOLANA<br />
        APPS.<br />
        <span className="t3-h1-out">FOUND.</span>
      </h1>
      <div className="t3-hero-side">
        <p className="t3-hero-p">
          A directory. That’s it. No floating orbs. No glassmorphism. No
          “Your gateway to&nbsp;Solana.” Just a thick yellow page with every
          app on Solana that’s worth your weekend.
        </p>
        <div className="t3-hero-actions">
          <button className="t3-btn t3-btn-ink">BROWSE ALL →</button>
          <button className="t3-btn t3-btn-ghost">HOW WE PICK</button>
        </div>
        <div className="t3-stats">
          <div><b>500+</b><span>apps</span></div>
          <div><b>24</b><span>cats</span></div>
          <div><b>2022</b><span>since</span></div>
        </div>
      </div>
    </section>

    <section className="t3-cats">
      {CATEGORIES.map((c, i) => (
        <button
          key={c.name}
          className="t3-chip"
          style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3))}deg)` }}
        >
          {c.name} <span className="t3-chip-count">{c.count}</span>
        </button>
      ))}
    </section>

    <section className="t3-listing">
      <div className="t3-section-head">
        <h2>HAND-PICKED.</h2>
        <span>scroll →</span>
      </div>
      <div className="t3-grid">
        {APPS.map((a, i) => (
          <article key={a.name} className="t3-card" style={{ ['--accent' as any]: a.accent }}>
            <div className="t3-card-top">
              <div className="t3-card-icon">{a.initial}</div>
              <span className="t3-card-num">№ {String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="t3-card-title">{a.name}</h3>
            <p className="t3-card-blurb">{a.blurb}</p>
            <div className="t3-card-foot">
              <span className="t3-card-cat">{a.category.toUpperCase()}</span>
              <span className="t3-card-arrow">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>

    <footer className="t3-foot">
      <div>SOLAPPS · MADE IN PUBLIC · FUELED BY YERBA MATE</div>
      <div className="t3-foot-marquee">
        <span>★ submit your app ★ no AI slop ★ no shitcoins ★ no listings fee ★ submit your app ★ no AI slop ★ no shitcoins ★ no listings fee ★ </span>
      </div>
    </footer>
  </div>
);

/* ──────────────────────────────────────────────────────────────────────
   THEME 4 · AURORA
   ────────────────────────────────────────────────────────────────────── */

const AuroraTheme: FC = () => (
  <div className="t4">
    <div className="t4-bg">
      <div className="t4-bg-1" />
      <div className="t4-bg-2" />
      <div className="t4-bg-3" />
      <div className="t4-bg-grain" />
    </div>

    <header className="t4-top">
      <div className="t4-logo">
        <span className="t4-logo-mark">◇</span>
        SolApps
      </div>
      <nav className="t4-nav">
        <a className="is-active">Discover</a>
        <a>DeFi</a>
        <a>NFT</a>
        <a>Infra</a>
        <a>Gaming</a>
      </nav>
      <div className="t4-top-right">
        <button className="t4-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
          </svg>
          Search apps
          <kbd>⌘K</kbd>
        </button>
        <button className="t4-cta">Submit app</button>
      </div>
    </header>

    <section className="t4-hero">
      <div className="t4-pill">
        <span className="t4-pill-dot" />
        Now indexing 500+ verified apps
      </div>
      <h1 className="t4-h1">
        The shortest path<br />
        to <span className="t4-grad">everything on Solana.</span>
      </h1>
      <p className="t4-sub">
        A curated index of every protocol, marketplace, and tool worth your time.
        Built by people who actually use them.
      </p>
      <div className="t4-actions">
        <button className="t4-btn-primary">
          Explore apps
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
        <button className="t4-btn-secondary">List your project</button>
      </div>
      <div className="t4-stats">
        <div><b>500+</b><span>Verified apps</span></div>
        <div className="t4-stat-div" />
        <div><b>24</b><span>Categories</span></div>
        <div className="t4-stat-div" />
        <div><b>2.4M</b><span>Monthly users</span></div>
      </div>
    </section>

    <section className="t4-section">
      <div className="t4-section-head">
        <div>
          <span className="t4-eyebrow">Editor’s curation</span>
          <h2 className="t4-h2">Apps we’re using this month</h2>
        </div>
        <a className="t4-see-all">See all curated <span>→</span></a>
      </div>
      <div className="t4-grid">
        {APPS.map((a) => (
          <article key={a.name} className="t4-card">
            <div className="t4-card-glow" style={{ background: a.accent }} />
            <div className="t4-card-head">
              <div className="t4-card-icon" style={{ background: `linear-gradient(135deg, ${a.accent}, ${a.accent}88)` }}>
                {a.initial}
              </div>
              <span className="t4-card-cat">{a.category}</span>
            </div>
            <h3 className="t4-card-title">{a.name}</h3>
            <p className="t4-card-blurb">{a.blurb}</p>
            <div className="t4-card-foot">
              <span className="t4-card-metric">{a.metric}</span>
              <span className="t4-card-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>

    <footer className="t4-foot">
      <div>SolApps · The index for Solana</div>
      <div className="t4-foot-links">
        <a>Twitter</a><a>GitHub</a><a>Docs</a><a>Press kit</a>
      </div>
    </footer>
  </div>
);

export default ThemePreviewView;
