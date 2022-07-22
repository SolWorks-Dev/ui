import React, { FC } from 'react';
import '../../common.css';
import './LinkCard.css';

export interface LinkCardProps {
  title: string;
  url: string;
}

export const LinkCard: FC<LinkCardProps> = ({ title, url }) => {
  return (
    <div className="link-card-outline glow-on-hover bg px18">
      <div className="link-card-title">{title}</div>
      <div className="link-card-url">
        <a className="link-card-url" href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
      <div className="link-card-tap-wrapper">
        <div className="link-card-divider" />
        <div className="link-card-tap-text">Tap to open</div>
      </div>
    </div>
  );
};
