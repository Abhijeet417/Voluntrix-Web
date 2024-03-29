import React from 'react';
import './All_Styles/Event.css'
import ForYou from './All_images/ForYou.png';
import Community from'./All_images/trade_fair.png'
import BIG from './All_images/BIG.png'

export const Events = () => {
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

// import React from 'react';
// import './All_Styles/Event.css'
// import ForYou from './All_images/ForYou.png';
// import Community from'./All_images/trade_fair.png'
// import BIG from './All_images/BIG.png'

// export const Events = () => {
//   return (
//     <div className="c">
//       <div className="features-container" id="features"> 
//         <FeatureBox title="Vision" image={Community} description="Join us in building a solid community." />
//         <FeatureBox title="For you" image={ForYou} description="Showcase your talent here." reverse />
//         <FeatureBox title="What's New" image={BIG} description="Be a part of something BIG" />
//       </div>
//     </div>
//   );
// };

// const FeatureBox = ({ title, image, description, reverse }) => {
//   return (
//     <div className={`feature-box ${reverse ? 'reverse' : ''}`}>
//       <img src={image} alt={title} />
//       <div className="text-content">
//         <h2 className={`heading ${reverse ? 'right-align' : 'left-align'}`}>{title}</h2>
//         <p className={`${reverse ? 'right-align' : 'left-align'}`}>{description}</p>
//       </div>
//     </div>
//   );
// };

