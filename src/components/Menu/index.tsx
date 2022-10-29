import {
  ActionIcon,
  createStyles,
  Grid,
  Group,
  Navbar,
  ScrollArea,
  useMantineColorScheme,
} from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoonStars, Sun } from 'tabler-icons-react';
import '../../common.css';
import { LinksGroup } from '../LinksGroup';
import { MenuData } from './MenuData';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    paddingBottom: 0,
    borderLeft: 0,
    borderRight:
      theme.colorScheme === 'dark' ? '1px solid #261d2b' : '1px solid rgb(153, 153, 153)',
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: '12px',
    marginRight: -theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
  },

  links: {
    marginRight: 0,
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    borderTop: theme.colorScheme === 'dark' ? '1px solid #261d2b' : '1px solid rgb(153, 153, 153)',
    paddingTop: '12px',
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
  },

  footer: {
    borderTop: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    marginBottom: '100px',
    paddingTop: '25px',
  },

  socialButton: {
    transition: '150ms ease-in-out',
    minWidth: '60px',
    height: '48px',
    minHeight: '48px',
    border: theme.colorScheme === 'dark' ? '1px solid #261d2b' : '1px solid rgb(153, 153, 153)',
    backgroundColor: 'none',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '8px',
    background: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    '&:after': {
      background:
        theme.colorScheme === 'dark' ? 'var(--background) !important' : 'white !important',
    },
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
    color: theme.colorScheme === 'dark' ? '#eae4e4' : '#002B67',
    textDecoration: 'none',
  },

  actionItem: {
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--solworks-background)' : 'none',
    color: theme.colorScheme === 'dark' ? 'white' : 'black',
    border: theme.colorScheme === 'dark' ? 'solid 1px #261d2b' : '1px solid rgb(153, 153, 153)',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : '#f5f5f5',
    },
  },

  headerTitle: {
    color: theme.colorScheme === 'dark' ? 'white' : '#002B67',
    textDecoration: 'none',
  },
}));

export const Menu: FC<{ showNavbar?: boolean; hideMenu?: () => void; isMenuOpen: boolean }> = ({
  showNavbar = true,
  hideMenu,
}) => {
  const { classes } = useStyles();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const [links, setLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setLinks(MenuData.map((item) => <LinksGroup {...item} key={item.label} hideMenu={hideMenu} />));
    // eslint-disable-next-line
  }, []);

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
      position={{
        left: 0,
        top: 100,
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
            }}
          >
            <Link to="/" className={classes.headerTitle} onClick={hideMenu}>
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
          <Grid.Col xs={6} md={6} lg={6} xl={6}>
            <SocialButton text="Twitter" url="https://twitter.com/SolApps_" />
          </Grid.Col>
          <Grid.Col xs={6} md={6} lg={6} xl={6}>
            <SocialButton text="Discord" url="https://discord.com/invite/qfEGBPRyUt" />
          </Grid.Col>
          <Grid.Col xs={6} md={6} lg={6} xl={6}>
            <SocialButton text="Docs" url="https://docs.solworks.dev" />
          </Grid.Col>
          <Grid.Col xs={6} md={6} lg={6} xl={6}>
            <SocialButton
              text="Contact"
              url="https://twitter.com/messages/compose?recipient_id=1547241706990567426"
            />
          </Grid.Col>
        </Grid>
      </Navbar.Section>
    </Navbar>
  );
};

const SocialButton = ({ text, url }: { text: string; url: string }) => {
  const { classes } = useStyles();

  return (
    <div className={'glow-on-hover colors-only ' + classes.socialButton}>
      <a className={classes.socialButtonText} target="_blank" rel="noreferrer" href={url}>
        {text}
      </a>
    </div>
  );
};
