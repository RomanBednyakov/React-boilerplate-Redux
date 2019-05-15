import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './redux';
import thunk from 'redux-thunk';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunk)
    // persistState(/*paths, config*/)
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();

export default store;
