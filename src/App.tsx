import './App.css';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
      <div className="App"> </div>
    </div>
  );
}

export default App;
