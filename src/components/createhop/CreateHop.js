import React, { Component } from 'react'
import axios from 'axios';
import ('./createhop.css')
    
class CreateHop extends Component {
  constructor(props){
    super(props)
    this.state = {
      newPoi: "",
      newArrive: "",
      newDecription: "",
    }
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:5000/api/jump/newJump", {
      newCity: this.state.theAttraction,
      newArrive: this.state.theMot,
      newDescription: this.state.hopDescription,
    }, {withCredentials: true})
    .then(() => {
      // this.props.getData(); <= we didnt need this because we get the date another way...
      //this function updates something
        this.setState({
          newPoi: "",
          newArrive: "",
          newDecription: "",
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
      <div className="createHop">
        <form onSubmit={this.handleFormSubmit}>

        <div className="input-field col s12">
          <input id="poi" type="text" className="validate" name="newPoi" value={this.state.newPoi} onChange={ e => this.handleChange(e)}/>
          <label htmlFor="poi">Point OF Interest</label>
        </div>
        
        <div className="input-field col s12">
         <input id="mot" type="text" className="validate" name="newMot" value={this.state.newArrive} onChange={ e => this.handleChange(e)}/>
          <label htmlFor="mot">Method OF Transportation</label>
        </div>

        <div className="input-field col s12">
          <textarea id="textarea2" className="materialize-textarea" name="hopDescription" value={this.state.hopDescription} onChange={ e => this.handleChange(e)}/>
          <label htmlFor="textarea2">Describe Your Adventure</label>
        </div>
        <button className="btn">Add Hop</button>
        </form>
      </div>
    )
  }
}

export default CreateHop;
