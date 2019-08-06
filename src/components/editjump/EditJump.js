import React, { Component } from 'react';
import axios from 'axios';

class EditJump extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: "",
      end: "",
      duration: "",
      description: "",
    }
  }
  
  componentDidMount() {
    axios.get(
        "http://localhost:5000/api/jump/details/" + this.props.match.params.id
      )
      .then(thisSingleJump => {
        // console.log(thisSingleJump.data);
        this.setState({ 
          start: thisSingleJump.data.start,
          end: thisSingleJump.data.end,
          duration: thisSingleJump.data.duration,
          description: thisSingleJump.data.description,
       });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.props)
    axios.post(`http://localhost:5000/api/jump/updateJump/${this.props.match.params.id}`,
     {  startCity: this.state.start,
      endCity: this.state.end,
      jumpDuration: this.state.duration,
      jumpDescription: this.state.description,
         })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render(){
    return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Start</label>
        <input type="text" name="start" value={this.state.start} onChange={this.handleChange}></input>
        <label>End</label>
        <input type="text" name="end" value={this.state.end} onChange={this.handleChange}></input>
        <label >duration</label>
        <input type="number" name="duration" value={this.state.duration} onChange={this.handleChange}></input>
        <label > description</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>
        <button className="btn" type="submit">Save Changes</button>
      </form>
    </div>
    )
  }
  
  

}
export default EditJump;