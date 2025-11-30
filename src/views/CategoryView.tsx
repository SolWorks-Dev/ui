import { createStyles, Grid, Group, keyframes } from '@mantine/core';
import { appList, Category } from '@solworks/application-registry';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Title } from '@mantine/core';
import { ApplicationCardLargeV2 } from '../components/ApplicationCardLargeV2';
import { Breadcrumb } from '../components/Breadcrumb';
import { Helmet } from 'react-helmet';

const fadeIn = keyframes({
  'from': { opacity: 0, transform: 'translateY(16px)' },
  'to': { opacity: 1, transform: 'translateY(0)' },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    animation: `${fadeIn} 0.5s var(--ease-out-quart) forwards`,
  },
  
  headerWrapper: {
    marginBottom: '40px',
    marginTop: '20px',
  },
  
  titleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  
  decorator: {
    width: '5px',
    height: '40px',
    borderRadius: 'var(--radius-full)',
    background: 'var(--gradient-primary)',
  },
  
  categoryTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '40px',
    color: 'var(--text-primary)',
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    
    '@media (max-width: 768px)': {
      fontSize: '32px',
    }
  },
  
  badge: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-secondary)',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    padding: '10px 16px',
    borderRadius: 'var(--radius-full)',
    border: '1px solid var(--border-subtle)',
  },
  
  gridContainer: {
    marginTop: '32px',
  },
  
  gridItem: {
    animation: `${fadeIn} 0.5s var(--ease-out-quart) forwards`,
    animationFillMode: 'both',
  },

  emptyState: {
    textAlign: 'center',
    padding: '80px 24px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
  }
}));

export const CategoryView = () => {
  let { id } = useParams();
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [category, setCategory] = useState<Category>();
  const { classes } = useStyles();

  useEffect(() => {
    if (id === 'curated') {
      setCategory({
        value: 'curated',
        tag_label: 'Curated',
        heading_label: 'Curated',
      });
    } else {
      const category = appList.categories.find((category) => category.value === id);
      if (category) {
        setCategory(category);
      }
    }
  }, [id]);

  useEffect(() => {
    if (category) {
      const apps =
        category.value === 'curated'
          ? appList.apps.filter((app) => app.app.is_curated)
          : appList.apps.filter((app) => app.app.categories[0] === category.value);

      if (apps) {
        setCards(
          apps.map((app, index) => (
            <Grid.Col 
              xs={6} 
              md={4} 
              lg={3} 
              key={app.app.value}
              className={classes.gridItem}
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <ApplicationCardLargeV2
                logoUrl={app.urls.logo}
                appName={app.app.label}
                description={app.description.short}
                appValue={app.app.value}
                category={category.tag_label}
                height={280}
              />
            </Grid.Col>
          ))
        );
      }
    }
  }, [category, classes.gridItem]);

  return (
    <div className={classes.wrapper}>
      <Helmet>
        <title>{`${category?.heading_label || ''} | SolApps`}</title>
      </Helmet>

      <Breadcrumb categoryName={category ? category.heading_label : ''} />

      <div className={classes.headerWrapper}>
        <div className={classes.titleGroup}>
          <div className={classes.decorator} />
          <Title className={classes.categoryTitle}>
            {category ? category.heading_label : 'Not found'}
          </Title>
          <Badge className={classes.badge}>{cards.length} apps</Badge>
        </div>
      </div>

      <div className={classes.gridContainer}>
        <Grid gutter="xl">
          {cards.length > 0 ? cards : (
            <Grid.Col span={12}>
              <div className={classes.emptyState}>
                No apps found in this category yet.
              </div>
            </Grid.Col>
          )}
        </Grid>
      </div>
    </div>
  );
};
