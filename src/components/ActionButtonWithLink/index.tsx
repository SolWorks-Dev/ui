import React, { FC } from 'react';
import '../../common.css';
import PulseLoader from 'react-spinners/PulseLoader';
import { Center, createStyles } from '@mantine/core';

export interface ActionButtonWithLinkProps {
  isLoading?: boolean;
  text?: string;
  url?: string;
  classname?: string;
  width?: number;
}

const useStyles = createStyles((theme) => ({
  actionButton: {
    WebkitTransition: '150ms ease-in-out',
    transition: '150ms ease-in-out',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--primary)' : 'var(--alternative-primary)',
    minHeight: '42px',
    height: '42px',
    width: '100%',
    minWidth: '150px',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    textDecoration: 'none',
    '&:hover': {
      WebkitTransform: 'translate(0, -2px)',
      MsTransform: 'translate(0, -2px)',
      transform: 'translate(0, -2px)',
      boxShadow: '0 3px 5px rgba(145, 92, 182, 0.2)',
      cursor: 'pointer',
    },
  },
  actionButtonText: {
    margin: '0 auto',
    fontFamily: 'var(--font)',
    fontSize: '18px',
  },
}));

export const ActionButtonWithLink: FC<ActionButtonWithLinkProps> = ({
  isLoading = false,
  text = '',
  url = '',
  classname = '',
  width = 0,
}) => {
  const { classes } = useStyles();
  return (
    <Center>
      <a
        className={classes.actionButton}
        target="_blank"
        rel="noreferrer"
        href={url}
        style={{ width: width === 0 ? '100%' : `${width}px` }}
      >
        <div className={classes.actionButtonText}>
          {isLoading ? <PulseLoader loading={isLoading} size={8} color="white" /> : text}
        </div>
      </a>
    </Center>
  );
};
