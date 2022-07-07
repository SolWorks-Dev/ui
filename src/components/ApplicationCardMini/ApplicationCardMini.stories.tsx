import React from "react";
import { BlackBackground } from "../../BlackBackground";
import { ApplicationCardMini } from "./index";

export default {
  title: "Application card mini",
  component: ApplicationCardMini,
};

export const Raydium = () => <BlackBackground child={
  <ApplicationCardMini 
    logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
    appName="Raydium"
    tag="AMM"
    tagColor='purple'
  />
} />;

export const Solend = () => <BlackBackground child={
  <ApplicationCardMini 
    logoUrl="https://solend.fi/assets/tokens/slnd.png"
    appName="Solend"
    tag="Lending"
    tagColor='light-blue'
  />
} />;

export const GenesysGo = () => <BlackBackground child={
  <ApplicationCardMini 
    logoUrl="https://metal.equinix.com/media/pages/images/0ff8033cf9437c213ee13937b1c4c455/79hX-genesysgo.svg"
    appName="GenesysGo"
    tag="Infrastructure"
    tagColor='orange'
  />
} />;

export const Orca = () => <BlackBackground child={
  <ApplicationCardMini 
    logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
    appName="Orca"
    tag="AMM"
    tagColor='purple'
  />
} />;