import React, {Component} from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';
import Login from '../login/Login'
import Signup from '../signup/Signup'
// import { Modal, Button } from 'react-materialize';


class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = { 
        signupShowing: false,
        loginShowing: false
       };
    }

    
    doTheLogout = () =>{
        this.props.pleaseLogOut()
        .then(()=>{
            this.props.getUser();
            this.props.history.push('/')
        })  
    }

    toggleForm = (whichForm) =>{

        let theForm;
      
        if(whichForm === "signup"){
          theForm = 'signupShowing'
        } else if (whichForm === "login") {
          theForm = 'loginShowing'
        }
      
        this.setState({[theForm]: !this.state[theForm]})
      
      }

    render(){
           
    return(
       
     <div className="HomePage">
        <nav className="transparent">
        <div className="nav-wrapper">
        <img src="../../../images/hsj4Logo.png" alt="HSJLOGO" className="brand-logo center"></img>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/userHomepage'>User Homepage</Link></li>
            {this.state.signupShowing && 
            <Signup getUser = {this.getCurrentlyLoggedInUser}
            toggleForm = {this.toggleForm}/>}
            <li><Login {...this.props} getUser = {this.props.getUser} /></li>
            <li><Signup {...this.props} getUser = {this.props.getUser} /></li>
            <button className="btn" onClick = {this.doTheLogout} >Log Out </button>
        </ul>
        </div>
     </nav>
     </div>





        // Andre's original code
        // <nav>
        //     {/* {props.theUser && 
        // <Link to="/projects" style={{ textDecoration: 'none', margin: '10px' }}>Projects</Link>
        //     } */}
        // {!props.theUser && 
        // <span>
        // <button onClick = {()=> props.toggleForm('login')} > Login </button>
        // <button onClick = {()=> props.toggleForm('signup')}>Sign Up</button>
        // </span>
        // }
        // {props.theUser && 
        // <span>
        // <button onClick = {doTheLogout} >Log Out </button>
        // <span>Hello, {props.theUser.username}</span>
        // </span>
        // }
        // </nav>
    )

    }


}

export default Navbar;