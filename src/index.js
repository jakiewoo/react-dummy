import MainContainer from "./js/components/container/MainContainer";
import ReactDOM from "react-dom";
import React from "react";
import reducers from "./js/reducers/"
import saga from "./js/reducers/saga"

import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(saga)

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(
  <Provider store={store}>
    <MainContainer/>
  </Provider>, wrapper) : false;
