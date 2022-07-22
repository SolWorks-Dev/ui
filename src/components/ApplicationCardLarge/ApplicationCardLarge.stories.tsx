import React from 'react';
import { BlackBackground } from '../../BlackBackground';
import { ApplicationCardLarge } from './index';

export default {
  component: ApplicationCardLarge,
};

export const Raydium = () => (
  <BlackBackground
    child={
      <ApplicationCardLarge
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
        appName="Raydium"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book for trading"
      />
    }
  />
);

export const Orca = () => (
  <BlackBackground
    child={
      <ApplicationCardLarge
        logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
        appName="Orca"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book for trading"
      />
    }
  />
);

export const Saber = () => (
  <BlackBackground
    child={
      <ApplicationCardLarge
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg"
        appName="Saber"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book."
      />
    }
  />
);

export const Solend = () => (
  <BlackBackground
    child={
      <ApplicationCardLarge
        logoUrl="https://solend.fi/assets/tokens/slnd.png"
        appName="Solend"
        description="Some short text about the application that is at least two lines long"
      />
    }
  />
);
