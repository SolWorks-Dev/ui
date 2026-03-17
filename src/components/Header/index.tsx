import React, { FC, useState, useEffect } from 'react';
import {
  Header as MantineHeader,
  createStyles,
  Group,
  Burger,
  Select,
} from '@mantine/core';
import { Search, Command, Bolt } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import { appList } from '@solworks/application-registry';
import { formatLink } from '../../Common';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: 'var(--bg-app)',
    borderBottom: '1px solid var(--border-subtle)',
    height: 'var(--header-height)',
    position: 'fixed',
    top: 0,
    zIndex: 100,
    width: '100%',
    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
  },

  headerScrolled: {
    backgroundColor: 'var(--bg-surface)',
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
    gap: '12px',
    padding: '4px 12px 4px 4px',
    borderRadius: 'var(--radius-md)',
    transition: 'background-color 0.15s ease',

    '&:hover': {
      backgroundColor: 'var(--bg-secondary)',
    },
  },

  logoIcon: {
    width: '38px',
    height: '38px',
    background: 'var(--color-primary)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    transition: 'transform 0.2s ease',
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
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-full)',
    height: '44px',
    paddingLeft: '48px',
    paddingRight: '64px',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-primary)',
    width: '100%',

    '&:focus': {
      backgroundColor: 'white',
      border: '1px solid var(--color-primary)',
      boxShadow: '0 0 0 2px rgba(255, 107, 53, 0.15)',
    },

    '&:hover:not(:focus)': {
      borderColor: 'var(--border-default)',
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
  },

  burger: {
    [theme.fn.largerThan('xl')]: {
      display: 'none',
    },
  },
}));

interface HeaderProps {
  onBurgerClick: () => void;
  openMenu: boolean;
  tpsQuery: any;
  solQuery: any;
}

export const Header: FC<HeaderProps> = ({ onBurgerClick, openMenu }) => {
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
            <div className={classes.logoIcon}>
              <Bolt size={22} strokeWidth={2.5} />
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
      </div>
    </MantineHeader>
  );
};
