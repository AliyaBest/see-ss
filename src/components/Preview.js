import React from "react";

export default class Preview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      preview: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearInput = this.clearInput.bind(this)

  }

  componentDidCatch(){
    this.setState({
      preview: this.state.preview
    })
  }

  handleChange(event){

    this.setState({
      preview: event.target.value
    })
  }

  handleSubmit(event){
    console.log('A name was submitted: ' + this.state.preview);

    event.preventDefault()
  }

  clearInput(){
    document.getElementById('myInput').value = ''
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
        <input id="myInput" type="text" value={this.state.preview} onChange={this.handleChange}/>
        <button onClick ={this.clearInput}type="submit">SUBMIT</button>
      </form>
      </div>
    )
  }
}
