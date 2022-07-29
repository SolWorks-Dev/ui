import { Grid } from '@mantine/core';
import React from 'react';
import { ActionCard } from '../components/ActionCard';
import { ApplicationCardLargeV2 } from '../components/ApplicationCardLargeV2';
import { ApplicationCardMini } from '../components/ApplicationCardMini';
import { Breadcrumb } from '../components/Breadcrumb';
import { Heading } from '../components/Heading';
import { appList } from '@solworks/application-registry';

// TODO: refactor from first category to any category
const curatedApps = appList.apps.filter((app) => app.app.is_curated)!;
const nftApps = appList.apps.filter((app) => app.app.categories[0] === 'nft');
const otherApps = appList.apps.filter((app) => app.app.categories[0] !== 'nft').filter((app) => !app.app.is_curated);
const otherCategories = [...new Set(otherApps.map((app) => app.app.categories[0]))].sort();

const appGroups: any[] = [];
for (var x = 0; x < otherCategories.length; x++) {
  const otherCategory = otherCategories[x];
  const matchedCategory = appList.categories.find((category) => category.value === otherCategory)!;
  const otherApps = appList.apps.filter((app) => app.app.categories[0] === otherCategory);
  const otherCategoryHeader = (
    <Grid gutter="xl" style={{ marginTop: '30px' }}>
      <Grid.Col xs={8} md={8} lg={10}>
        <Heading text={matchedCategory.heading_label} />
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
  );

  const otherAppsList = [];
  for (var y = 0; y < otherApps.length; y++) {
    const otherApp = otherApps[y];
    const otherCategoryApps =
      y % 3 !== 0 ? (
        <Grid.Col xs={6} md={3} lg={3} xl={3}>
          <ApplicationCardMini
            logoUrl={otherApp.urls.logo}
            appName={otherApp.app.label}
            tag={appList.categories.find((category) => category.value === otherApp.app.categories[0])?.tag_label!}
            tagColor={'purple'}
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

export const HomeView = () => {
  const curatedRowHeader = (
    <Grid gutter="xl" style={{ marginTop: '30px' }}>
      <Grid.Col xs={8} md={8} lg={10}>
        <Heading text={'Curated'} />
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
  );

  const curatedRowApps = (
    <Grid gutter="xl" justify={'space-between'} style={{ marginTop: '20px' }}>
      {curatedApps.map((app) => (
        <Grid.Col xs={6} md={3} lg={3}>
          <ApplicationCardMini
            logoUrl={app.urls.logo}
            appName={app.app.label}
            tag={appList.categories.find((category) => category.value === app.app.categories[0])?.tag_label!}
            tagColor="purple"
            appValue={app.app.value}
          />
        </Grid.Col>
      ))}
    </Grid>
  );

  const nftRowHeader = (
    <Grid gutter="xl" style={{ marginTop: '30px' }}>
      <Grid.Col xs={8} md={8} lg={10}>
        <Heading text="NFT Communities" />
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
  );

  const nftRowApps = (
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

  return (
    <div className="body-wrapper">
      <Breadcrumb />
      <Grid gutter="xl" style={{ marginTop: '12px' }}>
        <Grid.Col xs={12} md={6} lg={6}>
          <ActionCard
            title="First time here? gm 👋"
            text={
              <>
                SolApps is a directory of the best Solana protocols and communities.
                <br />
                <br />
                No more searching for verified protocol links. Read our getting started guide.
              </>
            }
            actionLink="https://help.solworks.dev/"
            actionButtonText="Learn more"
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <ActionCard
            title="Are we missing a protocol? 🕵️‍♀️"
            text={
              <>
                Contact us if you want to see a protocol or community on SolApps ✉️
                <br />
                <br />
                Submissions can take up to 1 week to review a protocol.
              </>
            }
            actionLink="https://k722zc9ivtg.typeform.com/to/uN4Pklej"
            actionButtonText="Apply now"
          />
        </Grid.Col>
      </Grid>

      <section id="curated">
        {curatedRowHeader}
        {curatedRowApps}
      </section>

      <section id="nft">
        {nftRowHeader}
        {nftRowApps}
      </section>

      {appGroups}
    </div>
  );
};
