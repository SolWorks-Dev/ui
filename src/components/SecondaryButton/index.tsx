import { createStyles } from '@mantine/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';

const useStyles = createStyles((theme) => ({
  secondaryButton: {
    WebkitTransition: "150ms ease-in-out", 
    transition: "150ms ease-in-out", 
    width: "158px", 
    minWidth: "60px", 
    height: "48px", 
    minHeight: "48px", 
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1.5px solid rgb(153, 153, 153)',
    display: "flex", 
    textAlign: "center", 
    justifyContent: "center", 
    alignItems: "center", 
    textDecoration: "none", 
    borderRadius: "8px",
    background: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    '&:after': {
      background: theme.colorScheme === 'dark' ? 'var(--background) !important' : 'white !important',
    },
    "&:hover": {
      WebkitTransform: "translate(0, -2px)", 
      MsTransform: "translate(0, -2px)", 
      transform: "translate(0, -2px)", 
      cursor: "pointer", 
      backgroundColor: "rgba(29, 19, 38, 0.6)"
    }
  },
  secondaryButtonText: {
    fontFamily: "var(--font)", 
    fontSize: "18px", 
    fontWeight: "bold", 
    fontStretch: "normal", 
    fontStyle: "normal", 
    lineHeight: "normal", 
    letterSpacing: "normal", 
    textAlign: "left", 
    color: theme.colorScheme === 'dark' ? "#eae4e4" : 'black'
  }
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
  classname = undefined,
  onClick = undefined,
  url = undefined,
  additionalStyles = undefined,
}) => {
  const { classes } = useStyles();

  if (url !== undefined) {
    return (
      <Link
        className={classes.secondaryButton + ' glow-on-hover colors-only ' + classname}
        to={url}
        style={additionalStyles}
      >
        <div className={classes.secondaryButtonText}>{text.toUpperCase()}</div>
      </Link>
    );
  } else if (onClick) {
    return (
      <div
        className={classes.secondaryButton + ' glow-on-hover colors-only ' + classname}
        onClick={onClick}
        style={additionalStyles}
      >
        <div className={classes.secondaryButtonText}>{text.toUpperCase()}</div>
      </div>
    );
  } else {
    return (
      <div className={classes.secondaryButton + '  glow-on-hover colors-only ' + classname} style={additionalStyles}>
        <div className={classes.secondaryButtonText}>{text.toUpperCase()}</div>
      </div>
    );
  }
};
