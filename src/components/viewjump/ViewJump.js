import React, { Component } from "react";
import {Link} from 'react-router-dom';
import DisplaySkip from "../displayskip/DisplaySkip.js";
import axios from "axios";
import "./viewjump.css";
import EditSkip from "../editskip/EditSkip.js";
import CreateSkip from "../createskip/CreateSkip.js";
import MappyMap from '../googlemap/MapRender.js'

class ViewJump extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theJump: null,
      skipCityArray: []
    };
  }

  //make axios call here for single jump
  getSingleJumpInfo() {
    axios
      .get(
        "http://localhost:5000/api/jump/details/" + this.props.match.params.id
      )
      .then(theSingleJump => {
        this.setState({ theJump: theSingleJump.data });
        this.skipsForGoogleMaps()
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getSingleJumpInfo();
  }

  createTitle() {
    let skipLength = Object.keys(this.state.theJump.skip).length;
    if (skipLength > 1) {
      return (
        <h1>
          Jump Title: {this.state.theJump.skip[0].city} ===>>>{" "}
          {this.state.theJump.skip[this.state.theJump.skip.length - 1].city}
        </h1>
      );
    } else {
      return (
        <h1>
          Let's add at least two skips! Your first and last skip will be where
          your trip really starts and ends.{" "}
        </h1>
      );
    }
  }

  renderSkips() {
    if (this.state.theJump.skip) {
      return this.state.theJump.skip.map(skip => {
        return (
          <DisplaySkip
            key={skip._id}
            theSkipInfo={skip}
            theUser={this.props.theUser}
            jumpOwner={this.state.theJump.ownerId}
            jumpId={this.state.theJump._id}
          />
        );
      });
    } else {
      return null;
    }
  }

  skipsForGoogleMaps() {
    if (this.state.theJump.skip) {
      return this.state.theJump.skip.map(skip => {
        this.state.skipCityArray.push({location: skip.city})
        this.setState();
        return (
          {location: skip.city}
        );
      });
    } else {
      return null;
    }
  }

  renderSkipEdit() {
    if (
      this.state.theJump.skip[0] &&
      this.props.theUser._id === this.state.theJump.ownerId
    ) {
      return <EditSkip jumpOwner={this.state.theJump._id} />;
    } else {
      return null;
    }
  }

  renderSkipAdd() {
    if (
      this.state.theJump &&
      this.props.theUser._id === this.state.theJump.ownerId
    ) {
      return <CreateSkip jumpOwner={this.state.theJump._id} />;
    }
  }

  deleteJump() {
    axios
      .post(
        "http://localhost:5000/api/jump/deleteJump/" + this.state.theJump._id
      )
      .then(theJumpToDelete => {
        // console.log("sucessfully deleted", theJumpToDelete);
        //redirect in here
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.theJump) {
      console.log('asdfasdf',this.state.skipCityArray)
      return (
        <div>
          <MappyMap renderSkips={this.state.skipCityArray}/>
          {this.createTitle()}

          <div>
            <h5>Flew out of: {this.state.theJump.start}</h5>
            <h5>And returned to: {this.state.theJump.end}</h5>
            <h3>It took {this.state.theJump.duration} days total</h3>
            <h3>{this.state.theJump.description}</h3>
          </div>
          {this.renderSkips()}
          <div>
            {/* {this.renderSkipEdit()} */}
            {this.renderSkipAdd()}
          </div>
          <button> <Link to={`/editJump/${this.state.theJump._id}`}>Edit This Jump</Link></button>
          <button
          onClick={() => {
            this.deleteJump();
          }}
        >
          Delete whole jump!
        </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ViewJump;
