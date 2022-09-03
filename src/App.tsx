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
    backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
    main: {
      '@media (max-width: 755px)': {
        paddingTop: '100px',
      },
      paddingTop: '125px',
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
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line
  const analytics = getAnalytics(app);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
            <ScrollToTop />
            <AppContainer />
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </Router>
  );
}