import React, { Component } from 'react'
import axios from 'axios';

class EditHop extends Component {
  constructor(props){
    super(props)
    this.state = {
      poi:this.props.location.state.POI,
      arrivedBy: this.props.location.state.arrivedBy,
      description: this.props.location.state.description,
    }
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    axios.post("http://localhost:5000/api/hop/updateHop/" + this.props.location.state.hopId, {
      poi: this.state.poi,
      arrivedBy: this.state.arrivedBy,
      description: this.state.description,
    }, {withCredentials: true}) 
    .then(()=>{
      this.props.history.push('/viewJump/' + this.props.match.params.id)
    })
    .catch (error => console.log(error))
  }

  handleChange = (event) => { 
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    console.log(this.state);
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Point of Interest</label>
        <input type="text" name="poi" value={this.state.poi} onChange={(e)=>{this.handleChange(e)}}></input>
        <label>ArriveBy</label>
        <input type="text" name="arrivedBy" value={this.state.arrivedBy} onChange={(e)=>{this.handleChange(e)}}></input>
        <label>Description</label>
        <input type="text" name="description" value={this.state.description} onChange={(e)=>{this.handleChange(e)}}></input>
        <button className="btn" type="submit">Save Changes</button>
      </form>
    </div>
    )
  }
}

export default EditHop;
