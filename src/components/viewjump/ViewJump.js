import React, {Component} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import DisplaySkip from '../displayskip/DisplaySkip.js'
import axios from 'axios';
import './viewjump.css'


class ViewJump extends Component{

  constructor(props){
    super(props)
    this.state = {
      theJump: null,
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
      // console.log(this.props.match.params.id)
    }

    createTitle(){
      return <h1>Jump Title: {this.state.theJump.skip[0].city} ===>>> {this.state.theJump.skip[this.state.theJump.skip.length -1].city}</h1>
    }
    
    

  //remember (de)?populate
    renderSkips(){
      if(this.state.theJump.skip){
        return this.state.theJump.skip.map((skip)=>{
          return <DisplaySkip key={skip._id} theSkipInfo={skip} theUser={this.props.theUser}></DisplaySkip>
        })
      } else {
        return null
      }
    }
  //call the AXIOS EDIT ROUTE in HERE and pass the method down as a PROP

  render(){
    // console.log('THE SKIP',this.state.theJump.skip[0])
    if(this.state.theJump){
    return(
      <div>
        {this.createTitle()}

        <div>
          <h5>Flew out of: {this.state.theJump.start}</h5>
          <h5>And returned to: {this.state.theJump.end}</h5>
          <h3>It took {this.state.theJump.duration} days total</h3>
          <h3>{this.state.theJump.description}</h3>
        </div>
        {this.renderSkips()}
        <div>
          {/* <DisplaySkip theSkipInfo = {this.state.theJump.skip} /> */}
        </div>
      </div>
    )
    } else {
      return (<h1>Loading your Jump!</h1>)
    }
  }



}


export default ViewJump;

