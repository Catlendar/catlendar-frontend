import './App.css';
import { RecoilRoot } from 'recoil';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
      <div className="App"> </div>
    </div>
  );
}

export default App;
