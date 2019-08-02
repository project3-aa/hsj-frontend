import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';
import Login from '../login/Login'
import M from 'materialize-css';
import { Modal, Button } from 'react-materialize';


function Navbar(props){

    
    // const doTheLogout = () =>{
        //     props.pleaseLogOut()
        //     .then(()=>{
            //         props.getUser();
            //     })
            
            // }
           
            return(
       
     <div className="HomePage">
        <nav className="transparent">
        <div className="nav-wrapper">
        <img src="../../../images/hsj4Logo.png" alt="HSJLOGO" className="brand-logo center"></img>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/userHomepage'>User Homepage</Link></li>
            <li><Login/></li>
            <li>
                <Button href="#modal1" className="modal-trigger">
                sign Up
                </Button>
                <Modal id="modal1">
                Lorem ipsum dolor sit amet
                </Modal>
            </li>

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