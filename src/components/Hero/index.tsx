import React, { FC } from 'react';
import { createStyles, Container, Title, Text, Button, keyframes } from '@mantine/core';
import { ArrowRight, Bolt } from 'tabler-icons-react';
import '../../common.css';

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  '25%': { transform: 'translateY(-25px) rotate(3deg)' },
  '50%': { transform: 'translateY(-15px) rotate(-2deg)' },
  '75%': { transform: 'translateY(-35px) rotate(2deg)' },
});

const floatReverse = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  '25%': { transform: 'translateY(-20px) rotate(-2deg)' },
  '50%': { transform: 'translateY(-35px) rotate(3deg)' },
  '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 1, transform: 'scale(1)' },
  '50%': { opacity: 0.8, transform: 'scale(0.98)' },
});

const useStyles = createStyles((theme) => ({
  heroWrapper: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 120,
    overflow: 'hidden',
    marginBottom: 48,
    
    [theme.fn.smallerThan('sm')]: {
      paddingTop: 60,
      paddingBottom: 80,
    }
  },

  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--gradient-mesh)',
    zIndex: -2,
  },

  glowOrb1: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '700px',
    height: '700px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
    filter: 'blur(60px)',
    zIndex: -1,
    animation: `${float} 25s infinite ease-in-out`,
    
    [theme.fn.smallerThan('sm')]: {
      width: '400px',
      height: '400px',
    }
  },

  glowOrb2: {
    position: 'absolute',
    bottom: '0%',
    left: '-15%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
    filter: 'blur(80px)',
    zIndex: -1,
    animation: `${floatReverse} 30s infinite ease-in-out`,
    
    [theme.fn.smallerThan('sm')]: {
      width: '350px',
      height: '350px',
    }
  },

  glowOrb3: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '500px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(255, 143, 107, 0.08) 0%, transparent 70%)',
    filter: 'blur(40px)',
    zIndex: -1,
  },

  inner: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 20px 8px 8px',
    marginBottom: '40px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-full)',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-secondary)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all 0.3s var(--ease-out-quart)',
    cursor: 'default',
    
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-md)',
      borderColor: 'var(--border-default)',
    },
    
    [theme.fn.smallerThan('sm')]: {
      fontSize: '13px',
      padding: '6px 16px 6px 6px',
    }
  },

  badgeIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: 'var(--gradient-primary)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)',
  },

  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'clamp(48px, 8vw, 88px)',
    letterSpacing: '-0.04em',
    lineHeight: 1.05,
    color: 'var(--text-primary)',
    marginBottom: 28,
    maxWidth: '900px',
  },

  highlight: {
    position: 'relative',
    display: 'inline-block',
    background: 'var(--gradient-primary)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  highlightUnderline: {
    position: 'absolute',
    bottom: '0.05em',
    left: 0,
    right: 0,
    height: '0.12em',
    background: 'var(--gradient-primary)',
    borderRadius: 'var(--radius-full)',
    opacity: 0.3,
  },

  description: {
    maxWidth: 620,
    fontSize: 'clamp(17px, 2vw, 20px)',
    color: 'var(--text-secondary)',
    marginBottom: 48,
    lineHeight: 1.7,
    fontWeight: 400,
    fontFamily: 'var(--font-body)',
    
    [theme.fn.smallerThan('sm')]: {
      marginBottom: 36,
      padding: '0 16px',
    }
  },

  controls: {
    display: 'flex',
    gap: 16,
    
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      width: '100%',
      padding: '0 24px',
    },
  },

  primaryButton: {
    height: '60px',
    padding: '0 36px',
    fontSize: '16px',
    fontWeight: 700,
    fontFamily: 'var(--font-body)',
    letterSpacing: '-0.01em',
    color: 'white',
    background: 'var(--gradient-dark)',
    border: 'none',
    borderRadius: 'var(--radius-full)',
    boxShadow: '0 8px 24px rgba(26, 24, 22, 0.2)',
    transition: 'all 0.3s var(--ease-out-quart)',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      backgroundSize: '200% 100%',
      animation: `${shimmer} 3s infinite linear`,
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 40px rgba(26, 24, 22, 0.25)',
      
      '&::before': {
        opacity: 1,
      }
    },

    '&:active': {
      transform: 'translateY(-2px)',
    },
    
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    }
  },

  secondaryButton: {
    height: '60px',
    padding: '0 36px',
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    letterSpacing: '-0.01em',
    color: 'var(--text-primary)',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-full)',
    transition: 'all 0.3s var(--ease-out-quart)',

    '&:hover': {
      transform: 'translateY(-4px)',
      background: 'white',
      borderColor: 'var(--text-primary)',
      boxShadow: 'var(--shadow-md)',
    },

    '&:active': {
      transform: 'translateY(-2px)',
    },
    
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    }
  },

  stats: {
    display: 'flex',
    gap: '48px',
    marginTop: '72px',
    padding: '24px 40px',
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border-subtle)',
    
    [theme.fn.smallerThan('sm')]: {
      gap: '32px',
      padding: '20px 28px',
      marginTop: '56px',
    },
    
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
    }
  },

  statItem: {
    textAlign: 'center',
  },

  statValue: {
    fontFamily: 'var(--font-display)',
    fontSize: '32px',
    fontWeight: 800,
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    lineHeight: 1,
    marginBottom: '4px',
    
    [theme.fn.smallerThan('sm')]: {
      fontSize: '28px',
    }
  },

  statLabel: {
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--text-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
}));

export const Hero: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroBackground} />
      <div className={classes.glowOrb1} />
      <div className={classes.glowOrb2} />
      <div className={classes.glowOrb3} />

      <Container className={classes.inner}>
        <div className={classes.badge}>
          <span className={classes.badgeIcon}>
            <Bolt size={14} strokeWidth={2.5} />
          </span>
          Trusted by 50,000+ Solana explorers
        </div>

        <Title className={classes.title}>
          Your gateway to{' '}
          <span className={classes.highlight}>
            Solana
            <span className={classes.highlightUnderline} />
          </span>.
        </Title>

        <Text className={classes.description}>
          Skip the noise. Find verified DeFi protocols, NFT marketplaces, and dev tools—all 
          handpicked and organized so you can build, trade, and explore with confidence.
        </Text>

        <div className={classes.controls}>
          <Button
            className={classes.primaryButton}
            component="a"
            href="#curated"
            rightIcon={<ArrowRight size={20} strokeWidth={2.5} />}
          >
            Explore Apps
          </Button>
          <Button
            className={classes.secondaryButton}
            component="a"
            href="https://docs.solworks.dev"
            target="_blank"
          >
            List Your Project
          </Button>
        </div>

        <div className={classes.stats}>
          <div className={classes.statItem}>
            <div className={classes.statValue}>500+</div>
            <div className={classes.statLabel}>Verified Apps</div>
          </div>
          <div className={classes.statItem}>
            <div className={classes.statValue}>24</div>
            <div className={classes.statLabel}>Categories</div>
          </div>
          <div className={classes.statItem}>
            <div className={classes.statValue}>Daily</div>
            <div className={classes.statLabel}>Updates</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
