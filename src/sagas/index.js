import { takeLatest, all } from 'redux-saga/effects'

import API from '../services/api'
import FixtureAPI from '../services/fixture'
import DebugConfig from '../config/debug'

// Types
import { mainTypes } from '../reducers/main'

// Sagas
import { main } from './main'

// API
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

// Connect Types To Sagas
export default function * root () {
  yield all([
    takeLatest(mainTypes.REQUEST, main, api)
  ])
}
