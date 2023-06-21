import React from 'react'
import Logo from './Logo.jpg'
export const About = () => {
  return (
    <div class="row featurette " >
      
      <div class="col-md-6">
        <h2 class="display-4 fw-bold lh-1" style={{margin : "100px 0 0 100px",textAlign : "left"}}>About Us</h2>
        <p class="lead" style={{margin : "10px 0 0 100px",textAlign : "left"}}>Passionate event management experts dedicated to crafting unforgettable experiences. We handle every detail with precision and creativity, ensuring seamless execution for your special occasions.</p>
      </div>
      <div class="col-md-6 " style={{padding: "25px 0 15px 0"}}>
        <img src={Logo} alt="Voluntrix" width="450" height="450"  href="#" />
      </div>
    </div>
  )
}
