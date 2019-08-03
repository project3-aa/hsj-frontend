import React, {Component} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Hop from '../createhop/CreateHop.js'
import CreateSkip from '../createskip/CreateSkip.js'
import ('./createjump.css');



class CreateJump extends Component {
  constructor(props){
    super(props)
    this.state = {
      newStart: "",
      newEnd: "",
      newDuration: "",
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
      <div>
      <div className="createJump">
        <form onSubmit={this.handleFormSubmit}>

        <div className="input-field col s6">
          <i  id="plane" className="material-icons prefix">airplanemode_active</i>
          <input id="icon_plane" type="text" className="validate" name="newStart" value={this.state.newStart} onChange={ e => this.handleChange(e)}/>
          <label htmlFor="icon_plane">Start</label>
        </div>

        <div className="input-field col s6">
          <i  id="plane" className="material-icons prefix">airplanemode_active</i>
          <input id="icon_plane2" type="text" className="validate" name="newEnd" value={this.state.newEnd} onChange={e => this.handleChange(e)}/>
          <label htmlFor="icon_plane2">End</label>
        </div>

        <div className="input-field col s12">
          <input id="duration" type="number" className="validate" name="newDuration" value={this.state.newDuration} onChange={e => this.handleChange(e)}/>
          <label htmlFor="duration">Duration (in days)</label>
        </div>
     
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)}></textarea>
          <label htmlFor="textarea1">Textarea</label>
        </div>

          <button className="btn waves-effect waves-dark">Create Jump</button>
        </form>
      </div>
          <div className="addButtons">
              <button className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">add</i></button>
              <button className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">add</i></button>
          </div>
        <CreateSkip />
        <Hop/>
     </div>
    )
 
  }

}

export default CreateJump; 