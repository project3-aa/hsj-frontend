import React, {Component} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import ('./createskip.css');



class CreateSkip extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCity: "",
      newArrive: "",
      newDuration: 0,
      newDecription: "",
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:5000/api/jump/newJump", {
      newCity: this.state.skipCity,
      newArrive: this.state.skipArrive,
      newDuration: this.state.skipDuration,
      newDescription: this.state.skipDescription,
    }, {withCredentials: true})
    .then(() => {
      // this.props.getData(); <= we didnt need this because we get the date another way...
      //this function updates something
        this.setState({
          newCity: "", 
          newArrive: "", 
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



  render() {
    return (
      <div className="createSkip">
      <form onSubmit={this.handleFormSubmit}>
        <label>City:</label>
        <input type="text" name="skipCity" value={this.state.skipCity} onChange={ e => this.handleChange(e)}/>
        <label>Arrived By:</label>
        <input type="text"  name="skipArrive" value={this.state.skipArrive} onChange={e => this.handleChange(e)}/>
        <label>Duration:</label>
        <input type="number" name="skipDuration" value={this.state.skipDuration} onChange={e => this.handleChange(e)}/>
        <label>Description:</label>
        <textarea name="skipDescription" value={this.state.skipDescription} onChange={ e => this.handleChange(e)} />
        <button className="btn">Add Skip</button>
      </form>
    </div>
    )
  }
}

export default CreateSkip;
