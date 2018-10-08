import FormContainer from "./js/components/container/FormContainer";
import ReactDOM from "react-dom";
import React from "react";
import store from "./js/store/"

import { Provider } from "react-redux";


const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(
  <Provider store={store}>
    <FormContainer/>
  </Provider>, wrapper) : false;