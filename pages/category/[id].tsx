import { Grid, Group } from '@mantine/core';
import { appList, Category } from '@solworks/application-registry';
import React, { useEffect, useState } from 'react';
import { Badge } from '@mantine/core';
import { ApplicationCardLargeV2 } from '../../src/components/ApplicationCardLargeV2';
import { Breadcrumb } from '../../src/components/Breadcrumb';
import { Heading } from '../../src/components/Heading';
import { useRouter } from 'next/router'

export const CategoryView = () => {
  let { id } = useRouter().query;
  const [cards, setCards] = useState<JSX.Element[]>([]);

  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    const category = appList.categories.find((category) => category.heading_label.toLocaleLowerCase().replace(' ', '_').replace(/\W/g, '') === id);
    if (category) {
      setCategory(category);
    }
  }, [id]);

  useEffect(() => {
    if (category) {
      const apps = appList.apps.filter((app) => app.app.categories[0] === category.value);
      if (apps) {
        setCards(
          apps.map((app) => (
            <Grid.Col xs={12} md={6} lg={6}>
            <ApplicationCardLargeV2
              logoUrl={app.urls.logo}
              appName={app.app.label}
              description={app.description.short}
              // tag={category.tag_label}
              // tagColorHex={categoryToColorHex(category.value)}
              appValue={app.app.value}
            />
            </Grid.Col>
          ))
        );
      }
    }
  }, [category]);

  return (
    <div className="body-wrapper">
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

export default CategoryView;