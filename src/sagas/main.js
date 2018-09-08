import { call, put } from 'redux-saga/effects'

import mainActions from '../redux/main'

export function * getUsers (api) {
  const response = yield call(api.getUsers)
  try {
    const payload = response.data
    yield put(mainActions.mainSuccess(payload))
  } catch (error) {
    yield put(mainActions.mainFailure(error))
  }
}

