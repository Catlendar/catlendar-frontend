import './App.css';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
      <div className="App" />
    </div>
  );
}

export default App;
