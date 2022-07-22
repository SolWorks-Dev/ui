import React, { FC } from 'react';
import '../../common.css';
import './ApplicationCardLargeV2.css';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import { formatLink } from '../../Common';

export interface ApplicationCardLargeV2Props {
  logoUrl: string;
  appName: string;
  description: string;
  additionalStyles?: any;
  height?: number;
}

export const ApplicationCardLargeV2: FC<ApplicationCardLargeV2Props> = ({
  logoUrl,
  appName,
  description,
  additionalStyles = undefined,
  height = 285,
}) => {
  return (
    <Link
      to={formatLink(appName)}
      className="lac-v2-outline glow-on-hover bg px18 rise-on-hover-300"
      style={{ height: `${height}px`, ...additionalStyles, textDecoration: 'none' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-50px' }}>
        <div className="lac-v2-logo">
          <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
        </div>
        <div className="lac-v2-title-desc-wrapper">
          <div className="lac-v2-title">{appName}</div>
          <div className="lac-v2-desc">{description}</div>
        </div>
      </div>
      <div className="lac-v2-tap-wrapper">
        <div className="lac-v2-divider" />
        <div className="lac-v2-tap-text">Tap to open</div>
      </div>
    </Link>
  );
};
