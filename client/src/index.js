import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { injectGlobal } from 'styled-components';

import App from './App';
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

import "./assets/css/bootstrap-grid.min.css";
import "./assets/css/icon-font.css";


const history = createBrowserHistory();


ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();


injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style-type: none;
  }
  
  h1, h2, h3, h4, h5, h6, p, a, div, span, li, label, legend {
    font-family: 'Roboto Condensed',sans-serif;
  }
  
  a {
    text-decoration: none;
    display: inline-block;
    color: #545454;
  }
  span {
    display: inline-block;
  }
`;