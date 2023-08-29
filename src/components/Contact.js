import React from 'react'
import './All_Styles/Contact.css'

export const Contact = () => {
  return (

    <div className="contact-us-footer" style={{backgroundColor : "#7C96AB"}}>
      <div className="container">
        <div className="row">
          <h2 className='AboutHeading'>Connect With Team</h2>
          <div className="col-md-6 ">
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
              <button type="submit" className="btn form-details" style={{borderColor : "transparent",backgroundColor:"Black",color:"#f4efef",fontWeight :"bold"}}>Submit Your Response</button>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Contact Details</h2>
            {/* Add your contact details here */}
          </div>
        </div>
      </div>
    </div>
  )
}
