import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { auth } from "../config";
import { getDatabase, ref, push } from 'firebase/database';
 
// npm i @emailjs/browser
const ParticipationForm = ({func,onApply,event}) => {
   
   const userInfo = auth.currentUser;
   const uid = userInfo.uid;
  // console.log("events in ParticipationForm : " , event);
  const form = useRef();
  console.log(event.id);

  const db = getDatabase();
  const volunteerDataRef = ref(db, 'VolunteerData');

  const sendEmail = (e) => {
    e.preventDefault();   
    
    // Event-specific data from the event prop
    const eventSpecificData = {
      eventName: event.EventName,
      companyName: event.CompanyName,
      amount: event.Amount,
      uid: uid,
      managerName: event.name,
      StartDate : event.StartDate,
      EndDate : event.EndDate,
      Role: event.Requirement,
      EventId : event.id,
    };
    
    const formData = new FormData(form.current);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    // Combine form data and event-specific data into one object
    const volunteerEventData = {
      ...formObject, // Form data
      ...eventSpecificData, // Event-specific data
    };


    emailjs.send('service_xqrvebm', 'template_xllr5lf', volunteerEventData, '-Pg-USbZPOi2mArd6')
  .then((result) => {
    // Sending email succeeded
    // Proceed to store data in Firebase
    push(volunteerDataRef, volunteerEventData)
      .then(() => {
        alert('Message Sent Successfully and Data Stored!');
        e.target.reset();
        onApply();
        func(); // Call the func to update the button text to 'Applied!'
      })
      .catch((error) => {
        console.log('Error storing data:', error);
        alert('Error in storing data');
      });
  })
  .catch((error) => {
    console.log('Error sending email:', error);
    alert('Error in sending email');
  });

  };


  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="Volunteer_name" required />
        <label>Email</label>
        <input type="email" name="Volunteer_email" placeholder="Kindly mention the correct email id" required/>
        <label>Message</label>
        <textarea name="Volunteer_message" required/>
        <input type="submit" value="Send" onClick={func}/>
      </form>
    </StyledContactForm>
  );
};
export default ParticipationForm;
// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
     background:black;
    input {
        margin-left:0.5rem;
        margin-bottom:0.5rem;
      width: 95%;
      height: 35px;
      padding: 7px;
       outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
        margin-left:0.5rem;
      max-width: 100%;
      min-width: 95%;
      width: 95%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      color:#7c96ab;
      margin-left:1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #8f43ee;
      color: white;
      border: none;
    }
  }
`;