import React, { FC, useEffect, useState } from 'react';
import { Grid } from '@mantine/core';
import { Heading } from '../Heading';
import { ApplicationCardMini } from '../ApplicationCardMini';
import { LinkCard } from '../LinkCard';
import { ApplicationDetailsCard } from '../ApplicationDetailsCard';
import { SocialsCard } from '../SocialsCard';
import { Breadcrumb } from '../Breadcrumb';
import { useParams } from 'react-router-dom';
import { categoryToColorHex, encodeString, formatLink, shuffle } from '../../Common';
import { App, appList } from '@solworks/application-registry';
import { Helmet } from 'react-helmet';

export interface ApplicationPageProps {}

export const ApplicationPage: FC<ApplicationPageProps> = () => {
  let { id } = useParams();
  const [data, setData] = useState<App>();
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [relatedCards, setRelatedCards] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const data = appList.apps.find((app) => encodeString(app.app.label) === id);
    if (data) {
      setData(data as App);

      // parse url cards
      const tempCards: any[] = [];
      tempCards.push(
        <Grid.Col xs={12} md={12} lg={6}>
          <LinkCard title="Website" url={data.urls.website} />
        </Grid.Col>
      );

      // validate if application url is different to website
      tempCards.push(
        <Grid.Col xs={12} md={12} lg={6}>
          <LinkCard title="Application" url={data.urls.application} />
        </Grid.Col>
      );

      // display other urls
      if (data.urls.other) {
        const otherUrls = data.urls.other.map((url) => {
          return (
            <Grid.Col xs={12} md={12} lg={6}>
              <LinkCard title={url.name} url={url.url} />
            </Grid.Col>
          );
        });
        tempCards.push(...otherUrls);
      }
      setCards(tempCards);

      let relatedApps = appList.apps
        .filter((app) => app.app.categories.includes(data.app.categories[0]))
        .filter((x) => x.app.value !== data.app.value);
      relatedApps = shuffle(relatedApps).slice(0, 6);

      setRelatedCards(
        relatedApps.map((app) => {
          return (
            <Grid.Col xs={6} md={6} lg={6}>
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
          );
        })
      );
    }
  }, [id]);

  // get related app categories

  return (
    <div className="body-wrapper">
      <Helmet>
        <title>{`${data?.app.label} | SolApps`}</title>
        <meta name="description" content={data?.description.short} data-react-helmet="true"/>
        <meta property="og:title" content={`${data?.app.label} | SolApps`} data-react-helmet="true"/>
        <meta
          property="og:description"
          content={data?.description.short}
          data-react-helmet="true"
        />
        <meta property="og:url" content={`https://solapps.dev${formatLink(data?.app.label || '')}`} data-react-helmet="true"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://solapps.dev/og-image.png" data-react-helmet="true"/>
      </Helmet>
      <Breadcrumb
        appName={data ? data.app.label : undefined}
        categoryName={
          data
            ? appList.categories.find((category) => category.value === data.app.categories[0])
                ?.heading_label
            : undefined
        }
      />
      <Grid gutter="xl" style={{ marginTop: '20px' }}>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Application" />
          </div>
          <ApplicationDetailsCard
            applicationName={data ? data.app.label : ''}
            logoUrl={data ? data.urls.logo : ''}
            description={data ? data.description.long : ''}
            tag={data ? data.app.categories[0] : ''}
            tagColorHex={categoryToColorHex(data ? data.app.categories[0] : '')}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6} lg={6}>
          <div style={{ marginBottom: '30px' }}>
            <Heading text="Socials" />
          </div>
          <SocialsCard
            twitter={
              data
                ? data.socials.twitter.map((handle) => {
                    return {
                      url: `https://twitter.com/${handle}`,
                      text: `@${handle}`,
                    };
                  })
                : []
            }
            discord={
              data
                ? data.socials.discord.map((invite) => {
                    return {
                      url: `https://discord.gg/${invite}`,
                      text: `discord.gg/${invite}`,
                    };
                  })
                : []
            }
            medium={
              data
                ? data.socials.medium.map((blogLink) => {
                    return {
                      url: blogLink,
                      text: blogLink
                        .replace('https://', '')
                        .replace('http://', '')
                        .replace(/\/+$/, ''),
                    };
                  })
                : []
            }
            telegram={
              data
                ? data.socials.telegram.map((groupInvite) => {
                    return {
                      url: `https://t.me/${groupInvite}`,
                      text: `t.me/${groupInvite}`,
                    };
                  })
                : []
            }
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
          <Grid gutter="xl">{relatedCards}</Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};
