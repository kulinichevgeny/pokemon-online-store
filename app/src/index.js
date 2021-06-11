import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes/Routes";
import { configureStore } from "./store/configureStore";

import './styles/index.scss';

const store = configureStore()

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);