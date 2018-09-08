// Core
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import _ from 'lodash'

// Types and Action Creators
const { Types, Creators } = createActions({
  mainRequest: null,
  mainSuccess: ['payload'],
  mainFailure: null
})

// Initial State
export const INITIAL_STATE = Immutable({
  error: null,
  loading: false,
  payload: []
})

// Selectors
export const MainSelectors = {
  isFetching: (state) => state.main.loading,
  hasFail: (state) => (state.main.error !== null),
  getData: (state) => state.main.payload
}

// Reducers
export const request = (state) =>
  state.merge({ loading: true, payload: []})

export const success = (state, { payload }) =>
  state.merge({ loading: false, error: null, payload })

export const failure = (state, { error }) =>
  state.merge({ loading: false, error, payload: [] })


// Hookup Reducers To Types
export const mainReducer = createReducer(INITIAL_STATE, {
  [Types.MAIN_REQUEST]: request,
  [Types.MAIN_SUCCESS]: success,
  [Types.MAIN_FAILURE]: failure
})

const mainActions = Creators
export const mainTypes = Types
export default mainActions
