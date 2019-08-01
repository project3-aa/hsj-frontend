import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ('./userhomepage.css');


class UserHomepage extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }
  









  render(){

    return(
      <div>

      <button><Link to='/allUserJumps'>ALL USER JUMPS</Link></button>
      <button><Link to='/createJump'>CREATE A NEW JUMP</Link></button>
      <button><Link to='/allJumps'>ALL JUMPS</Link></button>

      </div>
    )

  }

}

export default UserHomepage; 