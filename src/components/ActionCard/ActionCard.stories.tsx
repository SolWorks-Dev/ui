import React from 'react';
import { ActionCard } from './index';
import '../../common.css';
import { BlackBackground } from '../../BlackBackground';

export default {
  component: ActionCard,
};

const FirstTimeCard = (
  <ActionCard
    title="First time here? gm 👋"
    text={
      <>
        SolApps is a directory of the best Solana protocols and communities.
        <br />
        <br />
        No more searching for verified protocol links. Read our getting started guide.
      </>
    }
    actionLink=""
    actionButtonText="Learn more"
  />
);

export const FirstTime = () => <BlackBackground child={FirstTimeCard} />;

const MissingProtocolCard = (
  <ActionCard
    title="Are we missing a protocol? 🕵️‍♀️"
    text={
      <>
        Contact us if you want to see a protocol or community on SolApps ✉️
        <br />
        <br />
        Submissions can take up to 1 week to review protocol’s for their legitimacy and links.
      </>
    }
    actionLink=""
    actionButtonText="Apply now"
  />
);

export const MissingProtocol = () => <BlackBackground child={MissingProtocolCard} />;
