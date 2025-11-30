import React, { useEffect, useState } from 'react';
import {
  Group,
  Box,
  Collapse,
  createStyles,
  Badge,
  Tooltip,
} from '@mantine/core';
import { Icon as TablerIcon, ChevronLeft, ChevronRight, ExternalLink } from 'tabler-icons-react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef) => ({
  control: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '12px 16px',
    color: 'var(--text-secondary)',
    border: 'none',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    borderRadius: 'var(--radius-md)',
    transition: 'all 0.25s var(--ease-out-quart)',
    marginBottom: '2px',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'transparent',

    '&:hover': {
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)',

      [`& .${getRef('icon')}`]: {
        color: 'var(--color-primary)',
        transform: 'scale(1.1)',
      },
    },
  },

  controlActive: {
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    fontWeight: 600,

    [`& .${getRef('icon')}`]: {
      color: 'var(--color-primary)',
    },
  },

  link: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    padding: '10px 16px',
    paddingLeft: '48px',
    fontSize: '13px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.25s var(--ease-out-quart)',
    borderRadius: 'var(--radius-md)',
    position: 'relative',
    marginBottom: '2px',
    cursor: 'pointer',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: '28px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: 'var(--border-default)',
      transition: 'all 0.25s var(--ease-out-quart)',
    },

    '&:hover': {
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      textDecoration: 'none',

      '&::before': {
        backgroundColor: 'var(--color-primary)',
        transform: 'translateY(-50%) scale(1.2)',
      },

      '& .external-icon': {
        opacity: 1,
        transform: 'translateX(0)',
      }
    },
  },

  linkActive: {
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    fontWeight: 600,

    '&::before': {
      backgroundColor: 'var(--color-primary)',
    }
  },

  chevron: {
    transition: 'transform 200ms var(--ease-out-quart)',
    color: 'var(--text-tertiary)',
  },

  icon: {
    ref: getRef('icon'),
    color: 'var(--text-tertiary)',
    transition: 'all 0.25s var(--ease-out-quart)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    flexShrink: 0,
  },

  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  label: {
    color: 'inherit',
    marginLeft: '12px',
    letterSpacing: '-0.01em',
    flex: 1,
  },

  badge: {
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-tertiary)',
    fontWeight: 600,
    fontSize: '9px',
    padding: '4px 6px',
    height: 'auto',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginLeft: 'auto',
  },

  externalIcon: {
    color: 'var(--text-tertiary)',
    opacity: 0,
    transform: 'translateX(-4px)',
    transition: 'all 0.2s var(--ease-out-quart)',
    marginLeft: '8px',
    flexShrink: 0,
  },

  linkContent: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
  },

  linkLabel: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened: boolean;
  links?: { label: string; link: string; comingSoon?: boolean; external?: boolean }[];
  link?: string;
  disabled?: boolean;
  hideMenu?: () => void;
  external?: boolean;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
  disabled,
  hideMenu,
  external
}: LinksGroupProps) {
  const { classes, theme, cx } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened);
  const ChevronIcon = theme.dir === 'ltr' ? ChevronRight : ChevronLeft;
  const [items, setItems] = useState<JSX.Element[]>();

  useEffect(() => {
    if (links) {
      setItems(links.map((sublink) => MenuSubLink(classes, sublink, hideMenu)));
    }
  }, [opened, hideMenu, initiallyOpened, links, classes]);

  if (disabled) {
    return (
      <Tooltip label="Coming soon" style={{ width: '100%' }} position="right">
        <div
          className={classes.control}
          style={{ cursor: 'not-allowed', opacity: 0.5 }}
        >
          <Box className={classes.iconWrapper}>
            <span className={classes.icon}>
              <Icon size={18} strokeWidth={2} />
            </span>
            <Box className={classes.label}>
              {label}
            </Box>
          </Box>
        </div>
      </Tooltip>
    );
  }

  if (!hasLinks && link) {
    if (external) {
      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className={classes.control}
          onClick={hideMenu}
        >
          <Box className={classes.iconWrapper}>
            <span className={classes.icon}>
              <Icon size={18} strokeWidth={2} />
            </span>
            <Box className={classes.label}>
              {label}
            </Box>
          </Box>
          <ExternalLink size={14} className={`${classes.externalIcon} external-icon`} style={{ opacity: 0.5 }} />
        </a>
      );
    } else {
      return (
        <HashLink 
          smooth 
          to={link} 
          className={classes.control}
          onClick={hideMenu}
        >
          <Box className={classes.iconWrapper}>
            <span className={classes.icon}>
              <Icon size={18} strokeWidth={2} />
            </span>
            <Box className={classes.label}>
              {label}
            </Box>
          </Box>
        </HashLink>
      );
    }
  } else {
    return (
      <>
        <button
          onClick={() => setOpened((o) => !o)}
          className={cx(classes.control, { [classes.controlActive]: opened })}
          type="button"
        >
          <Box className={classes.iconWrapper}>
            <span className={classes.icon}>
              <Icon size={18} strokeWidth={2} />
            </span>
            <Box className={classes.label}>
              {label}
            </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={16}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </button>
        <Collapse in={opened} transitionDuration={250} transitionTimingFunction="ease-out">
          <div style={{ marginTop: 4, marginBottom: 8 }}>
            {items}
          </div>
        </Collapse>
      </>
    );
  }
}

function MenuSubLink(
  classes: Record<'control' | 'link' | 'chevron' | 'badge' | 'externalIcon' | 'linkContent' | 'linkLabel', string>,
  link: { label: string; link: string; comingSoon?: boolean; external?: boolean },
  hideMenu?: () => void
): JSX.Element {
  const contents = (
    <>
      <div className={classes.linkContent}>
        <span className={classes.linkLabel}>{link.label}</span>
        {link.comingSoon && (
          <Badge className={classes.badge} variant="filled">
            Soon
          </Badge>
        )}
      </div>
      {link.external && (
        <ExternalLink size={12} className={`${classes.externalIcon} external-icon`} />
      )}
    </>
  );

  if (link.external) {
    return (
      <a
        className={classes.link}
        href={link.link}
        target="_blank"
        rel="noreferrer"
        onClick={hideMenu}
        key={link.label}
      >
        {contents}
      </a>
    );
  } else {
    return (
      <Link className={classes.link} key={link.label} to={link.link} onClick={hideMenu}>
        {contents}
      </Link>
    );
  }
}
