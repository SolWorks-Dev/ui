import { createStyles } from '@mantine/core';
import React, { FC } from 'react';
import { BrandTwitter, BrandDiscord, BrandMedium, BrandTelegram, ExternalLink } from 'tabler-icons-react';
import '../../common.css';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-xl)',
    overflow: 'hidden',
  },

  emptyState: {
    textAlign: 'center',
    padding: '24px',
    color: 'var(--text-tertiary)',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    borderBottom: '1px solid var(--border-subtle)',
    transition: 'all 0.2s var(--ease-out-quart)',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:last-child': {
      borderBottom: 'none',
    },

    '&:hover': {
      backgroundColor: 'var(--color-primary-subtle)',

      '& .social-icon': {
        transform: 'scale(1.1)',
      },

      '& .social-label': {
        color: 'var(--color-primary)',
      },

      '& .social-arrow': {
        opacity: 1,
        transform: 'translateX(0)',
        color: 'var(--color-primary)',
      },

      '& .social-text': {
        color: 'var(--color-primary)',
      }
    },

    '&:active': {
      backgroundColor: 'rgba(255, 107, 53, 0.12)',
    }
  },

  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  },

  iconWrapper: {
    width: '36px',
    height: '36px',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s var(--ease-out-quart)',
    flexShrink: 0,
  },

  iconTwitter: {
    backgroundColor: 'rgba(29, 155, 240, 0.1)',
    color: '#1DA1F2',
  },

  iconDiscord: {
    backgroundColor: 'rgba(88, 101, 242, 0.1)',
    color: '#5865F2',
  },

  iconMedium: {
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-secondary)',
  },

  iconTelegram: {
    backgroundColor: 'rgba(0, 136, 204, 0.1)',
    color: '#0088CC',
  },

  textContent: {
    flex: 1,
    minWidth: 0,
  },

  label: {
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-primary)',
    transition: 'color 0.2s ease',
  },

  linkText: {
    fontSize: '12px',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-tertiary)',
    marginTop: '2px',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  arrow: {
    color: 'var(--text-tertiary)',
    opacity: 0,
    transform: 'translateX(-4px)',
    transition: 'all 0.2s var(--ease-out-quart)',
    flexShrink: 0,
    marginLeft: '8px',
  }
}));

export interface SocialsCardProps {
  twitter?: { url: string; text: string }[];
  discord?: { url: string; text: string }[];
  medium?: { url: string; text: string }[];
  telegram?: { url: string; text: string }[];
}

export const SocialsCard: FC<SocialsCardProps> = ({
  twitter = [],
  discord = [],
  medium = [],
  telegram = [],
}) => {
  const { classes, cx } = useStyles();

  const hasSocials = twitter.length > 0 || discord.length > 0 || medium.length > 0 || telegram.length > 0;

  if (!hasSocials) {
    return (
      <div className={classes.card}>
        <div className={classes.emptyState}>No community links yet</div>
      </div>
    );
  }

  return (
    <div className={classes.card}>
      {twitter.length > 0 && twitter.slice(0, 1).map((item, i) => (
        <SocialRow
          key={`twitter-${i}`}
          icon={<BrandTwitter size={18} strokeWidth={2} />}
          label="Twitter"
          linkText={item.text}
          url={item.url}
          iconClass={classes.iconTwitter}
        />
      ))}
      {discord.length > 0 && discord.slice(0, 1).map((item, i) => (
        <SocialRow
          key={`discord-${i}`}
          icon={<BrandDiscord size={18} strokeWidth={2} />}
          label="Discord"
          linkText={item.text}
          url={item.url}
          iconClass={classes.iconDiscord}
        />
      ))}
      {medium.length > 0 && medium.slice(0, 1).map((item, i) => (
        <SocialRow
          key={`medium-${i}`}
          icon={<BrandMedium size={18} strokeWidth={2} />}
          label="Blog"
          linkText={item.text}
          url={item.url}
          iconClass={classes.iconMedium}
        />
      ))}
      {telegram.length > 0 && telegram.slice(0, 1).map((item, i) => (
        <SocialRow
          key={`telegram-${i}`}
          icon={<BrandTelegram size={18} strokeWidth={2} />}
          label="Telegram"
          linkText={item.text}
          url={item.url}
          iconClass={classes.iconTelegram}
        />
      ))}
    </div>
  );
};

interface SocialRowProps {
  icon: React.ReactNode;
  label: string;
  linkText: string;
  url: string;
  iconClass: string;
}

const SocialRow: FC<SocialRowProps> = ({ icon, label, linkText, url, iconClass }) => {
  const { classes, cx } = useStyles();

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noreferrer" 
      className={classes.item}
    >
      <div className={classes.leftSection}>
        <div className={cx(classes.iconWrapper, iconClass, 'social-icon')}>
          {icon}
        </div>
        <div className={classes.textContent}>
          <div className={`${classes.label} social-label`}>{label}</div>
          <div className={`${classes.linkText} social-text`}>{linkText}</div>
        </div>
      </div>
      <ExternalLink size={16} className={`${classes.arrow} social-arrow`} />
    </a>
  );
};
