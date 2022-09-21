import { createStore } from 'redux'
import { reducer, initialState } from './reducers/Reducer'

export const store = createStore(reducer, initialState)

export default store