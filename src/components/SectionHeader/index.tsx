import React, { FC } from 'react';
import { createStyles, Title } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: '28px',
    marginTop: '56px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '24px',
    
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
    }
  },

  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '28px',
    color: 'var(--text-primary)',
    letterSpacing: '-0.03em',
    lineHeight: 1.2,
    
    '@media (max-width: 768px)': {
      fontSize: '24px',
    }
  },

  decorator: {
    width: '4px',
    height: '28px',
    borderRadius: 'var(--radius-full)',
    background: 'var(--gradient-primary)',
    
    '@media (max-width: 768px)': {
      height: '24px',
    }
  },

  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    textDecoration: 'none',
    fontSize: '14px',
    padding: '10px 16px',
    borderRadius: 'var(--radius-full)',
    background: 'transparent',
    border: '1px solid transparent',
    transition: 'all 0.3s var(--ease-out-quart)',

    '&:hover': {
      color: 'var(--text-primary)',
      background: 'var(--bg-secondary)',
      borderColor: 'var(--border-subtle)',
      
      '& .arrow-icon': {
        transform: 'translateX(4px)',
      }
    },
    
    '&:active': {
      background: 'var(--bg-tertiary)',
    }
  },

  arrowIcon: {
    transition: 'transform 0.3s var(--ease-out-quart)',
  }
}));

interface SectionHeaderProps {
  title: string;
  href?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, href }) => {
  const { classes } = useStyles();
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <div className={classes.decorator} />
        <Title order={2} className={classes.title}>{title}</Title>
      </div>
      {href && (
        <Link to={href} className={classes.link}>
          View All 
          <ArrowRight size={16} className={`${classes.arrowIcon} arrow-icon`} />
        </Link>
      )}
    </div>
  );
};
