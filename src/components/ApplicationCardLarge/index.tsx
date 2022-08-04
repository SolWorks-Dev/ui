import React, { FC } from 'react';
import './ApplicationCardLarge.css';
import { Logo } from '../Logo';
import { ActionButton } from '../ActionButton';

export interface ApplicationCardLargeProps {
  logoUrl: string;
  appName: string;
  description: string;
  additionalStyles?: any;
}

export const ApplicationCardLarge: FC<ApplicationCardLargeProps> = ({
  logoUrl,
  appName,
  description,
  additionalStyles = undefined,
}) => {
  return (
    <div className="lac-outline" style={additionalStyles}>
      <div className="lac-logo">
        <Logo logoUrl={logoUrl} altText={`${appName} logo`} />
      </div>
      <div className="lac-title-desc-wrapper">
        <div className="lac-title">{appName}</div>
        <div className="lac-desc">{description}</div>
      </div>
      <div className="lac-button">
        <ActionButton text="Open" />
      </div>
    </div>
  );
};

export default ApplicationCardLarge;