import React, { FC } from 'react';
import '../../common.css';
import './SocialsCard.css';

export interface SocialsCardProps {
  twitter?: { url: string; text: string }[];
  discord?: { url: string; text: string }[];
  medium?: { url: string; text: string }[];
  telegram?: { url: string; text: string }[];
}

export const SocialsCard: FC<SocialsCardProps> = ({ twitter = [], discord = [], medium = [], telegram = [] }) => {
  return (
    <div className="sc-outline">
      <div className="sc-wrapper">
        <LinkGroup title="Twitter" urlAndTexts={twitter} />
        <LinkGroup title="Discord" urlAndTexts={discord} />
        <LinkGroup title="Medium" urlAndTexts={medium} />
        <LinkGroup title="Telegram" urlAndTexts={telegram} />
      </div>
    </div>
  );
};

interface LinkGroupProps {
  title: string;
  urlAndTexts: { url: string; text: string }[];
}

const LinkGroup: FC<LinkGroupProps> = ({ title, urlAndTexts }) => {
  let additionalLinks = [];
  if (urlAndTexts.length > 1) {
    // skip first
    for (var x = 1; x < urlAndTexts.length; x++) {
      const link = <Link text={urlAndTexts[x].text} url={urlAndTexts[x].url} additionalRow />;
      additionalLinks.push(link);
    }
  }

  if (urlAndTexts.length === 0) {
    return (
      <div className="sc-group-wrapper">
        <div className="sc-first-row">
          <div className="sc-group-title">{title}</div>
          <div className="grey-text">N/A</div>
        </div>
      </div>
    );
  }

  return (
    <div className="sc-group-wrapper">
      <div className="sc-first-row">
        <div className="sc-group-title">{title}</div>
        <Link text={urlAndTexts[0].text} url={urlAndTexts[0].url} />
      </div>
      {additionalLinks}
    </div>
  );
};

interface LinkProps {
  text: string;
  url: string;
  additionalRow?: boolean;
}

const Link: FC<LinkProps> = ({ text, url, additionalRow = false }) => {
  return (
    <a
      className={additionalRow ? 'sc-additional-row sc-link no-link-hover' : 'sc-link no-link-hover'}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
