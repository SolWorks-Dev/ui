import { createStyles, keyframes } from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import { ArrowRight, Rocket } from 'tabler-icons-react';

export interface ActionCardProps {
  title: string;
  text: string | JSX.Element;
  actionLink: string;
  actionButtonText: string;
}

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  '50%': { transform: 'translateY(-10px) rotate(2deg)' },
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '200% 0' },
  '100%': { backgroundPosition: '-200% 0' },
});

const useStyles = createStyles((theme) => ({
  actionCard: {
    width: '100%',
    backgroundColor: 'var(--bg-inverse)',
    color: 'white',
    fontFamily: 'var(--font-body)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 'var(--radius-2xl)',
    padding: '40px 48px',
    marginBottom: '48px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-lg)',
    transition: 'all 0.4s var(--ease-out-quart)',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, transparent 50%, rgba(99, 102, 241, 0.1) 100%)',
      zIndex: 0,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-50%',
      right: '-20%',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 60%)',
      filter: 'blur(60px)',
      zIndex: 0,
    },

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-float)',
      
      '& .floating-icon': {
        animation: `${float} 3s ease-in-out infinite`,
      }
    },

    '@media (max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center',
      padding: '36px 28px',
      gap: '28px',
    }
  },

  content: {
    zIndex: 2,
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '24px',
    
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  },

  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: 'var(--radius-lg)',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
    
    '@media (max-width: 768px)': {
      width: '52px',
      height: '52px',
    }
  },

  textContent: {
    flex: 1,
  },

  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '28px',
    fontWeight: 800,
    marginBottom: '12px',
    color: 'white',
    letterSpacing: '-0.02em',
    
    '@media (max-width: 768px)': {
      fontSize: '24px',
    }
  },

  text: {
    fontSize: '16px',
    opacity: 0.85,
    maxWidth: '500px',
    lineHeight: 1.6,
    fontWeight: 400,
    
    '@media (max-width: 768px)': {
      fontSize: '15px',
    }
  },

  buttonWrapper: {
    zIndex: 2,
    flexShrink: 0,
  },

  actionButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    height: '56px',
    padding: '0 32px',
    fontSize: '15px',
    fontWeight: 700,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-primary)',
    background: 'white',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s var(--ease-out-quart)',
    boxShadow: 'var(--shadow-sm)',

    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: 'var(--shadow-md)',
      background: 'var(--bg-secondary)',
      
      '& .arrow-icon': {
        transform: 'translateX(4px)',
      }
    },

    '&:active': {
      transform: 'translateY(-1px)',
    }
  },

  arrowIcon: {
    transition: 'transform 0.3s var(--ease-out-quart)',
  }
}));

export const ActionCard: FC<ActionCardProps> = ({ 
  title = '', 
  text = '', 
  actionLink = '', 
  actionButtonText = '' 
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.actionCard}>
      <div className={classes.content}>
        <div className={`${classes.iconWrapper} floating-icon`}>
          <Rocket size={28} color="white" strokeWidth={2} />
        </div>
        <div className={classes.textContent}>
          <div className={classes.title}>{title}</div>
          <div className={classes.text}>{text}</div>
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <a 
          href={actionLink} 
          target="_blank" 
          rel="noreferrer" 
          className={classes.actionButton}
        >
          {actionButtonText}
          <ArrowRight size={18} className={`${classes.arrowIcon} arrow-icon`} />
        </a>
      </div>
    </div>
  );
};
