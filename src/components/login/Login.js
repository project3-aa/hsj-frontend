import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToLogin = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
      this.service.login(uName, pWord)
      .then(()=>{
          // this.props.toggleForm('login'); //Should I be setting the state back to empty?
          this.props.getUser();
      })

  }


  render(){
    return(
      <div>
      <form onSubmit = {this.tryToLogin}>

          <h3>Login</h3>

          <legend>Username</legend>
          <input value={this.state.usernameInput}
            name="usernameInput"
            onChange={this.handleChange}
          />

          <legend>Password</legend>
          <input value={this.state.passwordInput} 
            name="passwordInput"
            onChange={this.handleChange}
          />



        <button>Submit</button>

      </form>
       
      <p>Already have account? 
        <Link to={"/"}> Login</Link>
      </p>
    </div>
      
    )
  }
}

export default Login;