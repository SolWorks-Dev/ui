import React, { FC } from 'react';
import '../../common.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { encodeString } from '../../Common';
import { createStyles, Text, Badge, keyframes } from '@mantine/core';
import { ArrowUpRight } from 'tabler-icons-react';

const shine = keyframes({
  '0%': { left: '-100%' },
  '100%': { left: '200%' },
});

export interface ApplicationCardLargeV2Props {
  logoUrl: string;
  appName: string;
  description: string;
  additionalStyles?: any;
  height?: number;
  appValue: string;
  category?: string;
}


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: 'var(--bg-surface)',
    borderRadius: 'var(--radius-xl)',
    padding: '28px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s var(--ease-out-quart)',
    textDecoration: 'none',
    position: 'relative',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-card)',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '60%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      transform: 'skewX(-15deg)',
      transition: 'none',
    },

    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: 'var(--shadow-hover)',
      borderColor: 'var(--border-default)',

      '&::before': {
        animation: `${shine} 0.75s ease-out`,
      },

      '& .icon-arrow': {
        opacity: 1,
        transform: 'translate(0, 0)',
      },
      
      '& .logo-wrapper': {
        transform: 'scale(1.05)',
        boxShadow: 'var(--shadow-md)',
      },
      
      '& .card-title': {
        color: 'var(--color-primary)',
      }
    },

    '&:active': {
      transform: 'translateY(-4px)',
    }
  },

  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },

  logoWrapper: {
    padding: '6px',
    background: 'white',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 0.3s var(--ease-out-quart)',
  },

  arrowIcon: {
    color: 'var(--text-primary)',
    opacity: 0,
    transform: 'translate(-6px, 6px)',
    transition: 'all 0.3s var(--ease-out-quart)',
    padding: '8px',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-secondary)',
  },

  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '20px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '10px',
    letterSpacing: '-0.02em',
    transition: 'color 0.3s var(--ease-out-quart)',
  },

  description: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },

  footer: {
    marginTop: 'auto',
    paddingTop: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  badge: {
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    letterSpacing: '0.01em',
    fontSize: '12px',
    padding: '8px 12px',
    borderRadius: 'var(--radius-sm)',
    textTransform: 'none',
    border: 'none',
    transition: 'all 0.2s ease',
  }
}));

export const ApplicationCardLargeV2: FC<ApplicationCardLargeV2Props> = ({
  logoUrl,
  appName,
  description,
  additionalStyles = undefined,
  height = 280,
  appValue,
  category
}) => {
  const { classes } = useStyles();

  return (
    <Link
      to={`/apps/${encodeString(appName)}`}
      className={classes.card}
      style={{ ...additionalStyles, minHeight: height }}
    >
      <div className={classes.topSection}>
        <div className={`${classes.logoWrapper} logo-wrapper`}>
          <Logo logoUrl={logoUrl} altText={`${appName} logo`} sizePx={56} />
        </div>
        <ArrowUpRight size={20} className={`${classes.arrowIcon} icon-arrow`} />
      </div>

      <div className={classes.content}>
        <Text className={`${classes.title} card-title`}>{appName}</Text>
        <Text className={classes.description}>{description}</Text>
      </div>

      <div className={classes.footer}>
        {category && (
          <Badge className={classes.badge} size="sm">
            {category}
          </Badge>
        )}
      </div>
    </Link>
  );
};
