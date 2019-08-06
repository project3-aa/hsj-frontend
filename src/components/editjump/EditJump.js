import React, { Component } from 'react';
import axios from 'axios';
import { start } from 'repl';

class EditJump extends Component {
  constructor(props){
    super(props);
    this.state = {
      newStart: "",
      newEnd: "",
      newDuration: "",
      newDescription: "", 
      aJump: null,
    }
  }
  
  componentDidMount() {
    axios.get(
        "http://localhost:5000/api/jump/details/" + this.props.match.params.id
      )
      .then(thisSingleJump => {
        this.setState({ aJump: thisSingleJump.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleFormSubmit = (event) => {
    const Start = this.state.Start;
    const End = this.state.End;
    const Duration = this.state.Duration;
    const Description = this.state.Description;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/jump/update/${this.props.aJump._id}`,
     { aStart: Start,
      aEnd: End,
      aDuration: Duration,
      aDescription: Description,
         })
    .then( () => {
        this.props.DoSoemthing();
        this.props.DoSomething();
    })
    .catch( error => console.log(error) )
  }

  
  

}
export default EditJump;