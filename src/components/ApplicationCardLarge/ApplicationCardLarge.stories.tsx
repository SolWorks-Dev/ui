import React from "react";
import { BlackBackground } from "../../BlackBackground";
import { ApplicationCardLarge } from "./index";

export default {
  title: "Application card large",
  component: ApplicationCardLarge,
};

export const Raydium = () => <BlackBackground child={
    <ApplicationCardLarge
        logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
        appName="Raydium"
        description="Automated market maker (AMM) utilising Serum’s on-chain central order book for trading"
    />
} />