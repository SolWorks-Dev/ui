import { createStyles } from '@mantine/core';
import React, { FC, useEffect } from 'react';
import { Link as LinkIcon, ExternalLink, BrandGithub, World, Rocket } from 'tabler-icons-react';
import '../../common.css';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    textDecoration: 'none',
    transition: 'all 0.25s var(--ease-out-quart)',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    gap: '12px',

    '&:hover': {
      transform: 'translateX(4px)',
      borderColor: 'var(--color-primary)',
      background: 'var(--color-primary-subtle)',

      '& .arrow-icon': {
        opacity: 1,
        transform: 'translate(0, 0)',
      },

      '& .icon-wrapper': {
        backgroundColor: 'var(--color-primary)',

        '& svg': {
          color: 'white',
        }
      }
    },
  },

  iconWrapper: {
    width: '36px',
    height: '36px',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.25s var(--ease-out-quart)',

    '& svg': {
      color: 'var(--text-tertiary)',
      transition: 'color 0.25s var(--ease-out-quart)',
    }
  },

  content: {
    flex: 1,
    overflow: 'hidden',
    minWidth: 0,
  },

  title: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-primary)',
  },

  url: {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: 'var(--text-tertiary)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: '2px',
  },

  arrow: {
    color: 'var(--text-tertiary)',
    opacity: 0,
    transform: 'translate(-4px, 0)',
    transition: 'all 0.25s var(--ease-out-quart)',
    flexShrink: 0,
  }
}));

export interface LinkCardProps {
  title: string;
  url: string;
  disabled?: boolean;
}

const getIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('github')) return <BrandGithub size={16} strokeWidth={2} />;
  if (lowerTitle.includes('app') || lowerTitle.includes('launch')) return <Rocket size={16} strokeWidth={2} />;
  if (lowerTitle.includes('website') || lowerTitle.includes('web')) return <World size={16} strokeWidth={2} />;
  return <LinkIcon size={16} strokeWidth={2} />;
};

export const LinkCard: FC<LinkCardProps> = ({ title, url }) => {
  const [displayUrl, setDisplayUrl] = React.useState('');
  const { classes } = useStyles();

  useEffect(() => {
    let tempDisplayUrl = url.replace('https://', '').replace('http://', '').replace('www.', '');
    tempDisplayUrl =
      tempDisplayUrl[tempDisplayUrl.length - 1] === '/'
        ? tempDisplayUrl.slice(0, -1)
        : tempDisplayUrl;
    // Truncate long URLs
    if (tempDisplayUrl.length > 30) {
      tempDisplayUrl = tempDisplayUrl.substring(0, 30) + '...';
    }
    setDisplayUrl(tempDisplayUrl);
  }, [url]);

  return (
    <a href={url} target="_blank" rel="noreferrer" className={classes.card}>
      <div className={`${classes.iconWrapper} icon-wrapper`}>
        {getIcon(title)}
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.url}>{displayUrl}</div>
      </div>
      <ExternalLink size={14} className={`${classes.arrow} arrow-icon`} />
    </a>
  );
};
