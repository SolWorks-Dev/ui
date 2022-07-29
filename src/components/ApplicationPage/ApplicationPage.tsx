import React, { FC } from 'react';
import { Grid } from '@mantine/core';
import { Heading } from '../Heading';
import { ApplicationCardMini } from '../ApplicationCardMini';
import { LinkCard } from '../LinkCard';
import { ApplicationDetailsCard } from '../ApplicationDetailsCard';
import { SocialsCard } from '../SocialsCard';
import { Breadcrumb } from '../Breadcrumb';
import { useParams } from 'react-router-dom';
import { categoryToColorHex, shuffle } from '../../Common';
import { appList } from '@solworks/application-registry';

export interface ApplicationPageProps {}

export const ApplicationPage: FC<ApplicationPageProps> = () => {
  // parse params
  let params = useParams();
  const data = appList.apps.find((app) => app.app.value === params.id);
  if (!data) {
    return null;
  }

  // parse url cards
  const cards: JSX.Element[] = [];
  cards.push(
    <Grid.Col xs={12} md={12} lg={6}>
      <LinkCard title="Website" url={data.urls.website} />
    </Grid.Col>
  );
  // validate if application url is different to website
  if (data.urls.website !== data.urls.application) {
    cards.push(
      <Grid.Col xs={12} md={12} lg={6}>
        <LinkCard title="Application" url={data.urls.application} />
      </Grid.Col>
    );
  }
  // display other urls
  if (data.urls.other) {
    const otherUrls = data.urls.other.map((url) => {
      return (
        <Grid.Col xs={12} md={12} lg={6}>
          <LinkCard title={url.name} url={url.url} />
        </Grid.Col>
      );
    });
    cards.push(...otherUrls);
  }

  // get related app categories
  let relatedApps = appList.apps
    .filter((app) => app.app.categories.includes(data.app.categories[0]))
    .filter((x) => x.app.value !== data.app.value);
  relatedApps = shuffle(relatedApps).slice(0, 6);

  const relatedAppCards = relatedApps.map((app) => {
    return (
      <Grid.Col xs={6} md={6} lg={6}>
        <ApplicationCardMini
          logoUrl={app.urls.logo}
          appName={app.app.label}
          tag={appList.categories.find((category) => category.value === app.app.categories[0])?.tag_label!}
          tagColorHex={categoryToColorHex(app.app.categories[0])}
          appValue={app.app.value}
        />
      </Grid.Col>
    );
  });
  return (
    <div className="body-wrapper">
      <Breadcrumb appName={data.app.label || undefined} />
      <Grid gutter="xl" style={{ marginTop: '20px' }}>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Application" />
          </div>
          <ApplicationDetailsCard
            applicationName={data.app.label || ''}
            logoUrl={data.urls.logo || ''}
            description={data.description.long || ''}
            tag={data.app.categories[0] || ''}
            tagColorHex={categoryToColorHex(data.app.categories[0])}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Socials" />
          </div>
          <SocialsCard
            twitter={data.socials.twitter.map((handle) => {
              return {
                url: `https://twitter.com/${handle}`,
                text: `@${handle}`,
              };
            })}
            discord={data.socials.discord.map((invite) => {
              return {
                url: `https://discord.gg/${invite}`,
                text: `discord.gg/${invite}`,
              };
            })}
            medium={data.socials.medium.map((blogLink) => {
              return {
                url: blogLink,
                text: blogLink.replace('https://', '').replace('http://', '').replace(/\/+$/, ''),
              };
            })}
            telegram={data.socials.telegram.map((groupInvite) => {
              return {
                url: `https://t.me/${groupInvite}`,
                text: `t.me/${groupInvite}`,
              };
            })}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Links" />
          </div>
          <Grid gutter="xl">{cards}</Grid>
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Related" />
          </div>
          <Grid gutter="xl">{relatedAppCards}</Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};
