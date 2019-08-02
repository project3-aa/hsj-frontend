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

  getAllUserJumps(){
  axios.get('http://localhost:5000/api/jump/userJumps/5d40c82e9fe55865bc313284')
    .then((allTheJumps) => {
      this.setState({userJumps: allTheJumps.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }



    componentDidMount(){
      this.getAllUserJumps();
    }

    showAllUserJumps = () => {
      return this.state.userJumps.map((eachJump) => {

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
      <div>
        {/* <span>Hello, {this.props.theUser.username}</span> */}
        <div>the user has {this.getTotalUserJumps()} lifetime Jumps</div>
        <div>the user has {this.getTotalUserSkips()} lifetime skips</div>
        <div>
          {this.showAllUserJumps()}
        </div>

      <button><Link to='/createJump'>CREATE A NEW JUMP</Link></button>
      <button><Link to='/allJumps'>ALL JUMPS</Link></button>

      </div>
    )

  }

}

export default UserHomepage; 