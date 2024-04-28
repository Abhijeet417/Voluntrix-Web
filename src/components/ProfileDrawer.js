import React from 'react';
import './All_Styles/ProfileDrawer.css'; 
import { useNavigate , Link } from 'react-router-dom';
import { useUser } from './UserContext';


const ProfileDrawer = ({isOpen}) => {
    const {user} = useUser();
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear()
        // window.location.reload()
        navigate('/');
    }

    return (
        <div className={`profile-drawer ${isOpen ? 'open' : ''}`}>
            <div className="drawer-content">
            <div className="user-info">
                <img src={user.photoURL} alt="User" className="user-image" />
                <div> 
                 <h3 className="user-name">{user.displayName}</h3>
                 <p className='user-email'>{user.email}</p>
                </div>
            </div>
            <hr className="divider" />
           
                {/* <button className="drawer-button">Your Profile</button> */}
                <Link to='/volunteerPage' ><button className="drawer-button">Your Participations</button></Link>
                <button className=' logoutLink' onClick={logout}>Logout</button>
            
            
            <hr className="divider" />
            <div className="space"></div>
            
            <Link to='/organizerpage'><button className="drawer-button1">Wanna organize an event?</button></Link>
            </div>
        </div>
    );
};

export default ProfileDrawer;
