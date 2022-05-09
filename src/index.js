import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "modern-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store/store"
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);