import React, { FC } from 'react';
import '../../common.css';
import PulseLoader from 'react-spinners/PulseLoader';
import { createStyles } from '@mantine/core';

export interface ActionButtonWithLinkProps {
  isLoading?: boolean;
  text?: string;
  url?: string;
  classname?: string;
  width?: number;
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'dark' | 'white';
}

const useStyles = createStyles((theme, { colorVariant }: { colorVariant: string }) => {
  let bgColor = 'var(--color-primary)';
  let textColor = 'white';
  let hoverBg = 'var(--color-primary-hover)';
  let shadowColor = 'rgba(255, 107, 53, 0.2)';

  if (colorVariant === 'secondary') {
    bgColor = 'var(--bg-secondary)';
    textColor = 'var(--text-primary)';
    hoverBg = 'var(--bg-tertiary)';
    shadowColor = 'rgba(26, 24, 22, 0.1)';
  }
  if (colorVariant === 'accent') {
    bgColor = 'var(--color-accent)';
    hoverBg = '#4F46E5';
    shadowColor = 'rgba(99, 102, 241, 0.2)';
  }
  if (colorVariant === 'dark') {
    bgColor = 'var(--bg-inverse)';
    hoverBg = '#2D2926';
    shadowColor = 'rgba(26, 24, 22, 0.3)';
  }
  if (colorVariant === 'white') {
    bgColor = 'white';
    textColor = 'var(--text-primary)';
    hoverBg = 'var(--bg-secondary)';
    shadowColor = 'rgba(26, 24, 22, 0.1)';
  }

  return {
    actionButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      minHeight: '52px',
      height: '52px',
      width: '100%',
      minWidth: '150px',
      padding: '0 28px',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 700,
      color: textColor,
      backgroundColor: bgColor,
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s var(--ease-out-quart)',
      boxShadow: `0 4px 12px ${shadowColor}`,
      border: 'none',

      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 8px 24px ${shadowColor}`,
        backgroundColor: hoverBg,
      },
      
      '&:active': {
        transform: 'translateY(-1px)',
      }
    },
  };
});

export const ActionButtonWithLink: FC<ActionButtonWithLinkProps> = ({
  isLoading = false,
  text = '',
  url = '',
  classname = '',
  width = 0,
  colorVariant = 'primary'
}) => {
  const { classes } = useStyles({ colorVariant });
  
  return (
    <a
      className={`${classes.actionButton} ${classname}`}
      target="_blank"
      rel="noreferrer"
      href={url}
      style={{ width: width === 0 ? '100%' : `${width}px` }}
    >
      {isLoading ? (
        <PulseLoader 
          loading={isLoading} 
          size={8} 
          color={colorVariant === 'white' || colorVariant === 'secondary' ? 'var(--text-primary)' : 'white'} 
        />
      ) : (
        text
      )}
    </a>
  );
};
