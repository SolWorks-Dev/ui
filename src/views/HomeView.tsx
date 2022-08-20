import { Badge, Grid, Group, LoadingOverlay } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { ActionCard } from '../components/ActionCard';
import { ApplicationCardLargeV2 } from '../components/ApplicationCardLargeV2';
import { ApplicationCardMini } from '../components/ApplicationCardMini';
import { Breadcrumb } from '../components/Breadcrumb';
import { Heading } from '../components/Heading';
import { appList } from '@solworks/application-registry';
import { categoryToColorHex, formatCategoryLink } from '../Common';
import { SecondaryButton } from '../components/SecondaryButton';

export const HomeView = () => {
  const [curatedRowApps, setCuratedRowApps] = useState<JSX.Element>();
  const [nftRowApps, setNftRowApps] = useState<JSX.Element>();
  const [sections, setSections] = useState<JSX.Element[]>([]);
  const numberOfCuratedApps = appList.apps.filter((app) => app.app.is_curated)!.length;
  const numberOfNftApps = appList.apps.filter((app) => app.app.categories[0] === 'nft').length;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: refactor from first category to any category
    const curatedApps = appList.apps.filter((app) => app.app.is_curated)!;
    const nftApps = appList.apps.filter((app) => app.app.categories[0] === 'nft');
    const otherApps = appList.apps
      .filter((app) => app.app.categories[0] !== 'nft')
      .filter((app) => !app.app.is_curated);
    const otherCategories = [...new Set(otherApps.map((app) => app.app.categories[0]))].sort();

    const appGroups: any[] = [];
    for (var x = 0; x < otherCategories.length; x++) {
      const otherCategory = otherCategories[x];
      const matchedCategory = appList.categories.find(
        (category) => category.value === otherCategory
      )!;
      const otherApps = appList.apps.filter((app) => app.app.categories[0] === otherCategory);
      const otherCategoryHeader = (
        <Grid gutter="xl" style={{ marginTop: '30px' }}>
          <Grid.Col xs={8} md={8} lg={10}>
            <Group spacing={'xl'}>
              <Heading text={matchedCategory.heading_label} />
              <Badge children={`${otherApps.length} app${otherApps.length > 1 ? 's' : ''}`} />
            </Group>
          </Grid.Col>
          <Grid.Col xs={4} md={4} lg={2}>
            <SecondaryButton
              text="See more"
              url={formatCategoryLink(matchedCategory.value)}
              additionalStyles={{ marginLeft: 'auto', marginRight: 0 }}
            />
          </Grid.Col>
        </Grid>
      );

      const otherAppsList: any[] = [];
      for (var y = 0; y < otherApps.length; y++) {
        const otherApp = otherApps[y];
        const otherCategoryApps =
          y % 3 !== 0 ? (
            <Grid.Col xs={6} md={3} lg={3} xl={3}>
              <ApplicationCardMini
                logoUrl={otherApp.urls.logo}
                appName={otherApp.app.label}
                tag={
                  appList.categories.find(
                    (category) => category.value === otherApp.app.categories[0]
                  )?.tag_label!
                }
                tagColorHex={categoryToColorHex(otherApp.app.categories[0])}
                appValue={otherApp.app.value}
              />
            </Grid.Col>
          ) : (
            <Grid.Col xs={12} md={6} lg={6}>
              <ApplicationCardLargeV2
                logoUrl={otherApp.urls.logo}
                appName={otherApp.app.label}
                description={otherApp.description.short}
                appValue={otherApp.app.value}
              />
            </Grid.Col>
          );
        otherAppsList.push(otherCategoryApps);
      }

      const fullGroups = (
        <section id={otherCategory}>
          {otherCategoryHeader}
          <Grid gutter="xl" style={{ marginTop: '20px' }}>
            {otherAppsList}
          </Grid>
        </section>
      );
      appGroups.push(fullGroups);
    }
    setSections(appGroups);

    const curatedAppCards = (
      <Grid gutter="xl" justify={'space-between'} style={{ marginTop: '20px' }}>
        {curatedApps.map((app) => (
          <Grid.Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <ApplicationCardMini
              logoUrl={app.urls.logo}
              appName={app.app.label}
              tag={
                appList.categories.find((category) => category.value === app.app.categories[0])
                  ?.tag_label!
              }
              tagColorHex={categoryToColorHex(app.app.categories[0])}
              appValue={app.app.value}
            />
          </Grid.Col>
        ))}
      </Grid>
    );
    setCuratedRowApps(curatedAppCards);

    const nftAppCards = (
      <Grid gutter="xl" justify={'space-between'} style={{ marginTop: '20px' }}>
        {nftApps.map((app) => (
          <Grid.Col xs={12} md={6} lg={6}>
            <ApplicationCardLargeV2
              logoUrl={app.urls.logo}
              appName={app.app.label}
              description={app.description.short}
              appValue={app.app.value}
            />
          </Grid.Col>
        ))}
      </Grid>
    );
    setNftRowApps(nftAppCards);

    setIsLoading(false);
  }, []);

  return (
    <div className="body-wrapper">
      <LoadingOverlay
        visible={isLoading}
        overlayOpacity={0.1}
        loaderProps={{ color: 'var(--primary)' }}
        transitionDuration={500}
        exitTransitionDuration={500}
      />
      <Breadcrumb />
      <Grid gutter="xl" style={{ marginTop: '12px' }}>
        <Grid.Col xs={12} md={12} lg={12}>
          <ActionCard
            title="First time here? gm 👋"
            text={
              <>
                SolApps is a directory of the best Solana protocols and communities. No more
                searching for verified protocol links.
                <br />
                <br />
                Read our getting started guide.
              </>
            }
            actionLink="https://help.solworks.dev/"
            actionButtonText="Learn more"
          />
        </Grid.Col>
      </Grid>

      <section id="curated">
        <Grid gutter="xl" style={{ marginTop: '30px' }}>
          <Grid.Col xs={8} md={8} lg={10}>
            <Group spacing={'xl'}>
              <Heading text={'Curated'} />
              <Badge children={`${numberOfCuratedApps} apps`} />
            </Group>
          </Grid.Col>
          {/* <Grid.Col xs={4} md={4} lg={2}>
      <SecondaryButton
        text="See more"
        onClick={() => {
          console.log('onClick');
        }}
        additionalStyles={{ marginLeft: 'auto', marginRight: 0 }}
      />
    </Grid.Col> */}
        </Grid>
        {curatedRowApps}
      </section>

      <section id="nft">
        <Grid gutter="xl" style={{ marginTop: '30px' }}>
          <Grid.Col xs={8} md={8} lg={10}>
            <Group spacing={'xl'}>
              <Heading text="NFT Communities" />
              <Badge children={`${numberOfNftApps} apps`} />
            </Group>
          </Grid.Col>
          <Grid.Col xs={4} md={4} lg={2}>
            <SecondaryButton
              text="See more"
              url={formatCategoryLink(appList.categories.find((x) => x.value === 'nft')!.value)}
              additionalStyles={{ marginLeft: 'auto', marginRight: 0 }}
            />
          </Grid.Col>
        </Grid>
        {nftRowApps}
      </section>

      {sections}
    </div>
  );
};
