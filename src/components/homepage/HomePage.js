import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import ('./homepage.css');


class HomePage extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }





  render(){

    return(
      <div>

        <header id="navOverlay" class="navHeader">
          <div class="navOneLiner">
            <h3> We'll tell you what trip to jump to next.</h3>
          </div>
        </header>
           
            <div id="mid-body" class= "flex-container">
            <span><em>Travel</em><br/>Reimagined</span>
            <span><em>Jump</em><br/>Where To?</span>
            <span><em>Skip</em><br/>To Cities</span>  
            <span><em>Hops</em><br/>Where to go?</span>
        </div>
      
      </div>
    )

  }

}

export default HomePage; 