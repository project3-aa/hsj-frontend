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
            console.log(jump.image)
            return (
              <div class="card">
              <img src={jump.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{jump.start} <i  id="plane" className="material-icons prefix">airplanemode_active</i> {jump.end}</h5>
                <p>{jump.duration} Days</p>
                <p class="card-text">{jump.description}</p>
              </div>
              <div class="card-body">
                <a href="/" class="card-link">View this Jump</a>
                
              </div>
              </div>
            )
          })
        }
      </div>
    )

  }
}
export default AllJumps; 