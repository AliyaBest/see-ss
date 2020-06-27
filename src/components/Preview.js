import React from "react";
// import Colors from "./Colors"

export default class Preview extends React.Component {
  constructor(){
    super()
    this.state = {
      preview: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log("event=>", event)
    this.setState({
      preview: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    // const previewText = event.target.preview.value
    this.setState({
      preview: ""
    })
  }

  render(){


    return (
      <div>

        {this.state.preview.length ? <div id='preview-text' style={{height: 400, width: 400, borderStyle: 'solid', fontSize: 72,borderColor: 'black'
          }}>{this.state.preview} </div> :
          <div id='preview-text' style={{height: 400, width: 400, borderStyle: 'solid', fontSize: 48, borderColor: 'black'
          }}>Lorem Ipsum</div>

          }


      <form onSubmit={this.handleSubmit}>
        <label htmlFor="preview">Preview</label>
        <input type="text" name="preview" value={this.state.preview} onChange={this.handleChange}/>
        <button type="submit">SUBMIT</button>
      </form>
      </div>
    )
  }
}
