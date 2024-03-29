import React from 'react'
import Logo from './Logo.jpg'
import './All_Styles/About.css'
export const About = () => {
   
  return (
    <div class="row featurette AboutSection">
      <div class="col-md-6">
        <h2 class="display-4 lh-1" className='AboutHeading'>About Us</h2>
        <p class="lead typewriter-text animated" >Join our app where hosts and volunteers unite to create impactful experiences. Connect with passionate event organizers and dedicated volunteers for meaningful events like weddings, seminars, and conferences.</p>
      </div>
      <div class="col-md-6" >
        <img src={Logo} alt="Voluntrix"  class="slide-in-image" href="#"/>
      </div>
    </div>
  )
}
