export const AVAILABLE_COLORS = [
  "crimson",
  "coral",
  "khaki",
  "seagreen",
  "DodgerBlue",
  "DarkMagenta",
  "Plum",
  "black",
  "white",
  "brown",
  "LightCyan",
  "Gainsboro"
];

//Action type
const PICK_COLOR = "PICK_COLOR";

export const pickColor = selectedColor => ({
  type: PICK_COLOR,
  selectedColor
});

const initialState = {
  colors: AVAILABLE_COLORS,
  selectedColor: ""
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICK_COLOR:
      return { ...state, selectedColor: action.selectedColor };

    default:
      return state;
  }
};

export default colorsReducer;
