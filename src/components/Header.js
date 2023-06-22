import React from 'react'
import logo from './Logo.jpg'
import { useEffect, useState} from "react";
import { Link,useNavigate } from 'react-router-dom'
import { auth,provider } from './config'
import {signInWithPopup} from "firebase/auth";
import  Home  from './VolunteerSection/Home';
export const Header = () => {
  const navigate = useNavigate();
   const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate('/home')
        })
    }
     useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    const HeaderStyle = {
        color: "#8F43EE",backgroundColor: "#191825",height:"15%"
    }
    const buttonStyle = {
        color : "#8F43EE",borderColor : "#8F43EE",margin: "0 10px"
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg" style={HeaderStyle}>
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
            <Link className="nav-link active" style={{color : "#7C96AB"}} aria-current="page" to="#">Download</Link>
            </li>
         </ul>
         {value?<Home/> : 
           <Link className="btn btn-outline-primary" style={buttonStyle} onClick={handleClick} type="submit">Login</Link>
         }
        </div>
       </div>
     </nav>
    </div>
  )
}
