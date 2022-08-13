import React, { FC } from 'react';
import '../../common.css';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Center, createStyles, SimpleGrid } from '@mantine/core';
import { formatNumber } from '../../Common';

const useStyles = createStyles((theme) => ({
  networkStatusBar: {
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--status-bar-background)' : 'white',
    height: '32px',
    maxWidth: '100%',
    paddingTop: '6px',
    borderBottom: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
  },
  networkBarTitle: {
    color: theme.colorScheme === 'dark' ? 'var(--grey)' : '#454545',
    fontFamily: 'Roboto, sans-serif !important',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  networkBarItemValue: {
    color: theme.colorScheme === 'dark' ? 'var(--primary)' : 'var(--primary)',
    fontSize: '14px',
    paddingLeft: '8px',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif !important',
  },
  networkBarItem: {
    display: 'flex',
    textDecoration: 'none'
  }
}));

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

interface NetworkStatusBarItemProps {
  title: string;
  value: string;
  isLoading?: boolean;
  isCenter?: boolean;
  link: string;
}

const NetworkStatusBar: FC<NetworkStatusBarProps> = ({
  transactionsPerSecond = 0,
  solusdPrice = 0,
  solgbpPrice = 0,
  isLoading = false,
}) => {
  const { classes } = useStyles();

  if (isLoading) {
    return (
      <div className={classes.networkStatusBar}>
        <Center>
          <PacmanLoader size={10} color="#E42575" />
        </Center>
      </div>
    );
  }

  return (
    <div className={classes.networkStatusBar}>
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
          link="https://www.binance.com/en/trade/SOL_USDC?theme=dark&type=spot"
        />
      </SimpleGrid>
    </div>
  );
};

const NetworkStatusBarItem: FC<NetworkStatusBarItemProps> = ({
  title = '',
  value = '',
  isLoading = true,
  link = '',
}) => {
  const { classes } = useStyles();

  return (
    <Center>
      <a
        className={classes.networkBarItem + ' no-link-hover'}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className={classes.networkBarTitle}>{title}:</div>
        {isLoading ? (
          <PacmanLoader loading={isLoading} size={8} color="#E42575" />
        ) : (
          <div className={classes.networkBarItemValue}>{value}</div>
        )}
      </a>
    </Center>
  );
};

export default NetworkStatusBar;
