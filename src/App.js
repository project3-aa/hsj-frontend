import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
// import Signup from './components/signup/Signup.js';
// import Login from './components/login/Login.js';
// import axios from 'axios'; //uncomment this out when we start using axios, if not the app breaks
import AuthService from './services/AuthService.js';
import Navbar from './components/navbar/Navbar.js';
import HomePage from './components/homepage/HomePage.js'
import UserHomePage from "./components/userhomepage/UserHomepage.js"
import AllUserJumps from './components/alluserjumps/AllUserJumps.js';
import CreateJump from './components/createjump/CreateJump.js'
import AllJumps from './components/alljumps/AllJumps.js'
import ViewJump from './components/viewjump/ViewJump';



class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
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

  
   getCurrentlyLoggedInUser = (f) =>{
    this.service.currentUser()
    .then((theUser)=>{
      this.setState({currentlyLoggedIn: theUser}, ()=>{
        if(f){f()};
      })
    })
    .catch(()=>{
      this.setState({currentlyLoggedIn: null})
    })
   }

    componentDidMount() {
      this.getCurrentlyLoggedInUser();
    }




  render(){
    console.log("the state in the app js ================ ", this.state)
    return (
        <div className="App">
        
        <Route path='/' render={(props)=>  <Navbar {...props}
        theUser = {this.state.currentlyLoggedIn} 
        pleaseLogOut = {()=> this.service.logout()}
        // toggleForm = {this.toggleForm}
        getUser = {this.getCurrentlyLoggedInUser} /> } />
       

        {/* {this.state.signupShowing &&  */}
        {/* <Signup getUser = {this.getCurrentlyLoggedInUser}
        // toggleForm = {this.toggleForm}
         /> */}
        {/* } */}

        {/* {this.state.loginShowing &&  */}
        {/* <Login getUser = {this.getCurrentlyLoggedInUser}
        // toggleForm = {this.toggleForm}
        /> */}
        {/* } */}
      
        

        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} theUser = {this.state.currentlyLoggedIn} />} />
          <Route exact path="/userHomepage" render={(props) =>  <UserHomePage {...props} theUser = {this.state.currentlyLoggedIn} ready = {this.state.ready} />} />
          <Route exact path="/allUserJumps" render={(props) => <AllUserJumps {...props} theUser = {this.state.currentlyLoggedIn} ready = {this.state.ready} />} />
          <Route exact path="/viewJump/:id" render={(props) => <ViewJump {...props} theUser = {this.state.currentlyLoggedIn} ready = {this.state.ready} />} />
          <Route exact path="/createJump" render={(props) => <CreateJump {...props} theUser = {this.state.currentlyLoggedIn} ready = {this.state.ready} />} />
          <Route exact path="/allJumps" render={(props) => <AllJumps {...props} theUser = {this.state.currentlyLoggedIn} ready = {this.state.ready} />} />
        </Switch>
 
      </div>
    );
  }
};

export default App;
