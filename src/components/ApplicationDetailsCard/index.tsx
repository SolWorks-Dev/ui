import { Grid } from '@mantine/core';
import React, { FC } from 'react';
import { Tag } from '../ApplicationCardMini';
import { Logo } from '../Logo';
import ReactMarkdown from 'react-markdown'

export interface ApplicationDetailsCardProps {
  logoUrl: string;
  applicationName: string;
  tag: string;
  tagColorHex: string;
  description: string;
}

const ApplicationDetailsCard: FC<ApplicationDetailsCardProps> = ({
  logoUrl,
  applicationName,
  tag,
  tagColorHex,
  description,
}) => {
  return (
    <div className="adc-outline">
      <div className="adc-wrapper">
        <div className="adc-header">
          <Grid justify={'center'} align={'center'} style={{paddingLeft: '10px'}}>
              <div className="adc-header-logo">
                <Logo logoUrl={logoUrl} altText="" sizePx={48} />
              </div>
              <div className="adc-header-text">{applicationName}</div>
              <div className="adc-header-tag">
                <Tag tagColorHex={tagColorHex} tag={tag} size={'lg'} />
              </div>
          </Grid>
        </div>
        <div className="adc-description"><ReactMarkdown children={description} /></div>
      </div>
    </div>
  );
};

export default ApplicationDetailsCard;