import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from './contexts/auth0-context';

import configureStore from './stores/configureStores';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Auth0Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
