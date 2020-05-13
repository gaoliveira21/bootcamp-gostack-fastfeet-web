import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import history from './services/history';
import { store } from './store';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
