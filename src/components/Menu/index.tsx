import { ActionIcon, Aside, createStyles, Group, Navbar, ScrollArea, useMantineColorScheme } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Adjustments, Lock, MoonStars, Notes, PresentationAnalytics, Sun } from 'tabler-icons-react';
import '../../common.css';
import { LinksGroup } from '../LinksGroup';

const mockdata = [
  {
    label: 'Categories',
    icon: Notes,
    links: [
      { label: 'AMM', link: '/' },
      { label: 'Lending', link: '/' },
      { label: 'NFT', link: '/' },
      { label: 'DAO', link: '/' },
      { label: 'Infrastructure', link: '/' },
      { label: 'Tooling', link: '/' },
    ],
  },
  { label: 'Curated', icon: PresentationAnalytics },
  {
    label: 'Help',
    icon: Lock,
    links: [
      { label: 'Getting started', link: '/' },
      { label: 'Listing: Apply', link: '/' },
      { label: 'Listing: Update', link: '/' },
      { label: 'Partnership', link: '/' },
    ],
  },
  { label: 'Roadmap', icon: Adjustments },
  {
    label: 'SolWorks',
    icon: Adjustments,
    links: [
      { label: 'SolApps', link: '/' },
      { label: 'SolToolkit', link: '/' },
      { label: 'SolDisperse', link: '/' },
      { label: 'Sujiko (Solana)', link: '/' },
      { label: 'Nite (Aptos)', link: '/' },
      { label: 'Taco (Sui)', link: '/' },
    ],
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

export const Menu: FC<{ showNavbar?: boolean }> = ({ showNavbar = true }) => {
  const { classes } = useStyles();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

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
      sx={{ borderLeft: 0, borderRight: '1px solid #261D2B' }}
    >
      <Aside.Section className={classes.header}>
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
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
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
      </Aside.Section>

      <Aside.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Aside.Section>
    </Navbar>
  );
};
