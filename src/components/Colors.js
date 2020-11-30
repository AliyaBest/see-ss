import React from "react";
import { connect } from "react-redux";
import { AVAILABLE_COLORS, pickColor } from "../redux/colors";
import "./App.css";
import CodePreview from './CodePreview'


export class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "text",
      color: "gainsboro",
      background: "white"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }

  componentDidMount() {
    this.props.pickColor();
  }

  handleOptionChange(evt) {
    this.setState({
      selectedOption: evt.target.value
    });
  }

  chooseColor(evt) {
    this.props.pickColor(evt);

    if (this.state.selectedOption === "text") {
      document.getElementById("preview-text").style.color = evt.color;
      this.setState({
        color: evt.color
      });
    } else if (this.state.selectedOption === "background") {
      document.getElementById("preview-text").style.backgroundColor = evt.color;
      this.setState({
        background: evt.color
      });
    }
  }

  render() {
    const colors = AVAILABLE_COLORS;

    return (
      <div>
        <h6>COLOR OPTIONS</h6>

        <form id="textOrBackground">
          <div className="radio">
            <label>
              <input
                type="radio"
                value="text"
                checked={this.state.selectedOption === "text"}
                onChange={this.handleOptionChange}
              />
              Text Color
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="background"
                checked={this.state.selectedOption === "background"}
                onChange={this.handleOptionChange}
              />
              Background Color
            </label>
          </div>
        </form>

        <div className="colorPalette">
          {colors.map((color, ind) => {
            return (
              <button
                onClick={() => this.chooseColor({ color })}
                className={color}
                key={ind}
                type="button"
                value={this.props.selectedColor}
              >
                {color}
              </button>
            );
          })}
        </div>

        <CodePreview color={this.state.color} background={this.state.background}/>

      </div>
    );
  }
}

const mapState = state => ({
  colors: state.colors,
  selectedColor: state.color
});

const mapDispatch = dispatch => ({
  pickColor: color => dispatch(pickColor(color))
});

export default connect(
  mapState,
  mapDispatch
)(Colors);
