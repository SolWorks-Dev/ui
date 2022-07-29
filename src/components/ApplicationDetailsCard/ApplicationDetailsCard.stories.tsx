import React from 'react';
import { BlackBackground } from '../../BlackBackground';
import { ApplicationDetailsCard } from './index';

export default {
  component: ApplicationDetailsCard,
};

export const Raydium = () => (
  <BlackBackground
    child={
      <ApplicationDetailsCard
        applicationName="Raydium"
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        tag="AMM"
        tagColorHex="#71adff"
      />
    }
  />
);
