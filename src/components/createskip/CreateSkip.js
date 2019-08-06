import React, {Component} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import 'materialize-css';
import { Modal, Button,Select } from 'react-materialize';
import './createskip.css';




class CreateSkip extends Component {
  constructor(props){
    super(props)
    this.state = {
      newSkipCity: "",
      newSkipArrive: "",
      newSkipDuration: 0,
      newDecription: "",
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    axios.post("http://localhost:5000/api/skip/newSkip", {
      skipCity: this.state.newSkipCity,
      skipArrive: this.state.newSkipArrive,
      skipDuration: this.state.newSkipDuration,
      skipDescription: this.state.newSkipDescription,
      theJump: this.props.jumpOwner
    }, {withCredentials: true})
    .then(() => {
      // this.props.getData(); <= we didnt need this because we get the date another way...
      //this function updates something

      // console.log('we just created a skip-=-=-=-=-=-=-=-=-=-');
        this.setState({
          newSkipCity: "", 
          newSkipArrive: "", 
          newSkipDuration: 0, 
          newSkipDescription: ""
        });
    })
    .catch (error => console.log(error))
  }

  handleChange = (event) => {  
    console.log(event.target)
      const {name, value} = event.target;
      console.log(name, value)
      this.setState({[name]: value});
      // console.log(this.state)
  }



  render() {
    console.log(this.state)
    return (
      <div>
          <div>
          <Button href="#modal5" className="modal-trigger">
          Create new Skip
          </Button>
          <Modal id="modal5">   
      <div>
         <h3>CreateSkip</h3>
          <div className="createSkip">

            <form onSubmit={this.handleFormSubmit}>

              <div className="input-field col s12">
                <input id="city" type="text" className="validate" name="newSkipCity" value={this.state.newSkipCity} onChange={ e => this.handleChange(e)} required/>
                <label htmlFor="city">City</label>
              </div>

              {/* <div className="input-field col s12">
                <input id="arriveBy" type="text" className="validate" name="newSkipArrive" value={this.state.newSkipArrive} onChange={e => this.handleChange(e)} required/>
                <label htmlFor="arriveBy">Arrived By</label>
              </div> */}

                 <Select name="newSkipArrive" onChange={this.handleChange} required> 
                  <option value="" active>
                  Arrived By:
                  </option>
                  <option value="Car" >
                  Car
                  </option>
                  <option value="Train" >
                  Train
                  </option>
                  <option value="Boat">
                  Boat
                  </option>
                  </Select>
              
              <div className="input-field col s12">
                <input id="skipDuration" type="number" className="validate" name="newSkipDuration" value={this.state.newSkipDuration} onChange={e => this.handleChange(e)} required/>
                <label htmlFor="skipduration">Duration</label>
              </div>
            
              <div className="input-field col s12">
                <textarea id="textarea3" className="materialize-textarea"  name="newSkipDescription" value={this.state.newSkipDescription} onChange={ e => this.handleChange(e)} required/>
                <label htmlFor="textarea3">Describe Your Adventure</label>
              </div>
             <button className="btn">Add Skip</button>
            </form>
          </div>
        </div>
          </Modal>
          </div>
        </div>


    )
  }
}

export default CreateSkip;
