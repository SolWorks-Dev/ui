import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  createStyles,
  MantineProvider,
} from '@mantine/core';
import React from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import './common.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchTpsStats } from './apis/fetchTpsStats';
import { fetchSolStats } from './apis/fetchSolStats';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Common';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import NavigationRouter from './NavigationRouter';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const queryClient = new QueryClient();

const useStyles = createStyles((theme) => ({
  appShell: {
    backgroundColor: 'var(--bg-app)',
    minHeight: '100vh',
    main: {
      paddingTop: 'calc(var(--header-height) + 24px)',
      paddingBottom: '100px',
      paddingLeft: '24px',
      paddingRight: '24px',
      width: '100%',
      
      '@media (min-width: 1280px)': {
        marginLeft: '280px',
        paddingLeft: '48px',
        paddingRight: '48px',
        maxWidth: 'calc(100% - 280px)',
      },
    },
  },
}));

const AppContainer = () => {
  const tpsQuery = useQuery(['tps-data'], fetchTpsStats);
  const solQuery = useQuery(['sol-data'], fetchSolStats);
  const { classes } = useStyles();
  const [opened, setOpened] = React.useState(false);

  return (
    <AppShell
      header={
        <Header
          onBurgerClick={() => setOpened(!opened)}
          openMenu={opened}
          solQuery={solQuery}
          tpsQuery={tpsQuery}
        />
      }
      navbar={<Menu showNavbar={opened} hideMenu={() => setOpened(false)} isMenuOpen={opened} />}
      navbarOffsetBreakpoint="xl"
      padding={0}
      fixed
      className={classes.appShell}
    >
      <NavigationRouter />
    </AppShell>
  );
};

export default function App() {
  const [colorScheme] = React.useState<ColorScheme>('light');

  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line
  const analytics = getAnalytics(app);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
          <MantineProvider 
            theme={{ 
              colorScheme: 'light',
              fontFamily: '"Satoshi", -apple-system, BlinkMacSystemFont, sans-serif',
              headings: {
                fontFamily: '"Cabinet Grotesk", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: 800,
              },
              colors: {
                brand: [
                  '#FFF5F0',
                  '#FFE5D9',
                  '#FFD0BE',
                  '#FFB89E',
                  '#FF9B76',
                  '#FF6B35',
                  '#E85A25',
                  '#C44A1C',
                  '#9F3C16',
                  '#7A2E11'
                ],
                dark: [
                  '#F8F6F3',
                  '#E8E4DF',
                  '#D1CBC3',
                  '#B5ADA3',
                  '#9A948C',
                  '#5C5650',
                  '#3D3935',
                  '#2D2926',
                  '#1A1816',
                  '#0D0C0B'
                ],
              },
              primaryColor: 'brand',
              defaultRadius: 'md',
              shadows: {
                sm: '0 2px 4px rgba(26, 24, 22, 0.04), 0 1px 2px rgba(26, 24, 22, 0.02)',
                md: '0 8px 24px rgba(26, 24, 22, 0.06), 0 4px 8px rgba(26, 24, 22, 0.03)',
                lg: '0 24px 48px rgba(26, 24, 22, 0.1), 0 12px 24px rgba(26, 24, 22, 0.05)',
                xl: '0 32px 64px rgba(26, 24, 22, 0.12), 0 16px 32px rgba(26, 24, 22, 0.06)',
              },
              other: {
                transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
              }
            }} 
            withGlobalStyles 
            withNormalizeCSS
          >
            <ScrollToTop />
            <AppContainer />
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </Router>
  );
}
