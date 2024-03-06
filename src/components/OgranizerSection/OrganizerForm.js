import React, { useState }   from 'react'
import photo from '../All_images/bg.jpeg';
import { imageDb } from '../config';
import { getDownloadURL, ref, uploadBytesResumable,uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import {auth,provider} from '../config';
import { useUser } from '../UserContext';

const OrganizerForm = ({addPost,handleButtonClick}) => {
   
  //this is the peice of code thourgh which I'm getting all the information regarding the 
  //user logged in
   const userInfo = auth.currentUser;
   const uid = userInfo.uid;
   console.log("user in ograginzerFrom" , userInfo);


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

const [user,setUser]= useState({
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
   setUser({...user, [name]:value })
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
  
   const {name, EventName, Amount, StartDate, CompanyName, Requirement, EndDate}=user; 

   if(name && EventName && Amount && StartDate && CompanyName && Requirement && EndDate){
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
    <div className="container  text-center" style={cardStyle}>
      <div className="row">
        <div className="col-md-5">
          <img style={imgstyle}src={photo} class="card-img-top" alt="..."/>
          <div style={{marginTop  : "30px"}}>
            <h5 style={text} class="card-title">Connect With Us</h5>
            <p style={para} class="card-text">Join us and host your wonderful events</p>
          </div>
        </div>
        <div className="col-md-7">
          <form className='row' style={formStyling}>
            
              <div className="col-md-6">
                
                  <input style={inputBackground}
                      type="text"
                      name="name"
                      id=""
                      className="form-control"
                      placeholder="Your Name"
                      value={user.name}
                      onChange={getUserData}
                  //   required
                  />
                      <input style={inputBackground}
                      type="text"
                      name="EventName"
                      id=""
                      className="form-control"
                      placeholder="Event Name"
                      value={user.EventName}
                      onChange={getUserData}
                  //   required
                  />
                  <input style={inputBackground}
                      type="Date"
                      name="StartDate"
                      id=""
                      className="form-control"
                      placeholder="Start Date"
                      value={user.StartDate}
                      onChange={getUserData}
                      required
                  />
                      <input style={inputBackground}
                      type="Number"
                      name="Amount"
                      id=""
                      className="form-control"
                      placeholder="Amount"
                      value={user.Amount}
                      onChange={getUserData}
                  //   required
                  />
              </div>
              <div className="col-md-6">
                 <input style={inputBackground}
        type="text"
        name="CompanyName"
        id=""
        className="form-control"
        placeholder="Company Name"
        value={user.CompanyName}
        onChange={getUserData}
        //required
    />
        <input style={inputBackground}
        type="text"
        name="Requirement"
        id=""
        className="form-control"
        placeholder="Requirement"
        value={user.Requirement}
        onChange={getUserData}
    //   required
    />
        <input style={inputBackground}
        type="Date"
        name="EndDate"
        id=""
        className="form-control"
        placeholder="End Date"
        value={user.EndDate}
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