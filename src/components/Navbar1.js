import React,{ useState } from 'react'
import logo from './Logo.jpg'
import { Link} from 'react-router-dom'
import './All_Styles/Navbar1.css'
import ProfileDrawer from './ProfileDrawer'
import { useUser } from './UserContext'


export const Navbar1 = () => {
     const {user} = useUser();
     console.log('user is',user);
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
   
    const HeaderStyle = {
        color: "#8F43EE",backgroundColor: "#191825",height:"10%"
    }
    const buttonStyle = {
        color : "#8F43EE",borderColor : "#8F43EE",margin: "0 10px"
    }
   
  return (
    <div className='nav1'>
       <nav className="navbar navbar-expand-lg" style={HeaderStyle}>
         <div className="container-fluid">
            <Link class="navbar-brand">
            <img src={logo} alt="Voluntrix" width="70" height="70" class="navbar-brand" to="/" style={{marginRight: "0"}}/>
            </Link>
            <form class="d-flex"  style={{width :  "40%" }} role="search">
      <input class="serarchBar me-3"  type="search" placeholder="Search Your Event" aria-label="Search"/>
      <button class="btn " style={{color : "grey"}} type="submit">Search</button>
    </form>
    <div className='d-flex'>
        {/* <img src={user.photoURL} className='userProileImage'/>
        <button className="btn btn-outline-primary" style={buttonStyle} onClick={() => setIsProfileDrawerOpen(!isProfileDrawerOpen)}>Profile</button>
        <ProfileDrawer isOpen={isProfileDrawerOpen} /> */}
        {/* <button  style={buttonStyle} onClick={() => setIsProfileDrawerOpen(!isProfileDrawerOpen)}>
          <img src={user.photoURL} className='userProileImage' alt="User Profile" />
        </button>
        <ProfileDrawer isOpen={isProfileDrawerOpen} /> */}
        {/* <p>Hello {user.displayName}</p> */}
        <img
          src={user?.photoURL}
          className='userProileImage'
          alt="User Profile"
          onClick={() => setIsProfileDrawerOpen(!isProfileDrawerOpen)}
        />
        <ProfileDrawer isOpen={isProfileDrawerOpen} />
    </div>
       </div>
     </nav>
    </div>



  )
}
