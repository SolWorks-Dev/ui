import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import React, { FC } from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import NetworkStatusBar from './components/NetworkStatusBar';
import './common.css';
import { HomeView } from './views/HomeView';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { fetchTpsStats } from './apis/fetchTpsStats';
import { fetchSolStats } from './apis/fetchSolStats';

const queryClient = new QueryClient();

function App() {
  const [opened, setOpened] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
          <AppContent setOpened={setOpened} opened={opened} />
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

export default App;

const AppContent: FC<{ setOpened: React.Dispatch<React.SetStateAction<boolean>>; opened: boolean }> = ({
  setOpened,
  opened,
}) => {
  const tpsQuery = useQuery(['tps-data'], fetchTpsStats);
  const solQuery = useQuery(['sol-data'], fetchSolStats);

  return (
    <AppShell
      header={
        <>
          <NetworkStatusBar
            transactionsPerSecond={tpsQuery.data ? tpsQuery.data.data.networkInfo.tps.toFixed(0) : 0}
            solusdPrice={solQuery.data ? solQuery.data.data.priceUsdt : 0}
            isLoading={tpsQuery.isLoading || solQuery.isLoading}
          />
          <Header onBurgerClick={() => setOpened((o) => !o)} openMenu={opened} />
        </>
      }
      navbar={<Menu showNavbar={opened} />}
      navbarOffsetBreakpoint="xl"
      padding={0}
      fixed
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'var(--background)',
      })}
    >
      <HomeView />
    </AppShell>
  );
};
