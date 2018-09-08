import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from  'connected-react-router'

// Views
import Main from '../screens/Main'
import Settings from '../screens/Settings'

// History
import history from './history'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/settings' component={Settings} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
