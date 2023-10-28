import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import RouterPage from './utils/RouterPage';
function App() {
  return (
    <div className="App">
      <Provider store={AppStore}>
        {/* <Header />
        <Body /> */}
        <RouterPage/>
      </Provider>
    </div>
  );
}

export default App;
