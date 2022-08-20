import { createStyles, Grid, Group } from '@mantine/core';
import { appList, Category } from '@solworks/application-registry';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from '@mantine/core';
import { ApplicationCardLargeV2 } from '../components/ApplicationCardLargeV2';
import { Breadcrumb } from '../components/Breadcrumb';
import { Heading } from '../components/Heading';
import { Helmet } from 'react-helmet';
import { formatCategoryLink } from '../Common';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingBottom: '120px',
    '@media (max-width: 755px)': {
      paddingTop: '20px',
    },
    paddingTop: '0px',
    '@media (max-width: 320px)': {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    '@media (max-width: 640px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    paddingLeft: '48px',
    paddingRight: '48px',
    color: 'white',
  },
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
          apps.map((app) => (
            <Grid.Col xs={12} md={6} lg={6}>
              <ApplicationCardLargeV2
                logoUrl={app.urls.logo}
                appName={app.app.label}
                description={app.description.short}
                appValue={app.app.value}
              />
            </Grid.Col>
          ))
        );
      }
    }
  }, [category]);

  return (
    <div className={classes.wrapper}>
      <Helmet>
        <title>{`${category?.heading_label} | SolApps`}</title>
        <meta
          name="description"
          content={`View all of the best ${category?.heading_label} projects on SolApps.`}
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content={`${category?.heading_label} | SolApps`}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={`View all of the best ${category?.heading_label} projects on SolApps.`}
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content={`https://solapps.dev${formatCategoryLink(category?.heading_label || '')}`}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://solapps.dev/og-image.png"
          data-react-helmet="true"
        />
      </Helmet>
      <Breadcrumb appName={category ? category.heading_label : 'Not found'} />
      <Grid gutter="xl" style={{ marginTop: '20px' }}>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Group spacing={'xl'}>
              <Heading text={category ? category.heading_label : 'Not found'} />
              <Badge children={`${cards.length} apps`} />
            </Group>
          </div>
        </Grid.Col>
      </Grid>
      <Grid gutter="xl" justify={'space-between'}>
        {cards}
      </Grid>
    </div>
  );
};
