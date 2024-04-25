import React, { useState }   from 'react'
import photo from '../All_images/bg.jpeg';
import { imageDb } from '../config';
import { getDownloadURL, ref, uploadBytesResumable,uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import {auth,provider} from '../config';
import { useUser } from '../UserContext';

const OrganizerForm = ({addPost,handleButtonClick}) => {
   
  //this is the peice of code thourgh which I'm getting all the information regarding the 
  //Event logged in
   const EventInfo = auth.currentUser;
   const uid = EventInfo.uid;
   console.log("Event in ograginzerFrom" , EventInfo);


    const cardStyle={
        padding : "0 3% 2% 0",
        width : "100%",
        backgroundColor:'black',
        borderRadius: '1%',
        border: '2px solid rgb(220, 220, 220)',
    ':focus': {
      border: '4px solid rgba(0, 206, 158, 1)',
    },
    }
    const text={
        color :'#8F43EE',
        marginTop:'10px',
}
const para={
    color:'#7C96AB',
}
const imgstyle={
  marginTop :'40px',
  borderRadius: '10%', 
  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
  width:'80%',
}
const inputBackground={
  marginTop :'15px',
  marginLeft:'5px',
}
const btStyle={
  width:'95%',
  marginTop:'29px',
  
}
const formStyling={
  justifyContent: 'center',
  marginTop : '30px', 
}


const [img,setImg]= useState('');

const [Event,setUser]= useState({
  name:"",
  EventName:"",
  Amount:"",
  StartDate:"",
  CompanyName:"",
  Requirement:"",
  EndDate:"",
 });
  let name,value;
 const getUserData =(event)=>{
   name=event.target.name;
   value=event.target.value;
   setUser({...Event, [name]:value })
 };

 const postData = async (e)=>{
  e.preventDefault();
  //Image upload mechanism
  const imgRef= ref(imageDb,`files/${v4()}`);
  // const post=uploadBytes(imgRef,img);
  // if(post){
  //  setImg('');
  // }

  const metadata = {
    contentType: img.type, // assuming img is the file object from the input
  };
  const snapshot = await uploadBytesResumable(imgRef, img, metadata);
  const downloadURL = await getDownloadURL(snapshot.ref);
  
   const {name, EventName, Amount, StartDate, CompanyName, Requirement, EndDate , numberOfPeople , Location}=Event; 

   if(name && EventName && Amount && StartDate && CompanyName && Requirement && EndDate && numberOfPeople && Location){
    const res =await fetch(
      "https://voluntrix-app-default-rtdb.firebaseio.com//OrganizerData.json",
      {
      method:"POST",
     headers:{
        "Content-Type" : "application/json",
      },
       body:JSON.stringify({
          uid: uid,
          name,
          EventName,
          Amount,
          StartDate,
          CompanyName,
          Requirement,
          EndDate,
          numberOfPeople,
          imageUrl : downloadURL,
         }),
     }
     );
         if(res){
          const postData = {
          uid: uid,
          name,
          EventName,
          Amount,
          StartDate,
          CompanyName,
          Requirement,
          EndDate,
          numberOfPeople,
          Location,
          imageUrl : downloadURL,
        };

        addPost(postData); 
          setUser({
            name:"",
            EventName:"",
            Amount:"",
            StartDate:"",
            CompanyName:"",
            Requirement:"",
            EndDate:"",
            numberOfPeople :"",
            Location :"",
           });
          alert('Data Stored Successfully');
         }
   }else{
    alert('Please Fill The Data');
   }
   handleButtonClick();
 };


  return (
    <>
    <div className="container text-center" style={cardStyle}>
      <div className="row">
        <div className="col-md-5">
          <img style={imgstyle}src={photo} class="card-img-top" alt="..."/>
          <div style={{marginTop  : "30px"}}>
            <h5 style={text} class="card-title">Connect With Us</h5>
            <p style={para} class="card-text">Join us and host your wonderful events</p>
          </div>
        </div>
        <div className="col-md-7">
          <form style={formStyling}>
            
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={inputBackground}
                      type="text"
                      name="name"
                      id=""
                      className="form-control"
                      placeholder="Your Name"
                      value={Event.name}
                      onChange={getUserData}
                  //   required
                  />
                  <input style={inputBackground}
                    type="text"
                    name="CompanyName"
                    id=""
                    className="form-control"
                    placeholder="Company Name"
                    value={Event.CompanyName}
                    onChange={getUserData}
                    //required
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <input style={inputBackground}
                      type="Date"
                      name="StartDate"
                      id=""
                      className="form-control "
                      placeholder="Start Date"
                      value={Event.StartDate}
                      onChange={getUserData}
                      required
                  />
                      <input style={inputBackground}
                      type="Date"
                      name="EndDate"
                      id=""
                      className="form-control "
                      placeholder="End Date"
                      value={Event.EndDate}
                      onChange={getUserData}
                  //   required
                  />     
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <input style={inputBackground}
                  type="text"
                  name="EventName"
                  id=""
                  className="form-control"
                  placeholder="Event Name"
                  value={Event.EventName}
                  onChange={getUserData}
              //   required
                />
                <input style={inputBackground}
                type="text"
                name="Requirement"
                id=""
                className="form-control"
                placeholder="Requirement"
                value={Event.Requirement}
                onChange={getUserData}
            //   required
                />
          </div>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <input style={inputBackground}
                  type="text"
                  name="numberOfPeople"
                  id=""
                  className="form-control"
                  placeholder="Number Of People"
                  value={Event.numberOfPeople}
                  onChange={getUserData}
              //   required
                />
                <input style={inputBackground}
                type="text"
                name="Location"
                id=""
                className="form-control"
                placeholder="Location"
                value={Event.Location}
                onChange={getUserData}
            //   required
                />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

              <input style={inputBackground}
              type="Number"
              name="Amount"
              id=""
              className="form-control"
              placeholder="Amount"
              value={Event.Amount}
              onChange={getUserData}
          //   required
              />
            <input style={inputBackground}
            type="file"
            name="Image"
            id=""
            className="form-control"
            placeholder="Upload image"
            onChange={(e)=>setImg(e.target.files[0])}
        //  required
            />
          </div>          
 <button style={btStyle} type="submit" class="btn btn-outline-success" onClick={postData}>Submit</button> 
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default OrganizerForm;