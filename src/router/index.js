import React from 'react'
// import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from  'connected-react-router'

// Views
import Main from '../screens/Main'
import Settings from '../screens/Settings'

// History
import history from './history'

// Code Splitting
// If it's necessary, you can  use code splitting with a little help from react-loadable
// This kickstart uses route-centric code splitting, but you can make your component-centric splitting logics as well. =]

// import { Loader } from '@components/Loader'
// const Main = () => import('../screens/Main')
// const Settings = () => import('../screens/Settings')
// const LoadableMain = Loadable({ loader: Main, loading: Loader })
// const LoadableSettings = Loadable({ loader: Settings,  loading: Loader })


const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      {/*
      <Route exact path='/' component={LoadableMain} />
      <Route path='/settings' component={LoadableSettings} />
      */}
      <Route exact path='/' component={Main} />
      <Route path='/settings' component={Settings} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
