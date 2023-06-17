import React from 'react'
import logo from './Logo.jpg'

export const Header = () => {
    const HeaderStyle = {
        color: "#8F43EE",backgroundColor: "#191825",height:"15%"
    }
    const buttonStyle = {
        color : "#8F43EE",borderColor : "#8F43EE",margin: "0 5px"
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg" style={HeaderStyle}>
         <div className="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="Voluntrix" width="70" height="70" class="navbar-brand" href="#" style={{marginRight: "0"}}/>
            </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{backgroundColor : "#8F43EE"}} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" style={{color : "#7C96AB"}} aria-current="page" href="#">About</a>
            </li>
         </ul>
         <button className="btn btn-outline-primary" style={buttonStyle} type="submit">Login As Volunteer</button>
         <button className="btn btn-outline-primary" style={buttonStyle} type="submit">Login As Organizer</button>
        </div>
       </div>
     </nav>
    </div>
  )
}
