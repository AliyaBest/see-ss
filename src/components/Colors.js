import React from "react";
import { connect } from "react-redux";
import { AVAILABLE_COLORS } from "../redux/colors";
import "./App.css";

export default class Colors extends React.Component {
  render() {
    const colors = AVAILABLE_COLORS;
    return (
      <div>
        <p>COLOR OPTIONS</p>

        <div className="colorPalette">
          {colors.map((color, ind) => {
            return (
              <div className={color} key={ind}>
                {color}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  colors: state.colors
});

export const connectedColors = connect(
  mapState,
  null
)(Colors);
