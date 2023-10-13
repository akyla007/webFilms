import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './components/dashboard';
import HeaderContent from './components/header';
import { GlobalStyle } from './styles';

import { ContextProvider } from './context';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <HeaderContent />
          <Dashboard />
          <GlobalStyle />
        </ContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
