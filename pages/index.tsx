import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { FC } from 'react';
import { Header } from '../src/components/Header';
import { Menu } from '../src/components/Menu';
import HomeView from './HomeView';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchTpsStats } from '../src/apis/fetchTpsStats';
import { fetchSolStats } from '../src/apis/fetchSolStats';
import { ApplicationPage } from './application/[id]';
import { CategoryView } from './category/[id]';
import ScrollToTop from '../src/Common';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import ReactDOM from 'react-dom/client';

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

export default function App() {
  const [opened, setOpened] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
          {/* <ScrollToTop /> */}
          <AppContent setOpened={setOpened} opened={opened} />
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

const AppContent: FC<{
  setOpened: any;
  opened: boolean;
}> = ({ setOpened, opened }) => {
  const tpsQuery = useQuery(['tps-data'], fetchTpsStats);
  const solQuery = useQuery(['sol-data'], fetchSolStats);

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
        backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'var(--background)',
        main: {
          paddingTop: '110px',
        },
      })}
    >
      <HomeView />
    </AppShell>
  );
};
