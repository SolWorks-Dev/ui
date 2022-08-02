import React, { FC } from 'react';
import '../../common.css';
import './ApplicationCardMini.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { Badge, MantineSize } from '@mantine/core';

export type TagColor = 'light-blue' | 'orange' | 'purple' | 'red' | 'green' | 'violet';

export interface ApplicationCardMiniProps {
  logoUrl: string;
  appName: string;
  tag: string;
  tagColorHex: string;
  additionalStyles?: any;
  appValue: string;
}

export const ApplicationCardMini: FC<ApplicationCardMiniProps> = ({
  logoUrl,
  appName,
  tag,
  tagColorHex,
  additionalStyles = undefined,
  appValue,
}) => {
  return (
    <Link to={`/apps/${appValue}`} className="mac-lw" style={{ ...additionalStyles, textDecoration: 'none' }}>
      <div className="mac-outline glow-on-hover bg px18 rise-on-hover-300">
        <div className="mac-logo">
          <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
        </div>
        <div className="mac-title">{appName}</div>
        <Tag tagColorHex={tagColorHex} tag={tag} />
        <div className="mac-divider" />
        <div className="mac-tap-text">Tap to open</div>
      </div>
    </Link>
  );
};

export interface TagProps {
  tagColorHex: string;
  tag: string;
  size?: MantineSize;
}

export const Tag: FC<TagProps> = ({ tagColorHex, tag, size }) => {
  return (
    <Badge className="mac-tag" style={{ backgroundColor: tagColorHex }} size={size}>
      <div className="mac-tag-text">{tag.toUpperCase()}</div>
    </Badge>
  );
};
