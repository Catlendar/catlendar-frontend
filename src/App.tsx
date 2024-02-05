import './App.css';
import TestComponent from './Components/TestComponent';
import GlobalStyle from './Styles/GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <div className="App">
        <TestComponent />
      </div>
    </div>
  );
}

export default App;
