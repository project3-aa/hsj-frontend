import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ('./userhomepage.css');


class UserHomepage extends Component {

  constructor(props){
    super(props)
    this.state = {
    userJumps: []
    }
  }

  getAllUserJumps(id){
    
  axios.get(`http://localhost:5000/api/jump/userJumps/${id}`)
    .then((allTheJumps) => {
      this.setState({userJumps: allTheJumps.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }



    componentDidMount(){
      this.getAllUserJumps(this.props.theUser._id);
    }

 

    showAllUserJumps = () => {
      return this.state.userJumps.map((eachJump) => {


        // let skipLength = Object.keys(eachJump.skip).length
        // if(skipLength > 1){
        // return <h1>Jump Title: {eachJump.skip[0].city} ===>>> {eachJump.skip[eachJump.skip.length -1].city}</h1>
        // }

        return <div key={eachJump._id} className='each-jump'>
                <div className='jump-desc'>
                  <Link to={`/viewJump/${eachJump._id}`} className='homelink'>
                    <h5>{eachJump.start} TO {eachJump.end}</h5>
                  </Link>
                  <h4>{eachJump.tagline}</h4>
                  <p>this trip took {eachJump.duration} days</p>
                  <p>{eachJump.description}</p>
                </div>
              </div>

      })
    }


    getTotalUserSkips(){
      let totalUserSkips = 0;
      let theJumps = this.state.userJumps
      theJumps.forEach((eachJump)=>{
        return totalUserSkips += eachJump.skip.length;
      })
      return totalUserSkips;
    };


    getTotalUserJumps(){
      return this.state.userJumps.length
    };





  render(){
    return(
      <div className="userHome">
        <div className="userLinks">
            <Link to='/createJump'>CREATE A NEW JUMP</Link>
            <Link to='/allJumps'>ALL JUMPS</Link>
        </div>
        <hr/>

        <span>Pack your bags {this.props.theUser.username}!</span>
        <div>You have {this.getTotalUserJumps()} lifetime Jumps</div>
        <div>And {this.getTotalUserSkips()} lifetime skips</div>
        <div>
          {this.showAllUserJumps()}
        </div>


      </div>
    )

  }

}

export default UserHomepage; 