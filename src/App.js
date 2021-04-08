import Login from './components/login';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hospital Management</h1>
        <Login />
      </div>
    </Provider>
  );
}

export default App;
