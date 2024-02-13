import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Tab from './components/Tab/Tab';
import { TabDataFortune, TabDataTodo } from './components/Tab/TabData';
import Router from './pages/Router';
import GlobalStyle from './Styles/GlobalStyle';
import Toast from './components/Toast/Toast';

function App() {
  const notify = () => toast(<Toast />);
  return (
    <div>
      <GlobalStyle />
      <Router />
      <div className="App">
        <button type="button" onClick={notify}>
          no
        </button>
        <ToastContainer position="bottom-center" autoClose={3000} theme="light" />

        <Tab tabData={TabDataTodo} />
      </div>
    </div>
  );
}

export default App;
