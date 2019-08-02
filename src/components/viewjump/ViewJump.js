import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
// import ('./createjump.css');


class ViewJump extends Component{

  constructor(props){
    super(props)
    this.state = {
      theJump: []
    }
  }


  //make axios call here for single jump
  getSingleJumpInfo(){
    axios.get('http://localhost:5000/api/jump/details/' + this.props.match.params.id)
      .then((theSingleJump) => {
        console.log(theSingleJump.data)
        this.setState({theJump: theSingleJump.data});
      })
      .catch((err) => {
        console.log(err);
      })
    }

    componentDidMount(){
      this.getSingleJumpInfo();
      console.log(this.props.match.params.id)
    }

  //remember (de)?populate

  render(){
    console.log(this.state.theJump)
    return(

      <div>
        <h1>This is a single Jump!</h1>

        <div>
          <h4>This jump starts at -----{this.state.theJump.start}</h4>
          <h4>And ends at.......{this.state.theJump.end}</h4>
          <h4>It took {this.state.theJump.duration} days total</h4>
          <h4>{this.state.theJump.description}</h4>
        </div>
      </div>
    )
  }






}


export default ViewJump;

