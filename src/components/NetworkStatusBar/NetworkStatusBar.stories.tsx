import React from 'react';
import NetworkStatusBar from './index';
import '../../common.css';

export default {
  component: NetworkStatusBar,
};

export const Loading = () => <NetworkStatusBar isLoading={true} />;

export const PopulatedSmall = () => (
  <NetworkStatusBar transactionsPerSecond={235} solusdPrice={33.33} solgbpPrice={28.88} />
);

export const PopulatedLarge = () => (
  <NetworkStatusBar transactionsPerSecond={20235} solusdPrice={3333.33} solgbpPrice={2888.88} />
);
