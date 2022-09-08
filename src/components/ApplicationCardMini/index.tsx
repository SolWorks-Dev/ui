import React, { FC } from 'react';
import '../../common.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { Badge, Center, createStyles, MantineSize } from '@mantine/core';
import { encodeString } from '../../Common';

export type TagColor = 'light-blue' | 'orange' | 'purple' | 'red' | 'green' | 'violet';

export interface ApplicationCardMiniProps {
  logoUrl: string;
  appName: string;
  tag: string;
  tagColorHex: string;
  additionalStyles?: any;
  appValue: string;
}

const useStyles = createStyles((theme) => ({
  macOutline: {
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
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
  macLogo: {
    marginTop: '34px',
  },
  macTitle: {
    fontFamily: 'var(--font)',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: theme.colorScheme === 'dark' ? '#fff' : 'black',
    marginTop: '19px',
  },
  macDivider: {
    marginTop: '37px',
    width: '100%',
    height: '1px',
    backgroundColor: theme.colorScheme === 'dark' ? '#261d2b' : 'rgb(153, 153, 153)',
  },
  macTapText: {
    paddingTop: '12px',
    paddingBottom: '10px',
    fontFamily: 'var(--font)',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal'
  },
}));

export const ApplicationCardMini: FC<ApplicationCardMiniProps> = ({
  logoUrl,
  appName,
  tag,
  tagColorHex,
  additionalStyles = undefined,
  appValue,
}) => {
  const { classes } = useStyles();

  return (
    <Link
      to={`/apps/${encodeString(appName)}`}
      style={{ ...additionalStyles, textDecoration: 'none' }}
    >
      <div className={classes.macOutline + " glow-on-hover px18 rise-on-hover-300"}>
        <Center className={classes.macLogo}>
          <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
        </Center>
        <div className={classes.macTitle}>{appName}</div>
        <Tag tagColorHex={tagColorHex} tag={tag} />
        <div className={classes.macDivider} />
        <div className={classes.macTapText}>Tap to open</div>
      </div>
    </Link>
  );
};

export interface TagProps {
  tagColorHex: string;
  tag: string;
  size?: MantineSize;
}

const useTagStyles = createStyles((theme) => ({
  tag: {
    marginTop: '20px',
    color: 'rgb(197, 194, 194)',
    minWidth: '40px',
    padding: '8px 12px 8px 12px',
    borderRadius: '6px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'inline-flex',
  },
  tagText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#fff',
  },
}));

export const Tag: FC<TagProps> = ({ tagColorHex, tag, size }) => {
  const { classes } = useTagStyles();

  return (
    <Badge className={classes.tag} style={{ backgroundColor: tagColorHex }} size={size}>
      <div className={classes.tagText}>{tag.toUpperCase()}</div>
    </Badge>
  );
};
