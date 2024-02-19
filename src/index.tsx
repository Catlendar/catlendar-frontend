import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    gray: '#8B8B8B',
    lightGray: '#bdbdbd',
    primary: '#7E7DFD',
    lightPrimary: '#E5E5FE',
    subPrimary: '#FD7CE3',
    lightSubPrimary: '#FEE4F9',
    todoCircle: '#F4F4F4',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
);
root.render(<App />);
