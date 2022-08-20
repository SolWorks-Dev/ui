import { createStyles } from '@mantine/core';
import React, { FC, useEffect } from 'react';
import '../../common.css';

const useStyles = createStyles((theme) => ({
  linkCardOutline: {
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    borderRadius: '18px',
    minWidth: '256px',
    maxWidth: '100%',
    height: '175px',
    textAlign: 'center',
    background: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    '&:after': {
      background: theme.colorScheme === 'dark' ? 'var(--background) !important' : 'white !important',
    },
    '&:hover': {
      color: theme.colorScheme === 'dark' ? 'white' : 'black',
    },
    color: theme.colorScheme === 'dark' ? '#261d2b' : 'var(--grey)',
    WebkitTransition: '150ms ease-in-out',
    transition: '150ms ease-in-out'
  },
  linkCardTitle: {
    fontFamily: 'var(--font)',
    fontSize: '25px',
    fontWeight: theme.colorScheme === 'dark' ? 'bold' : 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? '#fff' : 'black',
    marginTop: '20px',
  },
  linkCardUrl: {
    margin: '15px 20px',
  },
  linkCardLink: {
    fontFamily: 'var(--font)',
    '@media (max-width: 420px)': {
      fontSize: '16px',
    },
    fontSize: '20px',
    fontWeight: theme.colorScheme === 'dark' ? 'bold' : 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: theme.colorScheme === 'dark' ? '#e42575' : 'var(--alternative-primary)',
    marginTop: '26px',
    wordWrap: 'break-word',
  },
  tapWrapper: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.colorScheme === 'dark' ? '#261d2b' : 'rgb(153, 153, 153)'
  },
  tapText: {
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
    alignSelf: 'center',
  },
  wrapper: {
    textDecoration: 'none',
  },
}));

export interface LinkCardProps {
  title: string;
  url: string;
}

export const LinkCard: FC<LinkCardProps> = ({ title, url }) => {
  const [displayUrl, setDisplayUrl] = React.useState('');
  const { classes } = useStyles();

  useEffect(() => {
    let tempDisplayUrl = url.replace('https://', '').replace('http://', '').replace('www.', '');
    tempDisplayUrl =
      tempDisplayUrl[tempDisplayUrl.length - 1] === '/'
        ? tempDisplayUrl.slice(0, -1)
        : tempDisplayUrl;
    tempDisplayUrl =
      tempDisplayUrl.length > 40 ? `${tempDisplayUrl.substring(0, 40)}...` : tempDisplayUrl;
    setDisplayUrl(tempDisplayUrl);
  }, [url]);

  return (
    <a href={url} target="_blank" rel="noreferrer" className={classes.wrapper}>
      <div className={classes.linkCardOutline + " glow-on-hover px18"}>
        <div className={classes.linkCardTitle}>{title}</div>
        <div className={classes.linkCardUrl}>
          <a className={classes.linkCardLink} href={url} target="_blank" rel="noreferrer">
            {displayUrl}
          </a>
        </div>
        <div className={classes.tapWrapper}>
          <div className={classes.divider}/>
          <div className={classes.tapText}>Tap to open</div>
        </div>
      </div>
    </a>
  );
};
