import { createStyles } from '@mantine/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';

const useStyles = createStyles((theme) => ({
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    minWidth: '120px',
    height: '48px',
    padding: '0 24px',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s var(--ease-out-quart)',
    
    '&:hover': {
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--text-primary)',
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-sm)',
    },
    
    '&:active': {
      transform: 'translateY(0)',
    }
  },
}));

export interface SecondaryButtonProps {
  text?: string;
  classname?: string;
  onClick?: () => void;
  url?: string;
  additionalStyles?: any;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  text = '',
  classname = '',
  onClick = undefined,
  url = undefined,
  additionalStyles = undefined,
}) => {
  const { classes } = useStyles();

  if (url !== undefined) {
    return (
      <Link
        className={`${classes.secondaryButton} ${classname}`}
        to={url}
        style={additionalStyles}
      >
        {text}
      </Link>
    );
  } else if (onClick) {
    return (
      <button
        className={`${classes.secondaryButton} ${classname}`}
        onClick={onClick}
        style={additionalStyles}
        type="button"
      >
        {text}
      </button>
    );
  } else {
    return (
      <div className={`${classes.secondaryButton} ${classname}`} style={additionalStyles}>
        {text}
      </div>
    );
  }
};
