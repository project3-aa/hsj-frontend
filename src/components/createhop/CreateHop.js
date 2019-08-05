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
    axios.post("http://localhost:5000/api/hop/newHop", {
      theAttraction: this.state.newHopAttraction,
      theMot: this.state.newHopMot,
      hopDescription: this.state.newHopDescription,
    }, {withCredentials: true})
    .then(() => {
      // this.props.getData(); <= we didnt need this because we get the date another way...
      //this function updates something
        this.setState({
          newHopAttraction: "",
          newHopMot: "",
          newHopDescription: "",
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
        <h3> CreateHop </h3>
        <form onSubmit={this.handleFormSubmit}>

        <div className="input-field col s12">
          <input id="poi" type="text" className="validate" name="newHopAttraction" value={this.state.newHopAttraction} onChange={ e => this.handleChange(e)} required/>
          <label htmlFor="poi">Point OF Interest</label>
        </div>
        
        <div className="input-field col s12">
         <input id="mot" type="text" className="validate" name="newHopMot" value={this.state.newHopMot} onChange={ e => this.handleChange(e)} required/>
          <label htmlFor="mot">Method OF Transportation</label>
        </div>

        <div className="input-field col s12">
          <textarea id="textarea2" className="materialize-textarea" name="newHopDescription" value={this.state.newHopDescription} onChange={ e => this.handleChange(e)} required/>
          <label htmlFor="textarea2">Describe Your Adventure</label>
        </div>
        <button className="btn">Add Hop</button>
        </form>
      </div>
    )
  }
}

export default CreateHop;
