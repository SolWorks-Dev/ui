import { ActionIcon, createStyles, Group, Navbar, ScrollArea, useMantineColorScheme } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BuildingSkyscraper, Filter, Firetruck, Icon, ListDetails, MoonStars, Sun, Track } from 'tabler-icons-react';
import '../../common.css';
import { LinksGroup } from '../LinksGroup';
import { appList } from '@solworks/application-registry';

type MenuLinkDetails = {
  label: string;
  icon: Icon;
  links?: {
    label: string;
    link: string;
    comingSoon: boolean;
    external: boolean;
  }[];
  link?: string;
  initiallyOpened: boolean;
};

const mockdata: MenuLinkDetails[] = [
  { label: 'Curated', icon: Filter, link: '/#curated', initiallyOpened: false },
  {
    label: 'Categories',
    icon: ListDetails,
    links: [...new Set(appList.apps.map((app) => app.app.categories[0]))]
      .sort()
      .map((category) => {
        return appList.categories.find((mCategory) => mCategory.value === category)!;
      })
      .map((category) => {
        return {
          label: category.heading_label,
          link: `/#${category.value}`,
          comingSoon: false,
          external: false,
        };
      }),
    initiallyOpened: true,
  },
  {
    label: 'Help',
    icon: Firetruck,
    links: [
      { label: 'Getting started', link: 'https://help.solworks.dev', comingSoon: false, external: true },
      {
        label: 'Listing: Apply',
        link: 'https://k722zc9ivtg.typeform.com/to/uN4Pklej',
        comingSoon: false,
        external: true,
      },
      {
        label: 'Listing: Update',
        link: 'https://k722zc9ivtg.typeform.com/to/BljLUU8I',
        comingSoon: false,
        external: true,
      },
      { label: 'Partnership', link: 'https://k722zc9ivtg.typeform.com/to/OHTjdlkb', comingSoon: false, external: true },
    ],
    initiallyOpened: false,
  },
  { label: 'Roadmap', icon: Track, link: '/roadmap', initiallyOpened: false },
  {
    label: 'SolWorks',
    icon: BuildingSkyscraper,
    links: [
      { label: 'SolApps', link: '/#', comingSoon: false, external: false },
      { label: 'SolToolkit', link: '/', comingSoon: true, external: false },
      { label: 'SolDisperse', link: '/', comingSoon: true, external: false },
      { label: 'Sujiko', link: '/', comingSoon: true, external: false },
      { label: 'Nite (Aptos)', link: '/', comingSoon: true, external: false },
    ],
    initiallyOpened: false,
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: 'var(--background)',
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginRight: -theme.spacing.xs,
    color: 'white',
  },

  links: {
    marginRight: 0,
    color: 'white',
    borderTop: `1px solid #261d2b`,
    paddingTop: '12px',
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
    color: 'white',
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${theme.colors.dark[4]}`,
    color: 'white',
  },
}));

export const Menu: FC<{ showNavbar?: boolean; hideMenu?: () => void }> = ({ showNavbar = true, hideMenu }) => {
  const { classes } = useStyles();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} hideMenu={hideMenu} />);

  return (
    <Navbar
      width={{
        xs: 250,
        sm: 250,
        md: 275,
        lg: 275,
        xl: 275,
      }}
      p="xs"
      className={classes.navbar}
      hidden={!showNavbar}
      hiddenBreakpoint="xl"
      sx={{
        borderLeft: 0,
        borderRight: '1px solid #261D2B',
      }}
      position={{
        left: 0,
        top: 90,
      }}
    >
      <Navbar.Section className={classes.header}>
        <Group className={classes.header} position="apart">
          <div
            style={{
              fontFamily: 'Roboto, sans-serif !important',
              fontSize: '22px',
              fontWeight: 500,
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 'normal',
              textAlign: 'left',
              color: '#fff',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={hideMenu}>
              SolApps
            </Link>
          </div>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor: 'var(--solworks-background)',
              color: theme.colorScheme === 'dark' ? 'white' : 'white',
              '&:hover': {
                backgroundColor: 'var(--background)',
              },
            })}
          >
            {colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea} style={{ marginBottom: '90px' }}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
};
