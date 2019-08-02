import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import ('./createjump.css');


class CreateJump extends Component {
  constructor(props){
    super(props)
    this.state = {
      newStart: "",
      newEnd: "",
      newDuration: 0,
      newDescription: ""
    }
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:5000/api/jump/newJump", {
      startCity: this.state.newStart,
      endCity: this.state.newEnd,
      jumpDuration: this.state.newDuration,
      jumpDescription: this.state.newDescription,
    }, {withCredentials: true})
    .then(() => {
      // this.props.getData();
      //this function updates something
        this.setState({
          newStart: "", 
          newEnd: "", 
          newDuration: 0, 
          newDescription: ""
        });
    })
    .catch (error => console.log(error))
  }



    handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
      console.log(this.state)
  }
  








  render(){

    return(
      <div className="createJump">
        <form onSubmit={this.handleFormSubmit}>
          <label>Start:</label>
          <input type="text" name="newStart" value={this.state.newStart} onChange={ e => this.handleChange(e)}/>
          <label>End:</label>
          <input type="text"  name="newEnd" value={this.state.newEnd} onChange={e => this.handleChange(e)}/>
          <label>Duration:</label>
          <input type="number" name="newDuration" value={this.state.newDuration} onChange={e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)} />
          <button>SUBMIT</button>
        </form>
      </div>
    )
 
  }

}

export default CreateJump; 