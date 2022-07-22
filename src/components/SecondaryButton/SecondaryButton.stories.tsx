import React from 'react';
import { BlackBackground } from '../../BlackBackground';
import { SecondaryButton } from './index';

export default {
  component: SecondaryButton,
};

const NormalButton = (
  <SecondaryButton
    text="See more"
    onClick={() => {
      console.log('onClick');
    }}
  />
);
const LinkButton = <SecondaryButton text="See more" url="https://google.com" />;

export const Normal = () => <BlackBackground child={NormalButton} />;

export const Link = () => <BlackBackground child={LinkButton} />;
