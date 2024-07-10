import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './app/App';
import authReducer from './store/reducers/authReducer';
import animalReducer from './store/reducers/animalReducer';
import { watchAuth } from './store/sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  animal: animalReducer,
});

const sagaMiddlaware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddlaware))
);

sagaMiddlaware.run(watchAuth);

ReactDOM.render(
  <React.StrictMode>
    <Radium.StyleRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </Radium.StyleRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
