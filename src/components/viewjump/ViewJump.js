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

  //call the AXIOS EDIT ROUTE in HERE and pass the method down as a PROP

  render(){
    console.log('this is the state',this.state.theJump)
    return(

      <div>
        <h1>This is a single Jump!</h1>

        <div>
          <h3>This jump starts at -----{this.state.theJump.start}</h3>
          <h3>And ends at.......{this.state.theJump.end}</h3>
          <h3>It took {this.state.theJump.duration} days total</h3>
          <h3>{this.state.theJump.description}</h3>
        </div>
        <div>
          {/* <TheSkip theSkipInfo = {this.state.theJump.skip} /> */}
        </div>
      </div>
    )
  }






}


export default ViewJump;

