import { createStyles, keyframes } from '@mantine/core';
import React, { useState } from 'react';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const useStyles = createStyles((theme, { sizePx }: { sizePx: number }) => ({
  logoWrapper: {
    width: sizePx,
    height: sizePx,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'var(--bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0,
  },

  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, var(--bg-secondary) 0%, var(--bg-tertiary) 50%, var(--bg-secondary) 100%)`,
    backgroundSize: '200% 100%',
    animation: `${shimmer} 1.5s infinite linear`,
  },

  fallback: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--gradient-primary)',
    color: 'white',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: sizePx * 0.4,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
  },

  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

interface LogoProps {
  logoUrl: string;
  altText: string;
  sizePx?: number;
}

export const Logo: React.FC<LogoProps> = ({ logoUrl, altText, sizePx = 48 }) => {
  const { classes } = useStyles({ sizePx });
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const firstLetter = altText?.replace(' logo', '').charAt(0) || '?';

  if (hasError || !logoUrl) {
    return (
      <div className={classes.logoWrapper}>
        <div className={classes.fallback}>
          {firstLetter}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.logoWrapper}>
      {!isLoaded && <div className={classes.placeholder} />}
      <img
        src={logoUrl}
        alt={altText}
        className={classes.logo}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
};
