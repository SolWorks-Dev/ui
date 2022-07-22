import React, { FC } from 'react';
import '../../common.css';
import { Tag, TagColor } from '../ApplicationCardMini';
import { Logo } from '../Logo';
import './ApplicationDetailsCard.css';

export interface ApplicationDetailsCardProps {
  logoUrl: string;
  applicationName: string;
  tag: string;
  tagColor: TagColor;
  description: string;
}

export const ApplicationDetailsCard: FC<ApplicationDetailsCardProps> = ({
  logoUrl,
  applicationName,
  tag,
  tagColor = 'light-blue',
  description,
}) => {
  return (
    <div className="adc-outline">
      <div className="adc-wrapper">
        <div className="adc-header">
          <div className="adc-header-logo">
            <Logo logoUrl={logoUrl} altText="" sizePx={48} />
          </div>
          <div className="adc-header-text">{applicationName}</div>
          <div className="adc-header-tag">
            <Tag tagColor={tagColor} tag={tag} />
          </div>
        </div>
        <div className="adc-description">{description}</div>
      </div>
    </div>
  );
};
