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
    this.setState({
      preview: ""
    })
  }

  render(){


    return (
      <div>
        <h6>PREVIEW</h6>
        {this.state.preview.length ? <div id='preview-text' style={{height: 300, width: 400, borderStyle: 'solid', backgroundColor: 'white', fontSize: 48, padding: 20, borderColor: 'black'
          }}>{this.state.preview} </div> :
          <div id='preview-text' style={{height: 300, width: 400, borderStyle: 'solid', backgroundColor: 'white', padding: 20, fontSize: 48, borderColor: 'black'
          }}>Lorem Ipsum</div>

          }


      <form onSubmit={this.handleSubmit}>
        <input type="text" name="preview" placeholder="Your text here." value={this.state.preview} onChange={this.handleChange}/>
        <button type="submit">SUBMIT</button>
      </form>
      </div>
    )
  }
}
