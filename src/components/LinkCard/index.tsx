import React, { FC } from 'react';

export interface LinkCardProps {
  title: string;
  url: string;
}

export const LinkCard: FC<LinkCardProps> = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
      <div className="link-card-outline glow-on-hover bg px18">
        <div className="link-card-title">{title}</div>
        <div className="link-card-url">
          <a className="link-card-link" href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </div>
        <div className="link-card-tap-wrapper">
          <div className="link-card-divider" />
          <div className="link-card-tap-text white-text-on-hover">Tap to open</div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;