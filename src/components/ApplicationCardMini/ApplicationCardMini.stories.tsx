import React from 'react';
import { BlackBackground } from '../../BlackBackground';
import { ApplicationCardMini } from './index';

export default {
  component: ApplicationCardMini,
};

export const Raydium = () => (
  <BlackBackground
    child={
      <ApplicationCardMini
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
        appName="Raydium"
        tag="AMM"
        tagColorHex='#71adff'
        appValue='raydium'
      />
    }
  />
);

export const Solend = () => (
  <BlackBackground
    child={
      <ApplicationCardMini
        logoUrl="https://solend.fi/assets/tokens/slnd.png"
        appName="Solend"
        tag="Lending"
        tagColorHex='#71adff'
        appValue='solend'
      />
    }
  />
);

export const GenesysGo = () => (
  <BlackBackground
    child={
      <ApplicationCardMini
        logoUrl="https://metal.equinix.com/media/pages/images/0ff8033cf9437c213ee13937b1c4c455/79hX-genesysgo.svg"
        appName="GenesysGo"
        tag="Infrastructure"
        tagColorHex='#71adff'
        appValue='genesysgo'
      />
    }
  />
);

export const Orca = () => (
  <BlackBackground
    child={
      <ApplicationCardMini
        logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
        appName="Orca"
        tag="AMM"
        tagColorHex='#71adff'
        appValue='orca'
      />
    }
  />
);
