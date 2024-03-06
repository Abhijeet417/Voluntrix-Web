import React, { useState } from 'react';
import './All_Styles/Signup.css'
import Logo from '../components/All_images/CropedLogo.jpg'
import { useEffect,useRef} from "react";
import { Link,useNavigate } from 'react-router-dom'
import { auth,provider } from './config'
import {signInWithPopup} from "firebase/auth";
import Home from './VolunteerSection/Home';

const SignUpPage = () => {
  const [showPasswordField, setShowPasswordField] = useState(false);

  const togglePasswordField = () => {
    setShowPasswordField(!showPasswordField);
  };

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

  return (
    <div className="ct container">
      <div className="row">
        <div className=" left-section col-md-6">
          {/* <h2>Left Section</h2> */}
          <div>
            <img src={Logo} className='Lg' alt="Sign Up" height="300" width="300" />
          </div>
          <button className="bt" onClick={togglePasswordField}>Already a User , <a style={{Color : "black",fontWeight : "Bold"}}>Login</a></button>
          {showPasswordField && (
            <div>
              <input className='ip' type="email" placeholder="Email" />
              <input className='ip' type="password" placeholder="Password" />
            </div>
          )}
           {value?<Home/> : 
           <Link className="bt" onClick={handleClick} type="submit">Signup with Google</Link>
         }
        </div>

        {/* right section */}
        <div className=" col-md-6" style={{marginTop: "1.2rem"}}>
        {/* <h2>Your Preferences</h2> */}
            <div className='right-section'>
            <div>
                <input className='ipt' type="text" placeholder="Name" />
            </div>
            <div>
                <input className='ipt' type="email" placeholder="Email"/>
            </div>
            <div>
                <input className='ipt' type="password" placeholder="Set Your Password"/>
            </div>
            <div>
                <input className='ipt' type="password" placeholder="Confirm Password"/>
            </div>
            
            <div className='row'>
              <div className='col-md-6'>
          <button
            className="ipt  dropdown-toggle dropdown-toggle-no-caret" // Add custom class
            type="text"
            id="roleDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"

          >
            Role
          </button>
          <ul className="dropdown-menu" aria-labelledby="roleDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Organiser
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Volunteer
              </a>
            </li>
          </ul>
        </div>
            <div className='col-md-6'>
          <button
            className="ipt  dropdown-toggle dropdown-toggle-no-caret" // Add custom class
            type="text"
            id="roleDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"

          >
            Preferences
          </button>
          <ul className="dropdown-menu" aria-labelledby="roleDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Hackathons
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Parties
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Seminars
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* /Second row */}
            <div className='row'>
              <div className='col-md-6'>
              <button
                className="ipt  dropdown-toggle dropdown-toggle-no-caret" // Add custom class
                type="text"
                id="roleDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                Level
              </button>
              <ul className="dropdown-menu" aria-labelledby="roleDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <button
                className="ipt  dropdown-toggle dropdown-toggle-no-caret" // Add custom class
                type="text"
                id="roleDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                Level
              </button>
              <ul className="dropdown-menu" aria-labelledby="roleDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
                <button type="button" className="btn submitButton">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
