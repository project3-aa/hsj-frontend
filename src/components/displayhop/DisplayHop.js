import React, {Component} from 'react';
import './displayhop.css'


class DisplayHop extends Component{

  constructor(props){
    super(props)
    this.state = {
      theHop: []
    }
  }


  render(){
    console.log('HOP INFO', this.props.theHopInfo)
    return(

      <div>
      <ul>
      <li>POI: {this.props.theHopInfo.poi}</li>
      <li>Arrived by: {this.props.theHopInfo.arrivedBy}</li>
      <li>How it went: {this.props.theHopInfo.description}</li>
      </ul>

      </div>
    )
  }
}

export default DisplayHop;