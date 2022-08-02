import { ActionIcon, createStyles, Grid, Group, Navbar, ScrollArea, useMantineColorScheme } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon, MoonStars, Sun } from 'tabler-icons-react';
import '../../common.css';
import { LinksGroup } from '../LinksGroup';
import { MenuData } from './MenuData';

export type MenuLinkDetails = {
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
    borderTop: `1px solid #261d2b`,
    color: 'white',
    marginBottom: '100px',
    paddingTop: '25px',
  },

  socialButton: {
    transition: '150ms ease-in-out',
    minWidth: '60px',
    height: '48px',
    minHeight: '48px',
    border: 'solid 1px #24182f',
    backgroundColor: 'none',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '8px',
  },

  socialButtonText: {
    fontFamily: 'var(--font)',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#eae4e4',
    textDecoration: 'none',
  },

  actionItem: {
    backgroundColor: 'var(--solworks-background)',
    color: theme.colorScheme === 'dark' ? 'white' : 'white',
    '&:hover': {
      backgroundColor: 'var(--background)',
    },
  },
}));

export const Menu: FC<{ showNavbar?: boolean; hideMenu?: () => void }> = ({ showNavbar = true, hideMenu }) => {
  const { classes } = useStyles();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const links = MenuData.map((item) => <LinksGroup {...item} key={item.label} hideMenu={hideMenu} />);

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
          <ActionIcon onClick={() => toggleColorScheme()} size="lg" className={classes.actionItem}>
            {colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Grid>
          <Grid.Col xs={12} md={6} lg={6} xl={6}>
            <SocialButton text="Twitter" url="https://twitter.com/SolApps_" />
          </Grid.Col>
          <Grid.Col xs={12} md={6} lg={6} xl={6}>
            <SocialButton text="Discord" url="https://discord.com/invite/qfEGBPRyUt" />
          </Grid.Col>
          <Grid.Col xs={12} md={6} lg={6} xl={6}>
            <SocialButton text="Docs" url="https://help.solworks.dev" />
          </Grid.Col>
          <Grid.Col xs={12} md={6} lg={6} xl={6}>
            <SocialButton text="Contact" url="https://twitter.com/messages/compose?recipient_id=1547241706990567426" />
          </Grid.Col>
        </Grid>
      </Navbar.Section>
    </Navbar>
  );
};

const SocialButton = ({ text, url }: { text: string; url: string }) => {
  const { classes } = useStyles();
  return (
    <div className={'glow-on-hover bg colors-only ' + classes.socialButton}>
      <a className={classes.socialButtonText} target="_blank" rel="noreferrer" href={url}>
        {text}
      </a>
    </div>
  );
};
