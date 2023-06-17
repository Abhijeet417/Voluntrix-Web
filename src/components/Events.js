import React from 'react';
import show from './image1.jpg';
import show2 from './image2.webp';
import show3 from './image3.jpg';

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
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner" style={EventStyle}>
          <div className="carousel-item active" style={slideStyle}>
            <img src={show} style={imageStyle} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item" style={slideStyle}>
            <img src={show2} style={imageStyle} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" style={slideStyle}>
            <img src={show3} style={imageStyle} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
