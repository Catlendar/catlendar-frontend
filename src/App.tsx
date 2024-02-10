import './App.css';
import Router from './pages/Router';
import GlobalStyle from './Styles/GlobalStyle';

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
