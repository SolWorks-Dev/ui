import React, { FC } from 'react';
import '../../common.css';
import './ApplicationCardMini.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

export type TagColor = 'light-blue' | 'orange' | 'purple' | 'red';

export interface ApplicationCardMiniProps {
  logoUrl: string;
  appName: string;
  tag: string;
  tagColor: TagColor;
  additionalStyles?: any;
  appValue: string;
}

export const ApplicationCardMini: FC<ApplicationCardMiniProps> = ({
  logoUrl,
  appName,
  tag,
  tagColor,
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
        <Tag tagColor={tagColor} tag={tag} />
        <div className="mac-divider" />
        <div className="mac-tap-text">Tap to open</div>
      </div>
    </Link>
  );
};

export interface TagProps {
  tagColor: TagColor;
  tag: string;
}

export const Tag: FC<TagProps> = ({ tagColor, tag }) => {
  let tagColorHex = '';
  switch (tagColor) {
    case 'light-blue':
      tagColorHex = '#71adff';
      break;
    case 'orange':
      tagColorHex = '#f89a3d';
      break;
    case 'purple':
      tagColorHex = '#461183';
      break;
  }

  return (
    <div className="mac-tag" style={{ backgroundColor: tagColorHex }}>
      <div className="mac-tag-text">{tag.toUpperCase()}</div>
    </div>
  );
};
