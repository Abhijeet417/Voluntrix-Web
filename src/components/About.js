import React from 'react'
import Logo from './Logo.jpg'
import './All_Styles/About.css'
export const About = () => {
   
  return (
    <div class="row featurette parent-div " style={{backgroundColor : "black"}} id='about'>
      
      <div class="col-md-6">
        <h2 class="display-4 lh-1" style={{margin : "150px 0 0 100px",fontWeight:"lighter",marginBottom : "30px",textAlign : "left",color:"#8F43EE"}}>About Us</h2>
        <p class="lead typewriter-text animated" style={{margin : "10px 0 0 100px",textAlign : "left",fontSize:"1.25rem",color:"#7C96AB"}}>Join our app where hosts and volunteers unite to create impactful experiences. Connect with passionate event organizers and dedicated volunteers for meaningful events like weddings, seminars, and conferences.</p>
      </div>
      <div class="col-md-6 " style={{padding: "25px 0 15px 0"}}>
        <img src={Logo} alt="Voluntrix"  class="slide-in-image" style={{filter: 'brightness(1.1)'}} href="#" />
      </div>
    </div>
  )
}
