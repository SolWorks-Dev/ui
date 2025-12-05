import { createStyles, Grid, Button, keyframes } from '@mantine/core';
import { ArrowLeft, Rocket } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  '50%': { transform: 'translateY(-20px) rotate(3deg)' },
});

const fadeIn = keyframes({
  'from': { opacity: 0, transform: 'translateY(20px)' },
  'to': { opacity: 1, transform: 'translateY(0)' },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
    animation: `${fadeIn} 0.6s var(--ease-out-quart) forwards`,
  },

  content: {
    textAlign: 'center',
    maxWidth: '480px',
  },

  iconWrapper: {
    width: '120px',
    height: '120px',
    borderRadius: 'var(--radius-2xl)',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 40px',
    boxShadow: '0 16px 48px rgba(255, 107, 53, 0.25)',
    animation: `${float} 4s ease-in-out infinite`,
  },

  errorCode: {
    fontFamily: 'var(--font-display)',
    fontSize: '100px',
    fontWeight: 900,
    letterSpacing: '-0.04em',
    lineHeight: 1,
    color: 'var(--text-primary)',
    marginBottom: '16px',
    
    '@media (max-width: 480px)': {
      fontSize: '72px',
    }
  },

  title: {
    fontFamily: 'var(--font-display)',
    fontSize: '28px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    
    '@media (max-width: 480px)': {
      fontSize: '24px',
    }
  },

  description: {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--text-secondary)',
    lineHeight: 1.7,
    marginBottom: '40px',
  },

  button: {
    height: '52px',
    padding: '0 32px',
    fontSize: '15px',
    fontWeight: 700,
    fontFamily: 'var(--font-body)',
    color: 'white',
    background: 'var(--gradient-dark)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    transition: 'all 0.3s var(--ease-out-quart)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',

    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: 'var(--shadow-lg)',
    },

    '&:active': {
      transform: 'translateY(-1px)',
    }
  },

  illustration: {
    marginTop: '60px',
    opacity: 0.4,
  }
}));

export const FourZeroFourView = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore 500+ Solana apps on SolApps."
        noindex={true}
      />
      
      <div className={classes.content}>
        <div className={classes.iconWrapper}>
          <Rocket size={56} color="white" strokeWidth={1.5} />
        </div>
        
        <div className={classes.errorCode}>404</div>
        
        <h1 className={classes.title}>Houston, we have a problem</h1>
        
        <p className={classes.description}>
          This page got rugged. But don't worry—there are 500+ other apps waiting for you back home.
        </p>

        <Link to="/" className={classes.button}>
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
