import React from "react";
import { ActionCard } from "./index";
import "../../common.css";

export default {
  title: "Action card",
  component: ActionCard,
};

export const FirstTime = () => <ActionCard 
    title="First time here? gm 👋"
    text={<>SolApps is a directory of the best Solana protocols and communities.
    <br/><br/>
    No more searching for verified protocol links. Read our getting started guide.</>}
    actionLink=""
    actionButtonText="Learn more"
/>;

export const MissingProtocol = () => <ActionCard 
    title="Are we missing a protocol? 🕵️‍♀️"
    text={<>Contact us if you want to see a protocol or community on SolApps ✉️
    <br/><br/>
    Submissions can take up to 1 week to review protocol’s for their legitimacy and links.</>}
    actionLink=""
    actionButtonText="Apply now"
/>;
