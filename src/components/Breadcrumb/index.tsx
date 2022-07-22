import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';
import './Breadcrumb.css';
import { Breadcrumbs } from '@mantine/core';
import { formatLink } from '../../Common';

interface BreadcrumbItem {
  title: string;
  link: string;
  active?: boolean;
  emoji?: string;
}

export const Breadcrumb: FC<{ appName?: string }> = ({ appName }) => {
  let items: BreadcrumbItem[] = [{ title: 'Home', link: '/', active: true, emoji: '🏠' }];

  if (appName) {
    items.push({ title: appName, link: `${formatLink(appName)}`, active: true, emoji: undefined });
    items[0].active = false;
  }
  let breakcrumbs = items.map((item, index) => (
    <Link
      to={item.link}
      key={index}
      style={{ textDecoration: 'none', color: 'var(--grey)' }}
      className="rise-on-hover-150"
    >
      {item.emoji ? <span className="emoji">{item.emoji} </span> : null}
      <span style={{ textDecoration: item.active ? 'underline' : 'none' }}>{item.title}</span>
    </Link>
  ));

  return (
    <div className="breadcrumb-wrapper" style={{ fontSize: '18px' }}>
      <Breadcrumbs separator="→">{breakcrumbs}</Breadcrumbs>
    </div>
  );
};
