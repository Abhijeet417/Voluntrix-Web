import React,{useState,useEffect} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config';
import { getDatabase, ref, get } from 'firebase/database';
import '../All_Styles/VolunteerPage.css'
import logo from '../Logo.jpg';

const linkStyle = {
  fontSize: '15px',
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'normal',
  transition: 'font-weight 0.3s ease-in-out',
  marginBottom : '3px'
};



const contentStyle = {
  color : 'white',
  fontSize : '3rem',
  
};
  const handleIconHover = (event) => {
    event.target.style.transform = 'scale(1.2)';
  };

  const handleIconLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };
  const handleTextHover = (event) => {
    event.target.style.fontWeight='bold';
  };

  const handleTextLeave = (event) => {
    event.target.style.fontWeight='normal';
  };



const VolunteerPage = () => {
  
  const navigate = useNavigate();
  const [userAppliedEvents, setUserAppliedEvents] = useState([]);
   const [expandedEvents, setExpandedEvents] = useState({});

   
   const userInfo = auth.currentUser;
   const uid = userInfo.uid;
   
   // Function to toggle the expanded state of an event
   const toggleEvent = (index) => {
     setExpandedEvents((prevState) => ({
       ...prevState,
       [index]: !prevState[index],
     }));
   };

  useEffect(() => {
    const fetchUserAppliedEvents = async () => {
      // Fetch user-specific events from Firebase
      const db = getDatabase();
      const volunteerDataRef = ref(db, 'VolunteerData');
      try {
        const snapshot = await get(volunteerDataRef);
        if (snapshot.exists()) {
          const eventsData = snapshot.val();
          // Convert Firebase object to an array of events
          const eventsArray = Object.keys(eventsData).map((key) => ({
            id: key,
            ...eventsData[key],
          })).filter((post) => post.uid === uid);
          // console.log("eventsarray",eventsArray);
          setUserAppliedEvents(eventsArray);
        } else {
          setUserAppliedEvents([]); // No user-specific events found
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle errors here
      }
    };

    fetchUserAppliedEvents(); // Call the fetchUserAppliedEvents function when the component mounts
  }, []); 

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
  <div className='container-fluid h-100'>
    <div className="row h-100">
     <div className="leftSection">
       <div>
          <img src={logo} alt="Voluntrix" className='logoImage'/>
          <hr className="divider" />
        <div>
        <div className='elementsdiv'>
           <Link to="/Home" style={linkStyle} onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
            <HomeIcon className='icons' onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            Home
          </Link>
        </div>
          <div className='elementsdiv'>
            <Link to="/Search" style={linkStyle}onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}>
              <SearchIcon className='icons' onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}/>
              Search
            </Link>
          </div>
          {/* <div className='elementsdiv'>
            <Link to="/Profile" style={linkStyle}onMouseEnter={handleTextHover}
              onMouseLeave={handleTextLeave}>
              <AccountCircleIcon className='icons' onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}/>
              Profile
            </Link>
          </div> */}
       
          <div>
          <LogoutIcon className='icons'  onClick={logout} style={{color : '#8F43EE',cursor: 'pointer'}}/>
          <span>Logout</span>
            {/* <button onClick={logout} className='btn bt11'>
              Logout
            </button> */}
            
        </div>
      </div>
    </div>
  </div>

      {/* Right section */}
        <div className="rightSection">
           {userAppliedEvents.length > 0 ? (
            userAppliedEvents.map((event, index) => (
              <div style={{padding : "1rem"}}  key={index}>
                <div key={index}>
                    <div className='text-start'>

                      <h2 style={{paddingBottom : "0.5rem"}} >{event.eventName}</h2>
                      <h6  style={{paddingBottom : "0.8rem"}}><span style={{fontWeight : "400",color : "#3D30A2"}}>Role -</span> {event.Role}</h6>
                      <div className='d-flex justify-content-between '>
                        <h6><span style={{fontWeight : "400",color : "#3D30A2"}}>Start Date - </span>{event.StartDate}</h6>
                        <h6><span style={{fontWeight : "400",color : "#3D30A2"}}>End Date - </span>{event.EndDate}</h6>
                      </div>
                  {expandedEvents[index] ? (
                    <div>
                      {/* Additional details to be displayed when expanded */}
                      <p>Location : {event.Location}</p>
                      {/* <p>{event.EventId}</p> */}
                      {/* <p>Additional details here...</p> */}
                    </div>
                  ) : null}
                    </div>
                  {expandedEvents[index] ? (
                    <ArrowDropUpIcon onClick={() => toggleEvent(index)} className='dropIcons'/>
                  ) : (
                    <ArrowDropDownIcon  onClick={() => toggleEvent(index)} className='dropIcons'/>
                  )}
                </div>
                <hr className="divider" />
              </div>
            ))
          ) : (
            <div className="centered-content">
              <p style={contentStyle}>No Participations yet</p>
            </div>
          )}
        </div>
      </div>
   </div>

  );
};

