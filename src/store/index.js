import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from '../reducers'
import sagas from '../sagas'

export const history = createHistory()
const connectRouterHistory = connectRouter(history)

export default function configureStore(onCompletion) {
  const persistConfig = {
    key: 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, reducers, onCompletion)
  const sagaMiddleware   = createSagaMiddleware()
  const middlewares      = [ sagaMiddleware, routerMiddleware(history) ]

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name,
      // actionsBlacklist, actionsCreators, serialize...
    }) : compose

  const enhancer  = composeEnhancers(applyMiddleware(...middlewares))
  const store     = createStore(connectRouterHistory(persistedReducer), enhancer)
  const persistor = persistStore(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(connectRouterHistory(nextRootReducer))
    })
  }

  sagaMiddleware.run(sagas)

  return { store, persistor }
}

