import React, { FC } from 'react';
import '../../common.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { encodeString } from '../../Common';
import { createStyles } from '@mantine/core';

export interface ApplicationCardLargeV2Props {
  logoUrl: string;
  appName: string;
  description: string;
  additionalStyles?: any;
  height?: number;
  appValue: string;
}

const useStyles = createStyles((theme) => ({
  lacOutline: {
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    borderRadius: '18px',
    maxWidth: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    '&:after': {
      background: theme.colorScheme === 'dark' ? 'var(--background) !important' : 'white !important',
    }
  },
  lacLogoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-50px',
  },
  lacLogo: {
    marginLeft: '32px',
  },
  lacTitleWrapper: {
    marginLeft: '40px',
    marginRight: '48px',
  },
  lacTitle: {
    fontFamily: 'var(--font)',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.colorScheme === 'dark' ? '#fff' : 'black',
    textAlign: 'left',
  },
  lacDescription: {
    textAlign: 'left',
    fontFamily: 'var(--font)',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.colorScheme === 'dark' ? '#fff' : 'black',
    marginTop: '20px',
  },
  lacTapWrapper: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  lacDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.colorScheme === 'dark' ? '#261d2b' : 'rgb(153, 153, 153)',
  },
  lacTapText: {
    paddingTop: '12px',
    paddingBottom: '10px',
    marginBottom: '0',
    fontFamily: 'var(--font)',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#261d2b',
    alignSelf: 'center',
    WebkitTransition: '150ms ease-in-out',
    transition: '150ms ease-in-out',
  },
  lacButton: {
    marginRight: '48px',
    marginLeft: '48px',
  },
}));

export const ApplicationCardLargeV2: FC<ApplicationCardLargeV2Props> = ({
  logoUrl,
  appName,
  description,
  additionalStyles = undefined,
  height = 285,
  appValue,
}) => {
  const { classes } = useStyles();

  return (
    <Link
      to={`/apps/${encodeString(appName)}`}
      className={classes.lacOutline + " glow-on-hover px18 rise-on-hover-300"}
      style={{ height: `${height}px`, ...additionalStyles, textDecoration: 'none' }}
    >
      <div className={classes.lacLogoWrapper}>
        <div className={classes.lacLogo}>
          <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
        </div>
        <div className={classes.lacTitleWrapper}>
          <div className={classes.lacTitle}>{appName}</div>
          <div className={classes.lacDescription}>{description}</div>
        </div>
      </div>
      <div className={classes.lacTapWrapper}>
        <div className={classes.lacDivider} />
        <div className={classes.lacTapText}>Tap to open</div>
      </div>
    </Link>
  );
};
