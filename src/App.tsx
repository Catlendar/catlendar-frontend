import './App.css';
import React, { useEffect } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const queryClient = new QueryClient();

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

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
