import React, { useState,useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MultipleSelect from './Multipleselect';
import OrganizerForm from './OrganizerForm';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, get, push } from 'firebase/database';
import {auth} from '../config';
import '../All_Styles/OrganizerPage.css';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const headingStyle = {
  fontFamily: 'Pacifico',
  fontStyle: 'normal',
  color: '#8f43ee',
  marginBottom: '20px',
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color : "white",
};

const iconStyle = {
  fontSize: '30px',
  marginRight: '10px',
  transition: 'transform 0.3s ease-in-out',
};

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
  const handleTextHover = (event) => {
    event.target.style.fontWeight='bold';
  };

  const handleTextLeave = (event) => {
    event.target.style.fontWeight='normal';
  };


const Organizerpage = () => {
  
  const userInfo = auth.currentUser;
  const uid = userInfo.uid;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const handleButtonClick = () => {
      setOpen(false);
    };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const navigate = useNavigate();

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

      <div className="col-md-3 leftSectionStyle">
      <div className=''>
        
        <h1 style={headingStyle}>Voluntrix</h1>
          {/* <div className="user-info">
                <img src={userInfo.photoURL} alt="User" className="user-image" />
                <div> 
                <h3 className="user-name">{userInfo.displayName}</h3>
                <p className='user-email'>{userInfo.email}</p>
                </div>
              </div> */}
         <hr className="divider" />
      <div style={sectionStyle}>
        <div className='elementsDiv'>
           <Link to="/Home" style={linkStyle} onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
            <HomeIcon style={iconStyle} onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            Home
          </Link>
        </div>
        <div className='elementsDiv'>
          <Link to="/Search" style={linkStyle}onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
            <SearchIcon style={iconStyle} onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            Search
          </Link>
        </div>
        <div className='elementsDiv'>
          <Link to="/Profile" style={linkStyle}onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
            <AccountCircleIcon style={iconStyle} onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}/>
            Profile
          </Link>
        </div>
        <div className='elementsDiv'>
          <div style={AddOuter}onMouseEnter={handleIconHover}onMouseLeave={handleIconLeave} >
            {/* <AddIcon onClick={toggleForm} style={AddStyle} onMouseEnter={handleIconHover}onMouseLeave={handleIconLeave}/> */}
            <AddIcon onClick={handleClickOpen} style={AddStyle} onMouseEnter={handleIconHover}onMouseLeave={handleIconLeave}/>
          </div>
          <div style={{ cursor: 'pointer', ...linkStyle }} onMouseEnter={handleTextHover}
            onMouseLeave={handleTextLeave}>
            Post Your Event
          </div>
        </div>
        <MultipleSelect />
        <div>
          <LogoutIcon style={iconStyle} />
          <button onClick={logout} className='btn bt1'>
            Logout
          </button>
      </div>
      </div>
      </div>
      </div>
      {/* Right section */}
      <div className="col-md-9 rightSectionStyle">
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
            <div className="row text-start ">
              {posts.map((post, index) => (
                <>
                  <div style={{padding : "2rem"}}>
                    <div  key={index}>
                      <h3>{post.EventName}</h3>
                      <h6 style={{color : "#8F43EE"}}><span style={{fontWeight : "lighter",color : "black"}}> Company - </span>{post.CompanyName}</h6>
                      <h6><span style={{fontWeight : "lighter"}}> Requirement - </span>{post.Requirement}</h6>
                    </div>
                  </div>
                      <hr className="divider" />
                 </>
              ))}
          </div>
        </div>
      </div>
      </div>
   </div>
  );
};

export default Organizerpage;
