import { forwardRef } from 'react';
import {
  Group,
  Avatar,
  Text,
  Select,
  Burger,
  Kbd,
  MediaQuery,
  ActionIcon,
  Center,
  Space,
} from '@mantine/core';
import React, { FC } from 'react';
import '../../common.css';
import { ExampleAppData } from '../ExampleData';
import './Header.css';
import { BrandDiscord, BrandTwitter } from 'tabler-icons-react';

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
}

export const Header: FC<HeaderProps> = ({ onBurgerClick = () => {}, openMenu = false }) => {
  return (
    <div className="menu-wrapper">
      <MediaQuery largerThan="xl" styles={{ display: 'none' }}>
        <Burger size={24} color={'white'} opened={openMenu} onClick={onBurgerClick} className="menu-icon" />
      </MediaQuery>
      <MediaQuery smallerThan="xl" styles={{ display: 'none' }}>
        <div className='menu-icon'></div>
      </MediaQuery>
      <Space w="xs" />
      <div className="menu-search-wrapper">
        <div className="menu-search">
          <Select
            placeholder="Search"
            searchable
            clearable
            maxDropdownHeight={420}
            nothingFound="No apps found 🤔"
            data={ExampleAppData}
            size="lg"
            radius="md"
            transition="pop-top-left"
            transitionDuration={80}
            transitionTimingFunction="ease"
            itemComponent={SelectItem}
            className="search"
            rightSection={
              <>
              <Kbd
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
                </Kbd>
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
                }
              },
              hovered: { color: 'white', backgroundColor: 'var(--background)' },
              disabled: { color: 'var(--grey)', backgroundColor: 'var(--background)' },
              selected: { color: 'white', backgroundColor: 'var(--background)'},
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
      <Center inline sx={(theme) => ({
        marginRight: '48px',
        '@media (max-width: 640px)': {
          marginRight: '24px',
        },
      })}>
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
    </div>
  );
};