export default VolunteerPage;


// import React from 'react';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link, useNavigate,useLocation } from 'react-router-dom';
// import '../All_Styles/VolunteerPage.css'
// import { useAppliedEvents } from './AppliedEventsContext'; //applied event context was made as i had to
// // deliver the data from home->navbar->profileDrawer->VolunteerPage 
// // thereFore i used this AppliedEventsContext and wrap it in app.js file 

// const headingStyle = {
//   fontFamily: 'Pacifico',
//   fontStyle: 'normal',
//   color: '#8f43ee',
//   marginBottom: '20px',
// };

// const sectionStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   color : "white",
// };

// const iconStyle = {
//   fontSize: '30px',
//   marginRight: '10px',
//   transition: 'transform 0.3s ease-in-out',
// };

// const linkStyle = {
//   fontSize: '15px',
//   textDecoration: 'none',
//   color: 'inherit',
//   fontWeight: 'normal',
//   transition: 'font-weight 0.3s ease-in-out',
//   marginBottom : '3px'
// };



// const contentStyle = {
//   color : 'white',
//   fontSize : '3rem',
  
// };
//   const handleIconHover = (event) => {
//     event.target.style.transform = 'scale(1.2)';
//   };

//   const handleIconLeave = (event) => {
//     event.target.style.transform = 'scale(1)';
//   };
//   const handleTextHover = (event) => {
//     event.target.style.fontWeight='bold';
//   };

//   const handleTextLeave = (event) => {
//     event.target.style.fontWeight='normal';
//   };



// const VolunteerPage = () => {

//  const { appliedEvents } = useAppliedEvents(); // this is applied events context
//  console.log("applied events" , appliedEvents);
 
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate('/');
//   };

//   return (
//   <div className='container-fluid h-100'>
//     <div className="row h-100">
//      <div className="col-md-3 leftSection">
//        <div >
//         <h1 style={headingStyle}>Voluntrix</h1>
//         <hr className="divider" />
//         <div style={sectionStyle}>
//         <div className='elementsdiv'>
//            <Link to="/Home" style={linkStyle} onMouseEnter={handleTextHover}
//             onMouseLeave={handleTextLeave}>
//             <HomeIcon style={iconStyle} onMouseEnter={handleIconHover}
//             onMouseLeave={handleIconLeave}/>
//             Home
//           </Link>
//         </div>
//           <div className='elementsdiv'>
//             <Link to="/Search" style={linkStyle}onMouseEnter={handleTextHover}
//               onMouseLeave={handleTextLeave}>
//               <SearchIcon style={iconStyle} onMouseEnter={handleIconHover}
//               onMouseLeave={handleIconLeave}/>
//               Search
//             </Link>
//           </div>
//           <div className='elementsdiv'>
//             <Link to="/Profile" style={linkStyle}onMouseEnter={handleTextHover}
//               onMouseLeave={handleTextLeave}>
//               <AccountCircleIcon style={iconStyle} onMouseEnter={handleIconHover}
//               onMouseLeave={handleIconLeave}/>
//               Profile
//             </Link>
//           </div>
       
//           <div>
//             <LogoutIcon style={iconStyle} />
//             <button onClick={logout} className='btn bt11'>
//               Logout
//             </button>
//         </div>
//       </div>
//     </div>
//   </div>

//       {/* Right section */}
//         <div className="col-md-9 rightSection">
//           <div >
//           {appliedEvents.length > 0 ? (
//             appliedEvents.map((event, index) => (
//               <div key={index}>
//                 <div className="post-card" key={index}>
//                 <div className='card'>
//                   <div>
//                     <h3>{event.name}</h3>
//                     <span>{event.CompanyName}</span>
//                     <h6>{event.Requirement}</h6>
//                   </div>
//                 </div>
//               </div>
//               </div>
//             ))
//             ) : (
//               <div className="centered-content">
//                 <p style={contentStyle}>No Participations yet</p>
//               </div>
//               )}
//         </div>
//       </div>
//    </div>
//   </div>
//   );
// };

// export default VolunteerPage;

