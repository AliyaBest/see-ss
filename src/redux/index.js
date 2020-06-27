import { combineReducers } from 'redux'
import colorsReducer from './colors'

const appReducer = combineReducers({
  colors: colorsReducer
})

export default appReducer
