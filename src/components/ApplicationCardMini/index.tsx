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
    border: 'none',
    borderRadius: '16px',
    textAlign: 'center',
    cursor: 'pointer',
    background: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    color: 'var(--text-secondary)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      color: 'var(--text-main)',
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
    },
  },
  macLogo: {
    marginTop: '32px',
  },
  macTitle: {
    fontFamily: 'var(--font)',
    fontSize: '20px',
    fontWeight: 700,
    textAlign: 'center',
    color: 'var(--text-main)',
    marginTop: '16px',
    padding: '0 16px',
  },
  macDivider: {
    marginTop: '24px',
    width: '100%',
    height: '1px',
    backgroundColor: 'var(--border)',
  },
  macTapText: {
    paddingTop: '12px',
    paddingBottom: '12px',
    fontFamily: 'var(--font)',
    fontSize: '14px',
    fontWeight: 600,
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
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
      <div className={classes.macOutline}>
        <div>
          <Center className={classes.macLogo}>
            <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
          </Center>
          <div className={classes.macTitle}>{appName}</div>
          <Tag tagColorHex={tagColorHex} tag={tag} />
        </div>
        <div>
            <div className={classes.macDivider} />
            <div className={classes.macTapText}>Open App</div>
        </div>
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
    marginTop: '16px',
    minWidth: '40px',
    padding: '8px 12px',
    borderRadius: '8px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'inline-flex',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  tagText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'var(--font)',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '1',
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
