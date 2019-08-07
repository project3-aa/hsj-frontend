import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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

        <header id="navOverlay" className="navHeader">
          <div className="navOneLiner typewriter">
            <h3>Be a travler,<br/> not a tourist.</h3>
          </div>
        </header>
            <div id="mid-body" className= "flex-container">
              <span><em>Travel</em><br/>Reimagined</span>
              <span><em>Jump</em><br/>Where To?</span>
              <span><em>Skip</em><br/>To Cities</span>  
              <span><em>Hops</em><br/>Where to go?</span>
           </div>
           
           <Carousel  autoPlay infiniteLoop width="800px" showStatus={false} className="carousel">
                <div>
                    <img src="/images/japan.png" alt="image1"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="/images/tower.png" alt="image2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="/images/venice.png" alt="image3"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

            <div id="mid-body" className= "flex-container">
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