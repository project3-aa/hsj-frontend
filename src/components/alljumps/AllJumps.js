import React, {Component} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import ('./alljumps.css');


class AllJumps extends Component {

  constructor(props){
    super(props)
    this.state = {
      jumps: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/jump/allJumps')
        .then(res => {
          this.setState({
            jumps: res.data
          })
        }).catch(err => {
          console.log(err)
        })
  }
  
  // showAllJumps = () => {
  //   console.log(this.props)
  //   // const allTheJumps= this.props.allJumps
  //   // return allTheJumps.map((jump ) => {
  //   //   return(
  //   //     // console.log(allTheJumps)
  //   //     <div>
  //   //       <h1> IDK LOL</h1>
  //   //     </div>
  //   //   )
  //   // })
    
  // }

  render(){

    return(
      <div>
        {
          this.state.jumps.map( jump => {
            return (
              <div>
                <h4>start: {jump.start}</h4>
                <h4>end: {jump.end}</h4>
                <p>{jump.duration} days</p>
              </div>
            )
          })
        }
      </div>
    )

  }
}
export default AllJumps; 