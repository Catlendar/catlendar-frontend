import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TodoNumAtom } from './atom/TodoNumAtom';
import { tokenInstance } from './api/Axios';
import { UserAtom } from './atom/UserAtom';
import moment from 'moment';
import { RecoilRoot } from 'recoil';
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
