import React from 'react'
import ReactDOM from 'react-dom'
import "tailwindcss/tailwind.css"
import './styles/app.scss'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import {
  persistStore
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);