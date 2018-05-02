import React, {Component} from "react"
import axios from "axios"
import Color from "./Color"


const randomColorUrl = ("http://www.colr.org/json/color/random")
class ColorList extends Component{
  constructor (props){
    super (props)
    this.state = {
      color: ""
    }
  }
componentDidMount (){
  axios.get(randomColorUrl).then(response => {
    this.setState({color: "#" + response.data.colors[0].hex}); 
    
  })
}
  render (){
    const {color} = this.state
    //console.log(this.state.color)
    return (
      <div>
        <Color color={color}/>
      </div>
    )
  }
}

export default ColorList