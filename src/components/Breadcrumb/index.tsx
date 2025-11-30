import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../common.css';
import { createStyles } from '@mantine/core';
import { formatCategoryLink, formatLink } from '../../Common';
import { appList } from '@solworks/application-registry';
import { ChevronRight, Home, Apps } from 'tabler-icons-react';

interface BreadcrumbItem {
  title: string;
  link: string;
  active?: boolean;
  isHome?: boolean;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: '24px',
  },

  container: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '6px 8px',
    background: 'var(--bg-surface)',
    borderRadius: 'var(--radius-full)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-xs)',
  },

  breadcrumbItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: 'var(--radius-full)',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-tertiary)',
    transition: 'all 0.2s var(--ease-out-quart)',
    whiteSpace: 'nowrap',
    
    '&:hover': {
      color: 'var(--text-primary)',
      backgroundColor: 'var(--bg-secondary)',
    }
  },

  breadcrumbItemActive: {
    color: 'var(--text-primary)',
    fontWeight: 600,
    backgroundColor: 'var(--bg-secondary)',
    
    '&:hover': {
      backgroundColor: 'var(--bg-tertiary)',
    }
  },

  homeItem: {
    padding: '6px 10px',
    color: 'var(--text-tertiary)',
    
    '&:hover': {
      color: 'var(--color-primary)',
      backgroundColor: 'var(--color-primary-subtle)',
    }
  },

  separator: {
    color: 'var(--border-strong)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2px',
  },

  icon: {
    width: '15px',
    height: '15px',
    strokeWidth: 2,
  },

  truncate: {
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    
    '@media (max-width: 480px)': {
      maxWidth: '100px',
    }
  }
}));

export const Breadcrumb: FC<{ appName?: string; categoryName?: string }> = ({
  appName,
  categoryName,
}) => {
  const { classes, cx } = useStyles();
  let items: BreadcrumbItem[] = [{ title: 'Home', link: '/', active: false, isHome: true }];

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
      active: !appName,
    });
  }

  if (appName) {
    items.push({ title: appName, link: `${formatLink(appName)}`, active: true });
  }

  return (
    <nav className={classes.wrapper} aria-label="Breadcrumb">
      <div className={classes.container}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className={classes.separator} aria-hidden="true">
                <ChevronRight size={12} />
              </span>
            )}
            <Link
              to={item.link}
              className={cx(
                classes.breadcrumbItem,
                { [classes.breadcrumbItemActive]: item.active },
                { [classes.homeItem]: item.isHome }
              )}
              aria-current={item.active ? 'page' : undefined}
            >
              {item.isHome ? (
                <Home className={classes.icon} />
              ) : (
                <span className={classes.truncate}>{item.title}</span>
              )}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
