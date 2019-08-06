import React, { Component } from "react";
import DisplayHop from "../displayhop/DisplayHop.js";
import CreateHop from "../createhop/CreateHop.js";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./displayskip.css";

class DisplaySkip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theSkip: this.props.theSkipInfo,
      editable: false
    };
  }

  // returnHops = () =>{
  //   if(this.props.theSkipInfo.hops){
  //   this.props.theSkipInfo.hops.map((skip, index) =>{
  //     return <p>{skip.city}</p>
  //   })
  //   } else {
  //     return null
  //   }
  // }

  renderHops() {
    if (this.props.theSkipInfo.hop) {
      return this.props.theSkipInfo.hop.map(hop => {
        return (
          <DisplayHop
            key={hop._id}
            theHopInfo={hop}
            theUser={this.props.theUser}
            hopOwner={this.props.theSkipInfo._id}
          />
        );
      });
    } else {
      return null;
    }
  }

  renderHopAdd() {
    if (
      this.props.theSkipInfo &&
      this.props.theUser._id === this.props.jumpOwner
    ) {
      return <CreateHop hopOwner={this.props.theSkipInfo._id} />;
    }
  }

  deleteSkip(id) {
    axios
      .post(
        "http://localhost:5000/api/skip/deleteSkip/" +
          this.props.jumpId +
          "/" +
          id
      )
      .then(theJumpToDelete => {
        //redirect in here
      })
      .catch(err => {
        console.log(err);
      });
  }

  // renderEditButton = () =>{
  //   console.log('THere should be an edit buton here===========',this.props.theUser,  this.props.theSkipInfo, this.props.theUser._id);
  //   if(this.props.theUser && this.props.theSkipInfo.ownerId === this.props.theUser._id){
  //     return <button>edit me</button>
  //   } else {
  //     return null
  //   }
  // }

  render() {
    // console.log('this is the skip info----',this.props.theSkipInfo) //<<<<this returns info!!!!!!
    // console.log('the state-----',this.state);
    return (
      <div className="eachskip">
        {/* {this.renderEditButton()} */}
        <h5>{this.props.theSkipInfo.city}</h5>
        <h5>Arrived by: {this.props.theSkipInfo.arrivedBy}</h5>
        <h5>Days Spent: {this.props.theSkipInfo.duration}</h5>
        <h5>How it went: {this.props.theSkipInfo.description}</h5>
        <button><Link to={{
          pathname: `/editSkip/${this.props.theSkipInfo}`, 
          state: {
            skipId: this.props.theSkipInfo._id,
            city: this.props.theSkipInfo.city,
            arrivedBy: this.props.theSkipInfo.arrivedBy,
            duration: this.props.theSkipInfo.duration, 
            description: this.props.theSkipInfo.description
          }}
        }>Edit This Skip</Link></button>
        {this.renderHops()}
        {this.renderHopAdd()}
        <button>
          onClick={() => {
            this.deleteSkip(this.props.theSkipInfo._id);
          }}
        >
          Delete Skip
        </button>
        {/* {this.deleteSkip(this.props.theSkipInfo._id)} */}
        {/* {this.returnHops()} */}
      </div>
    );
  }
}

export default DisplaySkip;
