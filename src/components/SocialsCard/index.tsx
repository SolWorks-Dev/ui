import { createStyles } from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';

const useStyles = createStyles((theme) => ({
  scOutline: {
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    borderRadius: '18px',
    minWidth: '256px',
    maxWidth: '100%',
    textAlign: 'center',
    width: '100%',
    color: 'white',
    display: 'flex',
  },
  scWrapper: {
    margin: '32px 32px 0px 32px',
    width: '100%',
  },
  scGroupWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'white',
    marginBottom: '30px',
  },
  scFirstRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scGroupTitle: {
    fontFamily: 'var(--font)',
    fontSize: '20px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#7c7c7c',
  },
  scGroupFirstLink: {
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#e42575',
    textDecoration: 'none',
  },
  scAdditionalRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: '20px',
    textDecoration: 'none',
    color: '#e42575',
    fontSize: '20px',
  },
  scLink: {
    fontFamily: 'var(--font)',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#e42575',
    textDecoration: 'none',
  },
}));

export interface SocialsCardProps {
  twitter?: { url: string; text: string }[];
  discord?: { url: string; text: string }[];
  medium?: { url: string; text: string }[];
  telegram?: { url: string; text: string }[];
}

export const SocialsCard: FC<SocialsCardProps> = ({
  twitter = [],
  discord = [],
  medium = [],
  telegram = [],
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.scOutline}>
      <div className={classes.scWrapper}>
        <LinkGroup title="Twitter" urlAndTexts={twitter} />
        <LinkGroup title="Discord" urlAndTexts={discord} />
        <LinkGroup title="Medium" urlAndTexts={medium} />
        <LinkGroup title="Telegram" urlAndTexts={telegram} />
      </div>
    </div>
  );
};

interface LinkGroupProps {
  title: string;
  urlAndTexts: { url: string; text: string }[];
}

const LinkGroup: FC<LinkGroupProps> = ({ title, urlAndTexts }) => {
  const { classes } = useStyles();

  let additionalLinks: any[] = [];
  if (urlAndTexts.length > 1) {
    // skip first
    for (var x = 1; x < urlAndTexts.length; x++) {
      const link = <Link text={urlAndTexts[x].text} url={urlAndTexts[x].url} additionalRow />;
      additionalLinks.push(link);
    }
  }

  if (urlAndTexts.length === 0) {
    return (
      <div className={classes.scGroupWrapper}>
        <div className={classes.scFirstRow}>
          <div className={classes.scGroupTitle}>{title}</div>
          <div className="grey-text">N/A</div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.scGroupWrapper}>
      <div className={classes.scFirstRow}>
        <div className={classes.scGroupTitle}>{title}</div>
        <Link text={urlAndTexts[0].text} url={urlAndTexts[0].url} />
      </div>
      {additionalLinks}
    </div>
  );
};

interface LinkProps {
  text: string;
  url: string;
  additionalRow?: boolean;
}

const Link: FC<LinkProps> = ({ text, url, additionalRow = false }) => {
  const { classes } = useStyles();

  return (
    <a
      className={
        additionalRow ? `${classes.scAdditionalRow} ${classes.scLink} no-link-hover` : `${classes.scLink} no-link-hover`
      }
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
