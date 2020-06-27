import {createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

export const AVAILABLE_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
]

//Action type
// const GET_COLORS = "GET_COLORS"
const PICK_COLOR = "PICK_COLOR"

//Action creator
// export const getColors = () =>({
//   type: GET_COLORS,
//   colors: AVAILABLE_COLORS
// })

export const pickColor = (color)=>({
  type: PICK_COLOR,
  color
})

const initialState = {
  colors: AVAILABLE_COLORS,
  selectedColor: AVAILABLE_COLORS[0]
}

const colorsReducer = (state = initialState, action)=>{
  switch (action.type){
    // case GET_COLORS:
    //   return {colors: action.colors, ...state}
    case PICK_COLOR:
      return {...state, selectedColor: action.color}
    default:
      return state
  }
}

export default colorsReducer
