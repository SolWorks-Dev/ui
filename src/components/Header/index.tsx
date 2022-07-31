import { forwardRef } from 'react';
import { Group, Avatar, Text, Select, Burger, MediaQuery, ActionIcon, Center, Space, Navbar } from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import './Header.css';
import { BrandDiscord, BrandTwitter } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import { appList } from '@solworks/application-registry';
import NetworkStatusBar from '../NetworkStatusBar';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  logoUrl: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ logoUrl, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={logoUrl} />
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export interface HeaderProps {
  onBurgerClick: () => void;
  openMenu: boolean;
  tpsQuery: any;
  solQuery: any;
}

export const Header: FC<HeaderProps> = ({ onBurgerClick = () => {}, openMenu = false, tpsQuery, solQuery }) => {
  let navigate = useNavigate();

  return (
    <Navbar style={{
      display: 'flex',
      width: '100%',
      height: '100px'
    }}>
      <NetworkStatusBar
        transactionsPerSecond={tpsQuery.data ? tpsQuery.data.data.networkInfo.tps.toFixed(0) : 0}
        solusdPrice={solQuery.data ? solQuery.data[0].price : 0}
        isLoading={tpsQuery.isLoading || solQuery.isLoading}
      />
      <div className="menu-wrapper">
        <MediaQuery largerThan="xl" styles={{ display: 'none' }}>
          <Burger size={24} color={'white'} opened={openMenu} onClick={onBurgerClick} className="menu-icon" />
        </MediaQuery>
        <MediaQuery smallerThan="xl" styles={{ display: 'none' }}>
          <div className="menu-icon"></div>
        </MediaQuery>
        <Space w="xs" />
        <div className="menu-search-wrapper">
          <div className="menu-search">
            <Select
              placeholder="Search"
              searchable
              clearable
              maxDropdownHeight={360}
              nothingFound="No apps found 🤔"
              data={appList.apps.map((app) => ({
                value: app.app.value,
                label: app.app.label,
                group: app.app.categories[0].toUpperCase(),
                logoUrl: app.urls.logo,
                description: app.description.short,
                isCurated: app.app.is_curated,
              }))}
              size="md"
              radius="md"
              transition="pop-top-left"
              transitionDuration={80}
              transitionTimingFunction="ease"
              itemComponent={SelectItem}
              className="search"
              onChange={(e: any) => {
                if (e) {
                  navigate(`/apps/${e}`);
                }
              }}
              rightSection={
                <>
                  {/* <Kbd
                  sx={{
                    backgroundColor: '#373a3f',
                    border: '1px solid #373a3f',
                    color: '#c0c2c5',
                  }}
                >
                  ⌘
                </Kbd>
                &nbsp;+&nbsp;
                <Kbd
                  sx={{
                    backgroundColor: '#373a3f',
                    border: '1px solid #373a3f',
                    color: '#c0c2c5',
                  }}
                >
                  K
                </Kbd> */}
                </>
              }
              rightSectionWidth={80}
              styles={{
                dropdown: {
                  color: 'var(--grey)',
                  backgroundColor: 'var(--background)',
                  border: 'solid 2px var(--grey-border)',
                  borderRadius: '8px',
                },
                item: {
                  color: 'var(--grey)',
                  backgroundColor: 'var(--background)',
                  '&:hover': {
                    backgroundColor: 'var(--solworks-background)',
                  },
                },
                hovered: { color: 'white', backgroundColor: 'var(--background)' },
                disabled: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
                selected: { color: 'white', backgroundColor: 'var(--background)' },
                nothingFound: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
                separator: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
                separatorLabel: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
                wrapper: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
                defaultVariant: {
                  color: 'var(--grey)',
                  backgroundColor: 'var(--background)',
                  border: 'solid 2px var(--grey-border)',
                  borderRadius: '8px',
                },
                filledVariant: {
                  color: 'var(--grey)',
                  backgroundColor: 'var(--background)',
                  border: 'solid 2px var(--grey-border)',
                  borderRadius: '8px',
                },
                unstyledVariant: {
                  color: 'var(--grey)',
                  backgroundColor: 'var(--background)',
                  border: 'solid 2px var(--grey-border)',
                  borderRadius: '8px',
                },
                input: { color: 'white' },
                rightSection: { color: 'var(--grey)' },
              }}
            />
          </div>
        </div>
        <Space w="xs" />
        <MediaQuery smallerThan="xl" styles={{ display: 'none' }}>
          <Center
            inline
            sx={(theme) => ({
              marginRight: '48px',
              '@media (max-width: 640px)': {
                marginRight: '24px',
              },
            })}
          >
            <ActionIcon<'a'>
              component="a"
              href="https://discord.com/invite/qfEGBPRyUt"
              target="_blank"
              rel="noreferrer"
              size="xl"
              sx={(theme) => ({
                backgroundColor: 'transparent',
                color: theme.colorScheme === 'dark' ? 'white' : 'grey',
                '&:hover': {
                  backgroundColor: 'var(--solworks-background)',
                },
              })}
            >
              <BrandDiscord size={24} />
            </ActionIcon>
            <ActionIcon<'a'>
              component="a"
              href="https://twitter.com/SolWorks_"
              target="_blank"
              rel="noreferrer"
              size="xl"
              sx={(theme) => ({
                backgroundColor: 'transparent',
                color: theme.colorScheme === 'dark' ? 'white' : 'grey',
                marginLeft: '12px',
                '@media (max-width: 640px)': {
                  marginLeft: '2px',
                },
                '&:hover': {
                  backgroundColor: 'var(--solworks-background)',
                },
              })}
            >
              <BrandTwitter size={24} />
            </ActionIcon>
          </Center>
        </MediaQuery>
      </div>
    </Navbar>
  );
};
