import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './styles/app'
import Routes from './router'
import configureStore from './store'

const { store, persistor } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
)

export default App
