import React from 'react';
import './All_Styles/Stories.css'; 
import eventImage1 from './All_images/exhibition.png';
import eventImage2 from './All_images/seminar__event.png';
import eventImage3 from './All_images/hackathons.jpg'
// import eventImage3 from './image3.jpg';

export const Stories = () => {
  return (
  <div className='event-carousel'>
  <div id="carouselExampleCaptions" class="carousel slide">
    
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src={eventImage1} class="d-block w-100 event-image" alt="img" />
      <div class="carousel-caption d-md-block event-title">
        <h5>Exhibition</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={eventImage2} class="d-block w-100 event-image" alt="img"/>
      <div class="carousel-caption d-md-block event-title">
        <h5>Events</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={eventImage3} class="d-block w-100 event-image" alt="img"/>
      <div class="carousel-caption d-md-block event-title">
        <h5>Hackathons</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};
