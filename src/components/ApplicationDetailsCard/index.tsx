import { Badge, createStyles, keyframes } from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import { Logo } from '../Logo';
import ReactMarkdown from 'react-markdown';
import { AlertTriangle } from 'tabler-icons-react';

export interface ApplicationDetailsCardProps {
  logoUrl: string;
  applicationName: string;
  tag: string;
  tagColorHex: string;
  description: string;
  isDeprecated: boolean;
}

const fadeIn = keyframes({
  'from': { opacity: 0, transform: 'translateY(12px)' },
  'to': { opacity: 1, transform: 'translateY(0)' },
});

const useStyles = createStyles((theme) => ({
  adcOutline: {
    color: 'var(--text-primary)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-xl)',
    minWidth: '285px',
    maxWidth: '100%',
    maxHeight: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-surface)',
    boxShadow: 'var(--shadow-card)',
    animation: `${fadeIn} 0.5s var(--ease-out-quart) forwards`,
    transition: 'all 0.3s var(--ease-out-quart)',
    
    '&:hover': {
      boxShadow: 'var(--shadow-md)',
    }
  },
  
  adcWrapper: {
    padding: '36px',
    '@media (max-width: 420px)': {
      padding: '28px',
    },
  },
  
  adcHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '28px',
    gap: '20px',
  },
  
  logoWrapper: {
    padding: '6px',
    background: 'white',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    flexShrink: 0,
  },
  
  adcHeaderText: {
    fontFamily: 'var(--font-display)',
    fontSize: '28px',
    fontWeight: 800,
    textAlign: 'left',
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    
    '@media (max-width: 420px)': {
      fontSize: '24px',
    }
  },
  
  deprecatedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    color: 'var(--color-error)',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    padding: '8px 14px',
    borderRadius: 'var(--radius-full)',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    border: '1px solid rgba(239, 68, 68, 0.2)',
  },
  
  adcHeaderDescription: {
    textAlign: 'left',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.7,
    color: 'var(--text-secondary)',
    borderTop: '1px solid var(--border-subtle)',
    paddingTop: '24px',
    
    '& p': {
      margin: '0 0 16px 0',
      
      '&:last-child': {
        marginBottom: 0,
      }
    },
    
    '& a': {
      color: 'var(--color-primary)',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'opacity 0.2s ease',
      
      '&:hover': {
        opacity: 0.8,
      }
    },
    
    '& ul, & ol': {
      paddingLeft: '24px',
      margin: '16px 0',
    },
    
    '& li': {
      marginBottom: '8px',
    },
    
    '& code': {
      fontFamily: 'monospace',
      backgroundColor: 'var(--bg-secondary)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '14px',
    }
  },
}));

export const ApplicationDetailsCard: FC<ApplicationDetailsCardProps> = ({
  logoUrl,
  applicationName,
  tag,
  tagColorHex,
  description,
  isDeprecated
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.adcOutline}>
      <div className={classes.adcWrapper}>
        <div className={classes.adcHeader}>
          <div className={classes.logoWrapper}>
            <Logo logoUrl={logoUrl} altText={`${applicationName} logo`} sizePx={56} />
          </div>
          <div>
            <div className={classes.adcHeaderText}>{applicationName}</div>
            {isDeprecated && (
              <div className={classes.deprecatedBadge}>
                <AlertTriangle size={14} />
                Deprecated
              </div>
            )}
          </div>
        </div>
        <div className={classes.adcHeaderDescription}>
          <ReactMarkdown children={description} />
        </div>
      </div>
    </div>
  );
};
