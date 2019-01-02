import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/index";
import rootSaga from './sagas/index';
import {Provider} from "react-redux";
import { createLogger } from 'redux-logger';

import './App.css';
import './styles/bass.css';

/* MiddleWare and Loggers are used */
let middleware;

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  diff: true
});

middleware = [sagaMiddleware, logger]
//Redux Dev Tools are enabled
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

ReactDOM.render(
  <Provider store={store}>              
    <App action={action}/>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
