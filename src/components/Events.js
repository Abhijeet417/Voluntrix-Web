import React from 'react';
// import show from './image1.jpg';
// import show2 from './image2.webp';
// import show3 from './image3.jpg';

export const Events = () => {
  const EventStyle = {
    height: "500px",
    backgroundColor: "black",
  };
  const slideStyle = {
    width: "100%",
    height: "50%" 
  };
  const imageStyle = {
    width: "100%",
    height: "500px",
    objectFit: 'contain'
  };

  return (
         <div class="row">
      <div class="col-lg-4">
        <img src=".." alt="First Feature" class="bd-placeholder-img " width="140" height="140"/>
        <h2 class="fw-normal">Vision</h2>
        <p>Join us in building an solid community.</p>
        
      </div>
      <div class="col-lg-4">
        <img src=".." alt="Secound Feature" class="bd-placeholder-img " width="140" height="140"/>
        <h2 class="fw-normal">For you</h2>
        <p>Showcase you talent here.</p>
        
      </div>
      <div class="col-lg-4">
        <img src=".." alt="Third Feature" class="bd-placeholder-img " width="140" height="140"/>
        <h2 class="fw-normal">What's New</h2>
        <p>Be a part of something BIG.</p>
      </div>
    </div>
    );
};
