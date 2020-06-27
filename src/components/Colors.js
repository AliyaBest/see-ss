import React from 'react'
import { connect } from "react-redux";
import { AVAILABLE_COLORS } from '../redux/colors'



export default class Colors extends React.Component {

  render(){
    const colors = AVAILABLE_COLORS
    return (
      <div>
    <h1>ALIYA yes, me</h1>
    {colors.map(color =>{
      return <li>{color}</li>
    })}

    </div>
    )}
}

const mapState = state => ({
  colors: state.colors
})

export const connectedColors = connect(mapState, null)(Colors)

