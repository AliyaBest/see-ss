import React from "react";
import { connect } from "react-redux";
import { AVAILABLE_COLORS, pickColor } from "../redux/colors";
import "./App.css";
import store from "../store";
import ColorSelector from "./ColorSelector"

export class Colors extends React.Component {
  constructor(props){
    super(props)

    this.changeColor = this.changeColor.bind(this)
  }
  componentDidMount(){
    this.props.pickColor()
  }

  changeColor(evt) {
    this.props.pickColor(evt)
    console.log(evt)
  }

  render() {
    const colors = AVAILABLE_COLORS;
    // console.log(this.props)
    return (
      <div>
        <p>COLOR OPTIONS</p>

        <div className="colorPalette">
          {colors.map((color, ind) => {
            return (
              <button onClick={()=>this.changeColor({color})} className={color} key={ind} type="button" value={this.props.selectedColor}>
                {color}
              </button>
            );
          })}
        </div>

        {/* <ColorSelector
                         selectedColor={this.props.selectedColor}
                         onChange={this.changeColor}
          /> */}

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
