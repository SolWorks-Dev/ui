import React, { FC } from 'react';
import '../../common.css';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Center, SimpleGrid } from '@mantine/core';
import { formatNumber } from '../../Common';

export interface NetworkStatusBarProps {
  // Solana TPS
  transactionsPerSecond?: number;
  // SOL price in USD
  solusdPrice?: number;
  // SOL price in GBP
  solgbpPrice?: number;
  // Is loading flag
  isLoading?: boolean;
}

const NetworkStatusBar: FC<NetworkStatusBarProps> = ({
  transactionsPerSecond = 0,
  solusdPrice = 0,
  solgbpPrice = 0,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="dark-background status-bar">
        <Center>
          <PacmanLoader size={10} color="#E42575" />
        </Center>
      </div>
    );
  }

  return (
    <div className="dark-background status-bar">
      <SimpleGrid cols={2} spacing={0}>
        <NetworkStatusBarItem
          title="Solana TPS"
          value={`${transactionsPerSecond.toLocaleString()} TPS`}
          isLoading={isLoading}
          link="https://explorer.solana.com/"
        />
        <NetworkStatusBarItem
          title="SOL/USD"
          value={`${formatNumber(solusdPrice, 2)} USD`}
          isLoading={isLoading}
          isCenter
          link="https://www.binance.com/en/trade/SOL_USDC?theme=dark&type=spot"
        />
      </SimpleGrid>
    </div>
  );
};

interface NetworkStatusBarItemProps {
  title: string;
  value: string;
  isLoading?: boolean;
  isCenter?: boolean;
  link: string;
}

const NetworkStatusBarItem: FC<NetworkStatusBarItemProps> = ({
  title = '',
  value = '',
  isLoading = true,
  isCenter = false,
  link = '',
}) => {
  return (
    <a
      className={isCenter ? 'status-bar-item no-link-hover center' : 'status-bar-item no-link-hover'}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div style={{ display: 'flex', margin: '0 auto' }}>
        <div className="status-bar-title">{title}:</div>
        {isLoading ? (
          <PacmanLoader loading={isLoading} size={8} color="#E42575" />
        ) : (
          <div className="status-bar-value">{value}</div>
        )}
      </div>
    </a>
  );
};

export default NetworkStatusBar;
