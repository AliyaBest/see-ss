import React from "react";
import { connect } from "react-redux";
import { AVAILABLE_COLORS, pickColor } from "../redux/colors";
import "./App.css";


export class Colors extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      selectedOption: "text"
    }

    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.chooseColor = this.chooseColor.bind(this)
  }

  componentDidMount(){
    this.props.pickColor()
  }

  handleOptionChange(evt){
    this.setState({
      selectedOption: evt.target.value
    })
  }

  chooseColor(evt) {
    this.props.pickColor(evt)
    const codePreview = document.getElementById('codepreview')

    if(this.state.selectedOption==='text'){
      document.getElementById('preview-text').style.color = evt.color;
    }

    else if (this.state.selectedOption==='background'){
      document.getElementById('preview-text').style.backgroundColor = evt.color;
    }
    codePreview.innerHTML = `{ color: ${evt.color}; }`
  }



  render() {
    const colors = AVAILABLE_COLORS;
    let codeSnippet= "{ color: "

    return (
      <div>
        <h6>COLOR OPTIONS</h6>

        <form>
          <div className = "radio">
            <label>
              <input
                type ="radio"
                value = "text"
                checked={this.state.selectedOption === "text"}
                onChange={this.handleOptionChange}/>
                Text Color
            </label>
          </div>

          <div className = "radio">
            <label>
              <input
                type ="radio"
                value = "background"
                checked={this.state.selectedOption === "background"}
                onChange={this.handleOptionChange}/>
                Background Color
            </label>
          </div>
        </form>


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
