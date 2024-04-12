import React from 'react'
import './All_Styles/Contact.css'

export const Contact = () => {
  return (

    <div className="contact-us-footer" id='contact'>
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <form className='contact-form'>
              <div className="mb-3">
                <input type="text" placeholder='Name' className="form-control form-details" />
              </div>
              <div className="mb-3">
                <input type="email" placeholder='Email' className="form-control form-details" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="mb-3">
                  <input type="text" placeholder='Message' className="form-control form-details message" />
              </div>
              <button type="submit" className="btn form-details contact-button" style={{borderColor : "transparent",backgroundColor:"Black",color:"#8F43EE",fontWeight :"bold"}}>Submit Your Response</button>
            </form>
          </div>
          <div className="col-lg-4 col-md-6">
                <h2 class="ContactHeading">Connect<br/>with<br/>Team</h2>
          </div>
        </div>
    </div>
  )
}
