import React from "react";

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

        {this.state.preview.length ? <h1>{this.state.preview}</h1> :
          <h1>Lorem Ipsum</h1>

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
