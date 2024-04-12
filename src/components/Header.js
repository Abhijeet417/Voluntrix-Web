import React from 'react'
import logo from './Logo.jpg'
import { useEffect, useState,useRef} from "react";
import { Link,useNavigate } from 'react-router-dom'
import { auth,provider } from './config'
import {signInWithPopup} from "firebase/auth";
import  Home  from './VolunteerSection/Home';

import { useUser } from './UserContext';



export const Header = () => {

  const navigate = useNavigate();
   const {user,setUser} = useUser();
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((result)=>{
            const user = result.user;
            setUser(user);
            //console.log("user data" , user);
            navigate('/home')
        })
    }
    useEffect(()=>{
        setUser(localStorage.getItem('email'))
    })
    const HeaderStyle = {
        color: "#8F43EE",backgroundColor: "#191825",height:"10%"
    }
    const buttonStyle = {
        color : "#8F43EE",borderColor : "#8F43EE",margin: "0 25px"
    }
    const button1Style = {
        backgroundColor : "#8F43EE",borderColor :"black",color : "black",margin: "0 10px"
    }
  return (
    <div style={HeaderStyle}>
       <nav className="navbar navbar-expand-lg" >
         <div className="container-fluid">
            <Link class="navbar-brand" to="/">
            <img src={logo} alt="Voluntrix" width="70" height="70" class="navbar-brand" to="/" style={{marginRight: "0"}}/>
            </Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{backgroundColor : "#8F43EE"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" style={{color : "#7C96AB"}} aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" style={{color : "#7C96AB"}} aria-current="page" href="#features">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" style={{color : "#7C96AB"}} aria-current="page" href="#contact">Contact</a>
            </li>
         </ul>
        
        {/* <Link to="/signup" // Use the correct path to your sign-up page
              className="btn btn-outline-primary"
              style={button1Style}
              type="submit"
            >
              Sign Up
            </Link> */}
         {user?<Home/> : 
           <Link className="btn btn-outline-primary" style={buttonStyle} onClick={handleClick} type="submit">Login</Link>
         }
        </div>
       </div>
     </nav>
    </div>



  )
}
