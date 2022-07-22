import React from 'react';
import { BlackBackground } from '../../BlackBackground';
import { LinkCard } from './index';

export default {
  component: LinkCard,
};

export const Website = () => <BlackBackground child={<LinkCard title="Website" url="https://raydium.io" />} />;
