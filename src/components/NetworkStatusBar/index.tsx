import React, { FC } from "react";
import "../../common.css";
import PacmanLoader from "react-spinners/PacmanLoader";

interface NetworkStatusBarProps {
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
  isLoading = false
}) => {
  if (isLoading) {
    return <LoadingNetworkStatusBar />;
  }

  return (
    <div className="dark-background status-bar">
      <div className="status-bar-content inline-contents">
        <NetworkStatusBarItem
          title="Solana TPS"
          value={`${transactionsPerSecond.toLocaleString()} TPS`}
          isLoading={isLoading}
          link="https://explorer.solana.com/"
        />
        <NetworkStatusBarItem
          title="SOL/USD"
          value={`${solusdPrice.toLocaleString()} USD`}
          isLoading={isLoading}
          isCenter
          link="https://www.binance.com/en/trade/SOL_USDC?theme=dark&type=spot"
        />
        <NetworkStatusBarItem
          title="SOL/GBP"
          value={`${solgbpPrice.toLocaleString()} GBP`}
          isLoading={isLoading}
          link="https://www.binance.com/en/trade/SOL_GBP?theme=dark&type=spot"
        />
      </div>
    </div>
  );
};

const LoadingNetworkStatusBar = () => {
  return (
    <div className="dark-background status-bar">
      <div className="status-bar-content inline-contents">
        <div className="status-bar-item">
            <div className="status-bar-title">Assembling minions...</div>
            <PacmanLoader loading={true} size={8} color="#E42575" />
        </div>
      </div>
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
  title = "",
  value = "",
  isLoading = true,
  isCenter = false,
  link = ""
}) => {
  return (
    <a 
      className={isCenter ? "status-bar-item no-link-hover center" : "status-bar-item no-link-hover"} 
      href={link} 
      target='_blank' 
      rel="noreferrer"
    >
      <div className="status-bar-title">{title}:</div>
      {isLoading ? (
        <PacmanLoader loading={isLoading} size={8} color="#E42575" />
      ) : (
        <div className="status-bar-value">{value}</div>
      )}
    </a>
  );
};

export default NetworkStatusBar;