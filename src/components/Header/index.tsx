import { forwardRef } from 'react';
import {
  Group,
  Avatar,
  Text,
  Select,
  Burger,
  MediaQuery,
  ActionIcon,
  Center,
  Space,
  Navbar,
  createStyles,
} from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import './Header.css';
import { BrandDiscord, BrandTwitter } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import { appList } from '@solworks/application-registry';
import NetworkStatusBar from '../NetworkStatusBar';
import { formatLink } from '../../Common';

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

const useStyles = createStyles((theme) => ({
  navbar: {
    display: 'flex',
    width: '100%',
    height: '100px',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    borderBottom:
      theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
  },
  menuIcon: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    cursor: 'pointer',
    margin: 'auto 0 auto 48px',
  },
  dropdown: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    border: 'solid 2px var(--grey-border)',
    borderRadius: '8px',
  },
  item: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? 'var(--solworks-background)' : '#ebf4ff',
    },
  },
  hovered: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
  },
  disabled: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
  selected: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
  },
  nothingFound: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
  },
  separator: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
  },
  separatorLabel: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
  },
  wrapper: {
    color: 'var(--grey)',
    '@media (min-width: 500px)': {
      width: '400px',
    },
    width: '100%',
  },
  defaultVariant: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    border:
      theme.colorScheme === 'dark' ? 'solid 2px var(--grey-border)' : 'solid 1px var(--lm-border)',
    borderRadius: '8px',
  },
  filledVariant: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    border: 'solid 2px var(--grey-border)',
    borderRadius: '8px',
  },
  unstyledVariant: {
    color: 'var(--grey)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    border:
      theme.colorScheme === 'dark' ? 'solid 2px var(--grey-border)' : 'solid 1px var(--lm-border)',
    borderRadius: '8px',
  },
  input: {
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
  },
  rightSection: {
    color: 'var(--grey)',
  },
}));

export const Header: FC<HeaderProps> = ({
  onBurgerClick = () => {},
  openMenu = false,
  tpsQuery,
  solQuery,
}) => {
  let navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <Navbar className={classes.navbar}>
      <NetworkStatusBar
        transactionsPerSecond={tpsQuery.data ? tpsQuery.data.data.networkInfo.tps.toFixed(0) : 0}
        solusdPrice={solQuery.data ? solQuery.data[0].price : 0}
        isLoading={tpsQuery.isLoading || solQuery.isLoading}
      />
      <div className="menu-wrapper">
        <MediaQuery largerThan="xl" styles={{ display: 'none' }}>
          <Burger size={24} opened={openMenu} onClick={onBurgerClick} className="menu-icon" />
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
                  const app = appList.apps.find((app) => app.app.value === e);
                  navigate(formatLink(app?.app.label!));
                }
              }}
              classNames={{
                dropdown: classes.dropdown,
                item: classes.item,
                hovered: classes.hovered,
                disabled: classes.disabled,
                selected: classes.selected,
                nothingFound: classes.nothingFound,
                separator: classes.separator,
                separatorLabel: classes.separatorLabel,
                wrapper: classes.wrapper,
                defaultVariant: classes.defaultVariant,
                filledVariant: classes.filledVariant,
                unstyledVariant: classes.unstyledVariant,
                input: classes.input,
                rightSection: classes.rightSection,
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
                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : '#f5f5f5',
                },
              })}
            >
              <BrandDiscord size={24} />
            </ActionIcon>
            <ActionIcon<'a'>
              component="a"
              href="https://twitter.com/SolApps_"
              target="_blank"
              rel="noreferrer"
              size="xl"
              sx={(theme) => ({
                backgroundColor: 'transparent',
                color: theme.colorScheme === 'dark' ? 'white' : 'black',
                marginLeft: '12px',
                '@media (max-width: 640px)': {
                  marginLeft: '2px',
                },
                '&:hover': {
                  backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : '#f5f5f5',
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
