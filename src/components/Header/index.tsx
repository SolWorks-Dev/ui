import React, { FC, useState, useEffect } from 'react';
import {
  Header as MantineHeader,
  createStyles,
  Group,
  Burger,
  Select,
  keyframes,
} from '@mantine/core';
import { Search, Command, Bolt } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import { appList } from '@solworks/application-registry';
import { formatLink } from '../../Common';

const pulse = keyframes({
  '0%, 100%': {
    boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.5)',
    transform: 'scale(1)',
  },
  '50%': {
    boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)',
    transform: 'scale(1.1)',
  },
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: 'rgba(248, 246, 243, 0.85)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    borderBottom: '1px solid var(--border-subtle)',
    height: 'var(--header-height)',
    position: 'fixed',
    top: 0,
    zIndex: 100,
    width: '100%',
    transition: 'all 0.4s var(--ease-out-quart)',
  },

  headerScrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: 'var(--shadow-sm)',
  },

  inner: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 24px',

    [theme.fn.smallerThan('sm')]: {
      padding: '0 16px',
    }
  },

  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '6px 16px 6px 6px',
    borderRadius: 'var(--radius-full)',
    transition: 'all 0.3s var(--ease-out-quart)',
    border: '1px solid transparent',

    '&:hover': {
      backgroundColor: 'rgba(255, 107, 53, 0.04)',
      borderColor: 'rgba(255, 107, 53, 0.1)',

      '& .logo-icon': {
        transform: 'rotate(-8deg) scale(1.05)',
        boxShadow: '0 8px 24px rgba(255, 107, 53, 0.35)',
      },

      '& .logo-bolt': {
        transform: 'rotate(15deg)',
      }
    },

    '&:active': {
      transform: 'scale(0.98)',
    }
  },

  logoIcon: {
    width: '42px',
    height: '42px',
    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8F6B 50%, #FF6B35 100%)',
    backgroundSize: '200% 200%',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    boxShadow: '0 4px 16px rgba(255, 107, 53, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    transition: 'all 0.35s var(--ease-out-back)',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)',
      borderRadius: '12px',
    }
  },

  logoBolt: {
    transition: 'transform 0.35s var(--ease-out-back)',
    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
  },

  logoText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0px',
  },

  logoTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '20px',
    letterSpacing: '-0.03em',
    color: 'var(--text-primary)',
    lineHeight: 1.1,
  },

  logoSubtitle: {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--color-primary)',
    lineHeight: 1,
    marginTop: '2px',
  },

  searchContainer: {
    flex: 1,
    maxWidth: '500px',
    margin: '0 32px',

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  searchInput: {
    backgroundColor: 'rgba(26, 24, 22, 0.04)',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-full)',
    height: '48px',
    paddingLeft: '48px',
    paddingRight: '64px',
    transition: 'all 0.3s var(--ease-out-quart)',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-primary)',
    width: '100%',

    '&:focus': {
      backgroundColor: 'white',
      border: '1px solid var(--color-primary)',
      boxShadow: '0 0 0 4px var(--color-primary-subtle)',
    },

    '&:hover:not(:focus)': {
      backgroundColor: 'rgba(26, 24, 22, 0.06)',
    },

    '&::placeholder': {
      color: 'var(--text-tertiary)',
    }
  },

  searchIcon: {
    color: 'var(--text-tertiary)',
  },

  keyCap: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px 8px',
    borderRadius: '6px',
    backgroundColor: 'rgba(26, 24, 22, 0.06)',
    border: '1px solid var(--border-subtle)',
    fontSize: '11px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-tertiary)',
    gap: '2px',
    transition: 'all 0.2s ease',
  },

  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  burger: {
    [theme.fn.largerThan('xl')]: {
      display: 'none',
    },
  },

  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 14px',
    borderRadius: 'var(--radius-full)',
    background: 'var(--color-success-subtle)',
    border: '1px solid rgba(16, 185, 129, 0.15)',
    transition: 'all 0.2s ease',

    '&:hover': {
      background: 'rgba(16, 185, 129, 0.12)',
    },

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    }
  },

  statContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    lineHeight: 1.2,
  },

  statLabel: {
    fontSize: '9px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--color-success)',
    fontWeight: 700,
    fontFamily: 'var(--font-body)',
  },

  statValue: {
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: 'var(--font-display)',
    fontVariantNumeric: 'tabular-nums',
    color: 'var(--text-primary)',
  },

  pulseDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-success)',
    animation: `${pulse} 2s infinite ease-in-out`,
    flexShrink: 0,
  },
}));

interface HeaderProps {
  onBurgerClick: () => void;
  openMenu: boolean;
  tpsQuery: any;
  solQuery: any;
}

export const Header: FC<HeaderProps> = ({ onBurgerClick, openMenu, tpsQuery, solQuery }) => {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchData = appList.apps.map((app) => ({
    value: app.app.value,
    label: app.app.label,
    group: app.app.categories[0].toUpperCase(),
    logoUrl: app.urls.logo,
    description: app.description.short,
  }));

  return (
    <MantineHeader
      height={76}
      className={cx(classes.header, { [classes.headerScrolled]: scrolled })}
    >
      <div className={classes.inner}>
        <Group className={classes.logoGroup}>
          <Burger
            opened={openMenu}
            onClick={onBurgerClick}
            className={classes.burger}
            size="sm"
          />
          <a href="/" className={classes.logo}>
            <div className={`${classes.logoIcon} logo-icon`}>
              <Bolt size={22} strokeWidth={2.5} className={`${classes.logoBolt} logo-bolt`} />
            </div>
            <div className={classes.logoText}>
              <span className={classes.logoTitle}>SolApps</span>
              <span className={classes.logoSubtitle}>Solana Directory</span>
            </div>
          </a>
        </Group>

        <div className={classes.searchContainer}>
          <Select
            placeholder="Search apps, protocols, tools..."
            icon={<Search size={18} className={classes.searchIcon} />}
            rightSection={
              <div style={{ display: 'flex', alignItems: 'center', paddingRight: 12 }}>
                <div className={classes.keyCap}>
                  <Command size={10} />K
                </div>
              </div>
            }
            data={searchData}
            searchable
            nothingFound="No apps found"
            size="md"
            radius="xl"
            classNames={{ input: classes.searchInput }}
            onChange={(val) => {
              const app = appList.apps.find(a => a.app.value === val);
              if (app) navigate(formatLink(app.app.label));
            }}
            rightSectionWidth={64}
            styles={{
              dropdown: {
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-lg)',
              },
              item: {
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-body)',
                '&[data-selected]': {
                  backgroundColor: 'var(--color-primary)',
                },
                '&[data-hovered]': {
                  backgroundColor: 'var(--bg-secondary)',
                },
              },
            }}
          />
        </div>

        <div className={classes.rightSection}>
          <div className={classes.statItem}>
            <span className={classes.pulseDot} />
            <div className={classes.statContent}>
              <span className={classes.statLabel}>Live TPS</span>
              <span className={classes.statValue}>
                {tpsQuery.data ? Math.round(tpsQuery.data.data.networkInfo.tps).toLocaleString() : '—'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MantineHeader>
  );
};
