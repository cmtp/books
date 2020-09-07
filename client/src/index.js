import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import configureStore from './shared/redux/configureStore';
import * as serviceWorker from './serviceWorker';

import './index.css';

import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById('root');
const store = configureStore(window.initialState);

const renderApp = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
};

renderApp(AppRoutes);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
