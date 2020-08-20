import React from "react";
import { connect } from "react-redux";
import { AVAILABLE_COLORS, pickColor } from "../redux/colors";
import "./App.css";
// import Checkbox from './CheckBox'
// import {createEditor} from "./CodeMirror"

export class Colors extends React.Component {
  constructor(props){
    super(props)

    this.chooseColor = this.chooseColor.bind(this)
  }
  componentDidMount(){
    this.props.pickColor()
  }

  chooseColor(evt) {
    this.props.pickColor(evt)
    document.getElementById('preview-text').style.color = evt.color;
    const codePreview = document.getElementById('codepreview')


    codePreview.innerHTML = `{ color: ${evt.color}; }`
  }



  render() {
    const colors = AVAILABLE_COLORS;
    let codeSnippet= "{ color: "

    return (
      <div>
        <h6>COLOR OPTIONS</h6>
        {/* <Checkbox /> */}
        {/* <div className="checkboxes">

        <label className="checkbox-container">Text
  <input type="radio"/>
  <span class="checkmark"></span>
</label>

<label class="checkbox-container">Background Color
  <input type="radio"/>
  <span class="checkmark"></span>
</label>
        </div> */}

        <div className="colorPalette">
          {colors.map((color, ind) => {
            return (

              <button onClick={()=>this.chooseColor({color})} className={color} key={ind} type="button" value={this.props.selectedColor} >
                {color}
              </button>
            );
          })}
        </div>

          <h6>CSS CODE</h6>
        <div id="codepreview" >
        {codeSnippet} black;{` }`}
        </div>

        <createEditor />

      </div>
    );
  }
}

const mapState = state => ({
  colors: state.colors,
  selectedColor: state.color
});

const mapDispatch = dispatch => ({
  pickColor: (color) => dispatch(pickColor(color))
})

export default connect(
  mapState,
  mapDispatch
)(Colors);
