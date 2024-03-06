import React from 'react';
import './All_Styles/Event.css'
import ForYou from './All_images/ForYou.png';
import Community from'./All_images/trade_fair.png'
import BIG from './All_images/BIG.png'

export const Events = () => {
  // const EventStyle = {
  //   height: "500px",
  //   backgroundColor: "black",
  // };
  // const slideStyle = {
  //   width: "100%",
  //   height: "50%" 
  // };
  // const imageStyle = {
  //   width: "100%",
  //   height: "100px",
  //   objectFit: 'contain'
  // };

  return (
      <div class="row features-container" id='features'> 
      <div class="col-lg-4">
        <h2 class="heading">Vision</h2>
        <img src={Community} alt="First Feature" class="bd-placeholder-img " width="180" height="105"/>
        <p>Join us in building an solid community.</p>
        
      </div>
     <div class="col-lg-4">
        <h2 class="heading">For you</h2>
        <img src={ForYou} alt="Secound Feature" class="bd-placeholder-img " width="120" height="120"/>
        <p style={{paddingTop : "5px"}}>Showcase you talent here.</p>
        
      </div>
      <div class="col-lg-4">
        <h2 class="heading">What's New</h2>
        <img src={BIG} alt="Third Feature" class="bd-placeholder-img " width="180" height="105"/>
        <p>Be a part of something <span className="highlight">BIG</span></p>
      </div>
    </div>
    );
};

