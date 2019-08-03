import React, {Component} from 'react';


class DisplaySkip extends Component{

  constructor(props){
    super(props)
    this.state = {
      theSkip: this.props.theSkipInfo,
      editable: false
    }
  }

  returnHops = () =>{
    if(this.props.theSkipInfo.hops){
    this.props.theSkipInfo.hops.map((skip, index) =>{
      return <p>{skip.city}</p>
    })
    } else {
      return null
    }
  }

  renderEditButton = () =>{
    console.log('THere should be an edit buton here===========',this.props.theUser,  this.props.theSkipInfo, this.props.theUser._id);
    if(this.props.theUser && this.props.theSkipInfo.ownerId === this.props.theUser._id){
      return <button>edit me</button>
    } else {
      return null
    }
  }

  render(){
    console.log('this is the skip info----',this.props.theSkipInfo) //<<<<this returns info!!!!!!
    // console.log('the state-----',this.state);

    return(

      <div>
        {this.renderEditButton()}
        <h5>{this.props.theSkipInfo.city}</h5>
        {/* {this.returnHops()} */}
      </div>
    )
  }
}

export default DisplaySkip;