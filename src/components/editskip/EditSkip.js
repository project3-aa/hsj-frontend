import React, {Component} from 'react';
// import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
// import ('./createskip.css');
import 'materialize-css';





class EditSkip extends Component {
  constructor(props){
    super(props)
    this.state = {
      city: this.props.location.state.city,
      arrive: this.props.location.state.arrivedBy,
      duration: this.props.location.state.duration,
      description: this.props.location.state.description,
    }
  }

  // componentDidMount() {
  //   axios.get(
  //       "http://localhost:5000/api/jump/details/" + this.props.match.params.id
  //     )
  //     .then(thisSingleSkip => {
  //       // console.log(thisSingleSkip.data);
  //       this.setState({ 
  //         start: thisSingleSkip.data.city,
  //         end: thisSingleSkip.data.arrive,
  //         duration: thisSingleSkip.data.duration,
  //         description: thisSingleSkip.data.description,
  //      });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    axios.post("http://localhost:5000/api/skip/updateSkip/" + this.props.location.state.skipId, {
      skipCity: this.state.city,
      skipArrive: this.state.arrive,
      skipDuration: this.state.duration,
      skipDescription: this.state.description,
    }, {withCredentials: true})
    .then(()=>{
      this.props.history.push('/viewJump/' + this.props.match.params.id)
    })
    .catch (error => console.log(error))
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]:event.target.value
    })
  }



  render() {
    console.log('PROPS IN THE SKIP',this.props);
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>City</label>
        <input type="text" name="city" value={this.state.city} onChange={this.handleChange}></input>
        <label>ArriveBy</label>
        <input type="text" name="arrive" value={this.state.arrive} onChange={this.handleChange}></input>
        <label>Duration</label>
        <input type="number" name="duration" value={this.state.duration} onChange={this.handleChange}></input>
        <label>Description</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>
        <button className="btn" type="submit">Save Changes</button>
      </form>
    </div>
    )
  }
}

export default EditSkip;
