import React from 'react';
import { BlackBackground } from '../../BlackBackground';
import { ApplicationCardLargeV2 } from './index';

export default {
  component: ApplicationCardLargeV2,
};

export const Raydium = () => (
  <BlackBackground
    child={
      <ApplicationCardLargeV2
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
        appName="Raydium"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book for trading"
        appValue="raydium"
      />
    }
  />
);

export const Orca = () => (
  <BlackBackground
    child={
      <ApplicationCardLargeV2
        logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
        appName="Orca"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book for trading"
        appValue="orca"
      />
    }
  />
);

export const Saber = () => (
  <BlackBackground
    child={
      <ApplicationCardLargeV2
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg"
        appName="Saber"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book."
        appValue="saber"
      />
    }
  />
);

export const Solend = () => (
  <BlackBackground
    child={
      <ApplicationCardLargeV2
        logoUrl="https://solend.fi/assets/tokens/slnd.png"
        appName="Solend"
        description="Some short text about the application that is at least two lines long"
        appValue="solend"
      />
    }
  />
);
