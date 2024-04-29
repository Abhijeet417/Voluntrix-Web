import React, { useState,useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import logo from '../Logo.jpg'; 
import OrganizerForm from './OrganizerForm';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, get, push ,remove, } from 'firebase/database';
import {auth} from '../config';
import '../All_Styles/OrganizerPage.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddOuter = {
    height : '50px',
    width : '50px',
    border: '1px solid #8F43EE',
    borderRadius : '5px',
    padding : '5px',
    marginBottom  : '20px',
};
const AddStyle = {
  fontSize: '40px',
  transition: 'transform 0.3s ease-in-out',
  fontWeight : '1000',
  color : '#8F43EE'
}
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

const Organizerpage = () => {
  
  const userInfo = auth.currentUser;
  const uid = userInfo.uid;
  // console.log("user" , userInfo);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [volunteers, setVolunteers] = useState({}); // State to hold volunteers
  const navigate = useNavigate();

  const fetchVolunteers = async (postId) => {
    const db = getDatabase();
    const volunteerDataRef = ref(db, 'VolunteerData');

    try {
      const snapshot = await get(volunteerDataRef);
      if (snapshot.exists()) {
        const volunteerData = snapshot.val();
        const volunteersArray = Object.values(volunteerData).filter(volunteer => volunteer.EventId === postId);
        console.log('Volunteers:', volunteersArray);
        setVolunteers({ ...volunteers, [postId]: volunteersArray });
      } else {
        console.log('No data found in VolunteerData');
        setVolunteers({ ...volunteers, [postId]: [] });
      }
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  };

  // Function to toggle the expanded state of an event
  const toggleEvent = (index) => {
    setExpandedEvents((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    // Fetch volunteers when expanding event
    if (!expandedEvents[index]) {
      const postId = posts[index].id;
      console.log("postId", postId);
      fetchVolunteers(postId);
    }
  };

  const handleButtonClick = () => {
      setOpen(false);
    };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      const fetchData = async () => {
      const db = getDatabase();
      const organizerDataRef = ref(db, 'OrganizerData');
      try {
        const snapshot = await get(organizerDataRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const postsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          })).filter((post) => post.uid === uid);
          setPosts(postsArray);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors here
      }
    };

    fetchData();
  }, []);


  const addPost = (postData) => {
    const db = getDatabase();
    const organizerDataRef = ref(db, 'OrganizerData');
    push(organizerDataRef, postData);

    // Update local state with the new post
    setPosts([...posts, postData]);
  };
   
  // console.log("posts : ",posts);
  const deletePost = (postId) => {
    const db = getDatabase();
    const organizerDataRef = ref(db, `OrganizerData/${postId}`);
    remove(organizerDataRef);
    setPosts(posts.filter(post => post.id !== postId));
  };

  const openDeleteConfirmation = (postId) => {
    // console.log("postId : ",postId);
    setPostIdToDelete(postId);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteConfirmation = () => {
    deletePost(postIdToDelete);
    closeDeleteConfirmation();
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
  <div className='container-fluid h-100'>
    <div className="row h-100">

      <div className="leftSectionStyle">
      <div>
         <img src={logo} alt="Voluntrix" className='logoImage'/>
         <hr className="divider" />
      <div>
        <div className='elementsDiv'>
           <Link to="/Home" style={linkStyle} >
            <HomeIcon className='icons' onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            <span>Home</span>
          </Link>
        </div>
        <div className='elementsDiv'>
          <Link to="/Search" style={linkStyle}>
            <SearchIcon className='icons' onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            <span>Search</span>
          </Link>
        </div>
        {/* <div className='elementsDiv'>
          <Link to="/Profile" style={linkStyle}onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
            <AccountCircleIcon className='icons' onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            <span>Profile</span>
          </Link>
        </div> */}
        <div className='elementsDiv' style={{cursor: 'pointer'}}>
          <div style={AddOuter}>
            {/* <AddIcon onClick={toggleForm} style={AddStyle} onMouseEnter={handleIconHover}onMouseLeave={handleIconLeave}/> */}
            <AddIcon onClick={handleClickOpen} style={AddStyle} onMouseEnter={handleIconHover}onMouseLeave={handleIconLeave}/>
          </div>
          <div style={{...linkStyle }}>
            <span>Post Your Event</span>
          </div>
        </div>
        <div>
          <LogoutIcon className='icons'  onClick={logout} style={{color : '#8F43EE',cursor: 'pointer'}}/>
          <span>Logout</span>
          {/* <button onClick={logout} className='btn bt1'>
            Logout
          </button> */}
      </div>
      </div>
      </div>
      </div>
      {/* Right section */}
      <div className="rightSectionStyle">
      <div className=' '>
        {/* {isFormOpen && <OrganizerForm addPost={addPost} />}  */}
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        >
        <OrganizerForm addPost={addPost} handleButtonClick={handleButtonClick}/>
      
      </Dialog>
          {(!isFormOpen && posts.length === 0) &&  
              <div className="centered-content">
                <p style={contentStyle}>No Post yet</p>
              </div>} 
            <div className="row">
              {posts.map((post, index) => (
                <>
                  <div style={{padding : "2rem"}}>
                    <div  key={index} className='text-start '>
                      <h3>{post.EventName}</h3>
                      <h6 style={{color : "#8F43EE"}}><span style={{fontWeight : "lighter",color : "black"}}> Company - </span>{post.CompanyName}</h6>
                      <h6><span style={{fontWeight : "lighter"}}> Requirement - </span>{post.Requirement}</h6>
                   {expandedEvents[index] ? (
                        <div>
                          {/* Additional details to be displayed when expanded */}
                         <div className='d-flex justify-content-lg-between flex-column flex-lg-row'>
                            <p><strong style={{color : '#8F43EE'}}>Your Post Id:</strong> {post.id}</p>
                            <p style={{color: 'black',fontWeight : "500"}}>
                                <DeleteIcon onClick={() => openDeleteConfirmation(post.id)} style={{ cursor: 'pointer', fontSize: '1.3rem' }} /> {/* Delete button */}
                                - Delete this event
                            </p>
                        </div>
                        <div className='text-center'>
                             <strong style={{fontSize : "1.4rem"}}>List of volunteers </strong>
                            <ul className="list-unstyled">
                              {volunteers[post.id] && volunteers[post.id].map((volunteer, idx) => (
                                <li key={idx} className='volunteers-list justify-content-center'>
                                  <p><strong style={{color : "#8F43EE"}}>{volunteer.Volunteer_name}</strong> - {volunteer.Volunteer_email}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
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
                 </>
              ))}
          </div>
        </div>
      </div>
      </div>
      {/*Delete Confirmation Dialog */}
      <div className={`delete-confirmation-container ${deleteConfirmationOpen ? 'active' : ''}`}>
        <Dialog
          open={deleteConfirmationOpen}
          onClose={closeDeleteConfirmation}            
          PaperProps={{ style: { backgroundColor: 'black' } }} // Set background color to black
        >
          <DialogTitle style={{ color: 'white' }}>Are you sure you want to delete this event?</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ color: '#7C96AB' }}>
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDeleteConfirmation} style={{color : '#8F43EE'}}>
              No
            </Button>
            <Button onClick={handleDeleteConfirmation} style={{color : '#8F43EE'}}>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
   </div>
  );
};

export default Organizerpage;
