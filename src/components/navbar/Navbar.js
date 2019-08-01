import React from 'react';
import './navbar.css'
// import {Link, NavLink} from 'react-router-dom';



function Navbar(props){

    // const doTheLogout = () =>{
    //     props.pleaseLogOut()
    //     .then(()=>{
    //         props.getUser();
    //     })

    // }

    return(
       
        <nav>
        <div class="nav-wrapper">
          <img src="../../logo.svg" alt="HSJLOGO"></img>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
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

export default Navbar;