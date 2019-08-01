import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';



function Navbar(props){

    // const doTheLogout = () =>{
    //     props.pleaseLogOut()
    //     .then(()=>{
    //         props.getUser();
    //     })

    // }

    return(
       
     <div class="HomePage">
                <nav class="transparent">
                <div class="nav-wrapper">
                <img src="./images/hsj4Logo.png" alt="HSJLOGO" class="brand-logo center"></img>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to='/userHomepage'>User Homepage</Link></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
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

export default Navbar;