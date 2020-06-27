
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


export const pickColor = (selectedColor)=>({
  type: PICK_COLOR,
  selectedColor
})

const initialState = {
  colors: AVAILABLE_COLORS,
  selectedColor: ''
}

const colorsReducer = (state = initialState, action)=>{
  switch (action.type){
    case PICK_COLOR:
    // if(!action.color){
    //   return {...state, selectedColor: "black"}

    // } else {
      console.log("action=>", action)
      return {...state, selectedColor: action.selectedColor}
    //}

    default:
      return state
  }
}

export default colorsReducer
