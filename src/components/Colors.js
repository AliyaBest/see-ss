import React from "react";
import { connect } from "react-redux";
import { AVAILABLE_COLORS, pickColor } from "../redux/colors";
import "./App.css";


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
    // console.log("evt", evt.color)
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
              <button onClick={()=>this.chooseColor({color})} className={color} key={ind} type="button" value={this.props.selectedColor} >
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
