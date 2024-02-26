import './App.css';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Router from './pages/Router';
import GlobalStyle from './tempStyles/GlobalStyle';

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
