import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Global from './reducers/Global';
import Country from './reducers/Country';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootStore = combineReducers({
  GlobalData: Global,
  CountryData: Country,
});

// whole functoin is performed by redux itself
const logger = (store) => {
  return (next) => {
    return (action) => {
      // code we want to execute b/w dispatch and reducer
      // then proceeding to reducer after it
      const result = next(action);
      return result;
    };
  };
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootStore, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    {' '}
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
