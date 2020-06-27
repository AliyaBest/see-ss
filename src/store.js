import { createStore, applyMiddleware } from "redux"
import appReducer from "./redux"
import logger from 'redux-logger'


const store = createStore(
  appReducer,
  applyMiddleware(logger)
)

export default store
