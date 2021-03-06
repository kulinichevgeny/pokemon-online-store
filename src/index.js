import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes/Routes'
import { configureStore } from './store/configureStore'
import MainLayout from './commonComponents/Layouts/MainLayout'

import './styles/index.scss'

const store = configureStore()
const persistor = persistStore(store)

render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <MainLayout>
              <Routes/>
            </MainLayout>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
