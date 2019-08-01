import React, {Component} from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';
// import axios from 'axios'; //uncomment this out when we start using axios, if not the app breaks
import AuthService from './services/AuthService.js';
import Navbar from './components/navbar/Navbar.js';
import AllUserJumps from './components/alluserjumps/AllUserJumps.js';
import CreateJump from './components/createjump/CreateJump.js'
import AllJumps from './components/alljumps/AllJumps.js'



class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      listOfProjects: [],
      currentlyLoggedIn: null,
      ready: false,
      // signupShowing: false,
      // loginShowing: false,
    };
    //this is important! it gets the AuthService class from Authservice.js
    //basically it allows us to use the signup/login/getcurrentuser/logout routes from 
    //the backend
    this.service = new AuthService();

  }

  
   getCurrentlyLoggedInUser = () =>{
    this.service.currentUser()
    .then((theUser)=>{
      this.setState({currentlyLoggedIn: theUser})
    })
    .catch(()=>{
      this.setState({currentlyLoggedIn: null})
    })
   }








  render(){

    return (
        <div className="App">
        

        <Navbar 
        theUser = {this.state.currentlyLoggedIn} 
        pleaseLogOut = {()=> this.service.logout()}
        // toggleForm = {this.toggleForm}
        getUser = {this.getCurrentlyLoggedInUser}

        />

        {/* {this.state.signupShowing &&  */}
        <Signup getUser = {this.getCurrentlyLoggedInUser}
        // toggleForm = {this.toggleForm}
         />
        {/* } */}

        {/* {this.state.loginShowing &&  */}
        <Login getUser = {this.getCurrentlyLoggedInUser}
        // toggleForm = {this.toggleForm}
        />
        {/* } */}
      
        

        <Switch>
          <Route exact path ="/allUserJumps" render={(props) => <AllUserJumps />} />
          <Route exact path ="/createJump" render={(props) => <CreateJump />} />
          <Route exact path ="/allJumps" render={(props) => <AllJumps />} />
        </Switch>
 
      </div>
    );
  }
};

export default App;
