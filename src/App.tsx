import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { FC } from 'react';
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
  apiKey: 'AIzaSyCsMrL742RRWPnje1JaTczkt6mP3-spGek',
  authDomain: 'solapps-solworks.firebaseapp.com',
  projectId: 'solapps-solworks',
  storageBucket: 'solapps-solworks.appspot.com',
  messagingSenderId: '358059785620',
  appId: '1:358059785620:web:a8328e788ddf45ac34e381',
  measurementId: 'G-WMBENV3S1N',
};
const queryClient = new QueryClient();

function App() {
  const [opened, setOpened] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
            <ScrollToTop />
            <AppContent setOpened={setOpened} opened={opened} />
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;

const AppContent: FC<{
  setOpened: any;
  opened: boolean;
}> = ({ setOpened, opened }) => {
  const tpsQuery = useQuery(['tps-data'], fetchTpsStats);
  const solQuery = useQuery(['sol-data'], fetchSolStats);

  return (
    <AppShell
      header={
        <Header onBurgerClick={() => setOpened(!opened)} openMenu={opened} solQuery={solQuery} tpsQuery={tpsQuery} />
      }
      navbar={
        <Menu
          showNavbar={opened}
          hideMenu={() => {
            setOpened(false);
          }}
          isMenuOpen={opened}
        />
      }
      navbarOffsetBreakpoint="xl"
      padding={0}
      fixed
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'white',
        main: {
          paddingTop: '110px',
        },
      })}
    >
      <NavigationRouter />
    </AppShell>
  );
};

