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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationPage } from './components/ApplicationPage/ApplicationPage';
import ScrollToTop from './Common';

const queryClient = new QueryClient();

function App() {
  const [opened, setOpened] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

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
        <>
          <NetworkStatusBar
            transactionsPerSecond={tpsQuery.data ? tpsQuery.data.data.networkInfo.tps.toFixed(0) : 0}
            solusdPrice={solQuery.data ? solQuery.data[0].price : 0}
            isLoading={tpsQuery.isLoading || solQuery.isLoading}
          />
          <Header onBurgerClick={() => setOpened(!opened)} openMenu={opened} />
        </>
      }
      navbar={<Menu showNavbar={opened} hideMenu={() => {setOpened(false)}} />}
      navbarOffsetBreakpoint="xl"
      padding={0}
      fixed
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? 'var(--background)' : 'var(--background)',
      })}
    >
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="apps/:id" element={<ApplicationPage />} />
      </Routes>
    </AppShell>
  );
};
