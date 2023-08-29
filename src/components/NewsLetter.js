import React from 'react'

export const NewsLetter = () => {
  return (
    <div style={{backgroundColor:"#8F43EE",textAlign:"left",display:"flex"}} id="newsletter" class="p-5">
        <div class="container-fluid ">
          <h1 class="display-5 fw-bold">Subscribe to our Newsletter!</h1>
          <p class="col-md-8 "style={{color:"white",fontSize:"1rem",marginBottom:"0"}}>Here's our newsletter which gives you information about our offers, promotion and lots more.</p>
          <p class="col-md-8 "style={{color:"white",fontSize:"1rem"}}> Subscribe simply by clicking on the  button and then giving your name and Email to us.</p>
          <button style={{alignSelf: 'flex-end'}} class="btn btn-primary btn-lg btn-dark " type="button"><a class="nav-link" target="_blank" href="">Click to Subscribe</a></button>
        </div>
      </div>
  )
}
