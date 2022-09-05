import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';
import './Breadcrumb.css';
import { Box, Breadcrumbs } from '@mantine/core';
import { formatCategoryLink, formatLink } from '../../Common';
import { appList } from '@solworks/application-registry';

interface BreadcrumbItem {
  title: string;
  link: string;
  active?: boolean;
  emoji?: string;
}

export const Breadcrumb: FC<{ appName?: string; categoryName?: string }> = ({
  appName,
  categoryName,
}) => {
  let items: BreadcrumbItem[] = [{ title: 'Home', link: '/', active: true, emoji: '🏠' }];

  if (categoryName) {
    var category =
      categoryName.toLowerCase() === 'curated'
        ? {
            value: 'curated',
            tag_label: 'Curated',
            heading_label: 'Curated',
          }
        : appList.categories.find((x) => x.heading_label === categoryName)!;
    items.push({
      title: category.heading_label,
      link: `${formatCategoryLink(category.value)}`,
      active: true,
      emoji: undefined,
    });
    items[0].active = false;
  }

  if (appName) {
    items.push({ title: appName, link: `${formatLink(appName)}`, active: true, emoji: undefined });
    items[0].active = false;

    if (categoryName) {
      items[1].active = false;
    }
  }

  let breakcrumbs = items.map((item, index) => (
    <Box
      sx={{
        '@media (max-width: 480px)': {
          paddingTop: '12px',
        },
        paddingTop: 0,
      }}
    >
      <Link
        to={item.link}
        key={index}
        style={{ textDecoration: 'none', color: 'var(--grey)' }}
        className="rise-on-hover-150"
      >
        {item.emoji ? <span className="emoji">{item.emoji} </span> : null}
        <span style={{ textDecoration: item.active ? 'underline' : 'none' }}>{item.title}</span>
      </Link>
    </Box>
  ));

  return (
    <div className="breadcrumb-wrapper" style={{ fontSize: '18px' }}>
      <Breadcrumbs
        separator="→"
        sx={{ flexWrap: 'wrap' }}
        styles={{
          separator: {
            '@media (max-width: 480px)': {
              paddingTop: '12px',
            },
            paddingTop: 0,
          },
        }}
      >
        {breakcrumbs}
      </Breadcrumbs>
    </div>
  );
};
