import React from 'react';
import './All_Styles/Stories.css'; // Import your custom CSS file for styling
// Import your event images here
import eventImage1 from './All_images/exhibition.png';
import eventImage2 from './All_images/seminar__event.png';
import eventImage3 from './All_images/hackathons.jpg'
// import eventImage3 from './image3.jpg';

export const Stories = () => {
  return (
    <div className="event-carousel row">
      <div className="event-container col-lg-4">
        <img src={eventImage1} alt="Event 1" className="event-image" />
        <h2 className="event-title">Exhibitions</h2>
        
      </div>
      <div className="event-container middle-event col-lg-4">
        <img src={eventImage2} alt="Event 2" className="event-image" />
        <h2 className="event-title">Seminars</h2>
        
      </div>
      <div className="event-container col-lg-4">
        <img src={eventImage3} alt="Event 3" className="event-image" />
        <h2 className="event-title">Hackathons</h2>
        
      </div>
    </div>
  );
};
