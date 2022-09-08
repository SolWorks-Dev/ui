import { createStyles } from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import { Logo } from '../Logo';
import ReactMarkdown from 'react-markdown';

export interface ApplicationDetailsCardProps {
  logoUrl: string;
  applicationName: string;
  tag: string;
  tagColorHex: string;
  description: string;
}

const useStyles = createStyles((theme) => ({
  adcOutline: {
    color: 'white',
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    borderRadius: '8px',
    minWidth: '285px',
    maxWidth: '100%',
    maxHeight: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  adcWrapper: {
    padding: '32px',
    '@media (max-width: 420px)': {
      padding: '28px',
    },
  },
  adcHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  adcHeaderText: {
    fontFamily: 'var(--font)',
    fontSize: '26px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: theme.colorScheme === 'dark' ? '#fff' : 'black',
    paddingLeft: '30px',
  },
  adcHeaderTag: {
    marginTop: '-20px',
  },
  adcHeaderDescription: {
    textAlign: 'left',
    paddingTop: '25px',
    fontFamily: 'var(--font)',
    fontSize: '18px',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.33',
    letterSpacing: 'normal',
    color: '#797f91',
  },
}));

export const ApplicationDetailsCard: FC<ApplicationDetailsCardProps> = ({
  logoUrl,
  applicationName,
  tag,
  tagColorHex,
  description,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.adcOutline}>
      <div className={classes.adcWrapper}>
        <div className={classes.adcHeader}>
          <Logo logoUrl={logoUrl} altText="" sizePx={48} />
          <div className={classes.adcHeaderText}>{applicationName}</div>
        </div>
        <div className={classes.adcHeaderDescription}>
          <ReactMarkdown children={description} />
        </div>
      </div>
    </div>
  );
};
