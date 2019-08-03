import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
// import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToSignUp = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
    this.service.signup(uName, pWord)
    .then(()=>{
        // this.props.toggleForm('signup');
        this.props.getUser();
    })

  }

  

  render(){
    return(
      <div>
      <Button href="#modal2" className="modal-trigger">
      Signup
      </Button>
      <Modal id="modal2">
      <h5>Sign Up htmlFor An Account</h5>
          <form onSubmit = {this.tryToSignUp}>
            
          <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" value={this.state.usernameInput}
            name="usernameInput"
             onChange={this.handleChange}/>
          <label htmlFor="icon_prefix">Username</label>
        </div>

        <div className="input-field col s6">
          <i className="material-icons prefix">lock</i>
          <input id="icon_lock" type="password" className="validate" value={this.state.passwordInput} 
               name="passwordInput" onChange={this.handleChange}/>
          <label htmlFor="icon_lock">Password</label>
        </div>

        <div className="input-field col s6">
          <i className="material-icons prefix">lock</i>
          <input id="icon_lock2" type="password" className="validate" />
          <label htmlFor="icon_lock2">Password Repeat</label>
        </div>

        <button className="btn-floating btn-large waves-effect waves-light #5CA4A9">Signup</button>
          </form>
      </Modal>
      </div>








      // <form onSubmit = {this.tryToSignUp}>

      //     <h3>Signup htmlFor An Account</h3>

      //     <legend>Username</legend>
      //     <input value={this.state.usernameInput}
      //       name="usernameInput"
      //       onChange={this.handleChange}
      //     />

      //     <legend>Password</legend>
      //     <input value={this.state.passwordInput} 
      //       name="passwordInput"
      //       onChange={this.handleChange}
      //     />



      //   <button>Submit</button>

      // </form>
    )
  }
}

export default Signup;