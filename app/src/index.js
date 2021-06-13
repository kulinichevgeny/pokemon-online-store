import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes/Routes';
import { configureStore } from './store/configureStore';

import './styles/index.scss';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);