import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import './displayhop.css'


class DisplayHop extends Component{

  constructor(props){
    super(props)
    this.state = {
      theHop: []
    }
  }


  deleteHop(id) {
    axios.post("http://localhost:5000/api/hop/deleteHop/" + this.props.hopOwner + "/" + id)
      .then(theHopToDelete => {
        this.props.showJumpAgain()
      })
      .catch(err => {
        console.log(err);
      });
  }


  render(){
    console.log('the props in the HOPS',this.props)
    return(
      <div>
      <ul>
      <li>POI: {this.props.theHopInfo.poi}</li>
      <li>Arrived by: {this.props.theHopInfo.arrivedBy}</li>
      <li>How it went: {this.props.theHopInfo.description}</li>
      </ul>
       <button><Link to={{
         pathname: `/editHop/${this.props.jumpOwner}`,
         state:{
           hopId: this.props.theHopInfo._id,
           POI: this.props.theHopInfo.poi,
           arrivedBy: this.props.theHopInfo.arrivedBy,
           description: this.props.theHopInfo.description,
         }
       }}>Edit This Hop</Link></button>
      <button
          onClick={() => {
            this.deleteHop(this.props.theHopInfo._id);
          }}>
          Delete Hop
        </button>
      </div>
    )
  }
}

export default DisplayHop;