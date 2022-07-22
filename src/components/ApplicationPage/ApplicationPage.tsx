import React from 'react';
import { Grid } from '@mantine/core';
import { Heading } from '../Heading';
import { ApplicationCardMini } from '../ApplicationCardMini';
import { LinkCard } from '../LinkCard';
import { ApplicationDetailsCard } from '../ApplicationDetailsCard';
import { SocialsCard } from '../SocialsCard';
import { Breadcrumb } from '../Breadcrumb';
import { useParams } from 'react-router-dom';
import { ExampleAppData } from '../ExampleData';
import { categoryToColor } from '../../Common';

export interface ApplicationPageProps {}

export const ApplicationPage = ({}: ApplicationPageProps) => {
  let params = useParams();

  const data = ExampleAppData.find(
    (app) => app.label.toLocaleLowerCase().replace(' ', '_').replace(/\W/g, '') === params.id
  );

  return (
    <div className="body-wrapper">
      <Breadcrumb appName={data?.label || undefined} />
      <Grid gutter="xl" style={{ marginTop: '2px' }}>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Application" />
          </div>
          <ApplicationDetailsCard
            applicationName={data?.label || ''}
            logoUrl={data?.logoUrl || ''}
            description={data?.description || ''}
            tag={data?.group || ''}
            tagColor={categoryToColor(data?.group || '')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Links" />
          </div>
          <Grid gutter="xl">
            <Grid.Col xs={12} md={12} lg={6}>
              <LinkCard title="Website" url="https://raydium.io" />
            </Grid.Col>
            <Grid.Col xs={12} md={12} lg={6}>
              <LinkCard title="Application" url="https://raydium.io/swap" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Socials" />
          </div>
          <SocialsCard
            twitter={[
              {
                text: '@Raydium',
                url: 'https://twitter.com/raydium',
              },
              {
                text: '@RaydiumIo',
                url: 'https://twitter.com/raydiumio',
              },
            ]}
            discord={[
              {
                text: 'discord.gg/areallylonglink',
                url: 'https://discord.gg/areallylonglink',
              },
            ]}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Related" />
          </div>
          <Grid gutter="xl">
            <Grid.Col xs={6} md={6} lg={6}>
              <ApplicationCardMini
                logoUrl="https://metal.equinix.com/media/pages/images/0ff8033cf9437c213ee13937b1c4c455/79hX-genesysgo.svg"
                appName="GenesysGo"
                tag="Infrastructure"
                tagColor="orange"
              />
            </Grid.Col>
            <Grid.Col xs={6} md={6} lg={6}>
              <ApplicationCardMini
                logoUrl="https://solend.fi/assets/tokens/slnd.png"
                appName="Solend"
                tag="Lending"
                tagColor="light-blue"
              />
            </Grid.Col>
            <Grid.Col xs={6} md={6} lg={6}>
              <ApplicationCardMini
                logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
                appName="Orca"
                tag="AMM"
                tagColor="purple"
              />
            </Grid.Col>
            <Grid.Col xs={6} md={6} lg={6}>
              <ApplicationCardMini
                logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
                appName="Raydium"
                tag="AMM"
                tagColor="purple"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};
