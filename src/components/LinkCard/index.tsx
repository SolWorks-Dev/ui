import React, { FC, useEffect } from 'react';
import '../../common.css';
import './LinkCard.css';

export interface LinkCardProps {
  title: string;
  url: string;
}

export const LinkCard: FC<LinkCardProps> = ({ title, url }) => {

  const [displayUrl, setDisplayUrl] = React.useState('');

  useEffect(() => {
    let tempDisplayUrl = url.replace('https://', '').replace('http://', '').replace('www.', '');
    tempDisplayUrl = tempDisplayUrl[tempDisplayUrl.length - 1] === '/' ? tempDisplayUrl.slice(0, -1) : tempDisplayUrl;
    tempDisplayUrl = tempDisplayUrl.length > 40 ? `${tempDisplayUrl.substring(0, 40)}...` : tempDisplayUrl;
    setDisplayUrl(tempDisplayUrl);
  }, [url]);
  

  return (
    <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <div className="link-card-outline glow-on-hover bg px18">
        <div className="link-card-title">{title}</div>
        <div className="link-card-url">
          <a className="link-card-link" href={url} target="_blank" rel="noreferrer">
            {displayUrl}
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
