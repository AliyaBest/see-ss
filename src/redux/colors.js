
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


export const pickColor = (color)=>({
  type: PICK_COLOR,
  color
})

const initialState = {
  colors: AVAILABLE_COLORS,
  selectedColor: "black"
}

const colorsReducer = (state = initialState, action)=>{
  switch (action.type){
    case PICK_COLOR:
    if(!action.color){
      return {...state, selectedColor: "black"}

    } else {
      return {...state, selectedColor: action.color}
    }

    default:
      return state
  }
}

export default colorsReducer
