// import React, { useState } from 'react';
// import { toast,ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 
// const Cards = (props) => {
     

//     const stylecard ={
//         height:'auto',
//        width:'100%',
//     }
//     const card_img ={
//         width:'100%',
//         height:'235px',
//         borderTopLeftRadius:'12px',
//         borderTopRightRadius:'12px',
//     }
//     const card_info={
//         backgroundColor:'#fff',
//         borderTopLeftRadius:'12px',
//         borderTopRightRadius:'12px',
//         padding:'16px 24px 24px 24px',
//     }
//     const card_category={
//         textTransform:'uppercase',
//         fontSize:'13px',
//         letterSpacing:'2px',
//         fontWeight:'500',
//         color:'#868686',
//         backgroundColor:'#fff',
//         fontFamily:'"raleway", sans-serif',
//     }
//     const card_title ={
//         marginTop:'5px',
//         marginBottom:'10px',
//         textTransform:'capitalize',
//         backgroundColor:'#fff',
//         fontFamily:'"raleway", sans-serif',
//     }
//     const card= {
//       //  display:'flex',
//       //   justifyContent: 'space-between',
//         margin:'6%',
//          transition: 'all 0.4s cubic-bezier(0.175,0.885,0,1)',
//        backgroundColor:"#fff",
//         borderRadius:'12',
//          width:'21.25%',
//         boxShadow:'0px 13px 10px -7px rgba(0,0,0,0.1)',
//         float: 'left',
//         "&:hover": {
//             boxShadow: '0px 30px 18px -8px rgba(0,0,0,0.1)',
//             transform:'scale(1.05,1.05)',
//           } 
//         }
 
//   // const [applied, setApplied] = useState(false);

//   // const handleApplyClick = () => {
//   //   toast.success('Congratulations you have successfully applied', {
//   //     position: "bottom-center",
//   //     autoClose: 3000,
//   //     hideProgressBar: false,
//   //     closeOnClick: true,
//   //     pauseOnHover: true,
//   //     draggable: true,
//   //     progress: undefined,
//   //     theme: "dark",
//   //   });
//   //   setApplied(true);
//   // };
    
//   return (
//     <> 
//     <div className='cards' style={stylecard}>
//         <div className='card'  style={card}>
//             <img src={props.image} alt='annual_fest' style={card_img}></img>
//             <div   style={card_info}>
//             <h3   style={card_title}>{props.title}</h3>
//             <span style={card_category}>{props.category} </span>
//             <h6  style={card_category}>{props.cost}</h6>
//             {applied ? (
//             <p style={{ color: "green" }}>Applied</p>
//             ) : (
//                 <>
//                 <button
//                     className="btn btn-primary"
//                     onClick={handleApplyClick}
//                 >
//                     Apply
//                 </button>
//                  <ToastContainer
//                   position="bottom-center"
//                   autoClose={3000}
//                   hideProgressBar={false}
//                   newestOnTop={false}
//                   closeOnClick
//                   rtl={false}
//                   pauseOnFocusLoss
//                   draggable
//                   pauseOnHover
//                   theme="dark"
//                 />
//                 </>
//             )}
//             </div>
//         </div>
        
//     </div>
//  </>
//   )
// }

// export default Cards





// import React from 'react';
 
// import AlertDialogSlide from './ApplyButton';

// const Cards = (props) => {
     

//     const stylecard ={
//        height:'auto',
//        width:'100%',
       
//     }
//     const card_img ={
//         width:'100%',
//         height:'235px',
//         borderTopLeftRadius:'12px',
//         borderTopRightRadius:'12px',
//     }
//     const card_info={
//         backgroundColor:'#fff',
//         borderTopLeftRadius:'12px',
//         borderTopRightRadius:'12px',
//         padding:'16px 24px 24px 24px',
//     }
//     const card_category={
//         textTransform:'uppercase',
//         fontSize:'13px',
//         letterSpacing:'2px',
//         fontWeight:'500',
//         color:'#868686',
//         backgroundColor:'#fff',
//         fontFamily:'"raleway", sans-serif',
//     }
//     const card_title ={
//         marginTop:'5px',
//         marginBottom:'10px',
//         textTransform:'capitalize',
//         backgroundColor:'#fff',
//         fontFamily:'"raleway", sans-serif',
//     }
//     const card= {
//       //  display:'flex',
//       //   justifyContent: 'space-between',
//         margin:'6%',
//          transition: 'all 0.4s cubic-bezier(0.175,0.885,0,1)',
//        backgroundColor:"#fff",
//         borderRadius:'12',
//          width:'21.25%',
//         boxShadow:'0px 13px 10px -7px rgba(0,0,0,0.1)',
//         float: 'left',
//         "&:hover": {
//             boxShadow: '0px 30px 18px -8px rgba(0,0,0,0.1)',
//             transform:'scale(1.05,1.05)',
//           }
//         //   @media(max-width: 768px) {
//         //    float:'none',
//         //    margin:'5%',
//         //    width:'90%',
//         //   }
       
//         }
 
//     const buttonstyle={
//         padding: '5px 8px',
        
//         fontFamily:'"raleway", sans-serif',
//         textTransform:'uppercase',
//         fontSize:'13px',
//         letterSpacing:'2px',
//         fontWeight:'500',
//         color:'#868686',
//         backgroundColor:'#fff',
//         outline:'none',
//         border:'1px solid black',
//         cursor:'pointer',
//     }
//     // const learnbutton={
//     //     padding: '5px 8px',
//     //     fontFamily:'"raleway", sans-serif',
//     //     textTransform:'uppercase',
//     //     fontSize:'13px',
//     //     letterSpacing:'2px',
//     //     fontWeight:'500',
//     //     color:'#868686',
//     //     backgroundColor:'#fff',
//     //     outline:'none',
//     //     border:'1px solid black',
//     //     cursor:'pointer',
//     //     marginLeft:'1%',
//     // }
    
//   return (
//     <> 
//     <div className='cards' style={stylecard}>
//         <div className='card'  style={card}>
//             <img src={props.image} alt='annual_fest' style={card_img}></img>
//             <div   style={card_info}>
//             <h3   style={card_title}>{props.title}</h3>
//                 <span style={card_category}>{props.category} </span>
//                 <h6  style={card_category}>{props.cost}</h6>
//               <AlertDialogSlide/>  
//             </div>
//         </div>
        
//     </div>
//  </>
//   )
// }

// export default Cards;





//IMPORTANT CODE

// import React, { useState } from 'react';
// import ApplyButton from './ApplyButton';
// import { auth } from '../config';

// const Cards = ({ event, onApply, onImageClick }) => {
//   const userInfo = auth.currentUser;
//   const uid = userInfo.uid;

//   const [isApplied, setIsApplied] = useState(false);

//   const handleApply = () => {
//     setIsApplied(true);
//     // Passing the event data to the parent component when the form is submitted
//     onApply(event);
//   };

//   const handleImageClick = (event) => {
//     // Only call the onClick function passed from the parent component
//     // when the image is clicked
//     onImageClick(event);
//   };
//   const card_img = {
//     width: '100%',
//     height: '235px',
//     borderTopLeftRadius: '12px',
//     borderTopRightRadius: '12px',
//   };
//   const card_info = {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: '12px',
//     borderTopRightRadius: '12px',
//     padding: '16px 24px 24px 24px',
//   };
//   const card_category = {
//     textTransform: 'uppercase',
//     fontSize: '13px',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     color: '#868686',
//     backgroundColor: '#fff',
//     fontFamily: '"raleway", sans-serif',
//   };
//   const card_title = {
//     marginTop: '5px',
//     marginBottom: '10px',
//     textTransform: 'capitalize',
//     backgroundColor: '#fff',
//     fontFamily: '"raleway", sans-serif',
//   };
//   const card = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '6%',
//     transition: 'all 0.4s cubic-bezier(0.175,0.885,0,1)',
//     backgroundColor: '#fff',
//     borderRadius: '12',
//     width: '80%',
//     boxShadow: '0px 13px 10px -7px rgba(0,0,0,0.1)',
//     float: 'left',
//     "&:hover": {
//       boxShadow: '0px 30px 18px -8px rgba(0,0,0,0.1)',
//       transform: 'scale(1.05,1.05)',
//     },
//   };

//   return (
//     <>
//       <div className='cards'>
//         <div className='card' style={card}>
//           {/* Wrap the image with a div and attach onClick to this div */}
//           <div onClick={() => handleImageClick(event)}>
//             <img src={event.imageUrl} alt={event.name} style={card_img}></img>
//           </div>
//           <div style={card_info}>
//             <h3 style={card_title}>{event.EventName}</h3>
//             <span style={card_category}>{event.CompanyName} </span>
//             <h6 style={card_category}>{event.Amount}</h6>
//             {/* Render ApplyButton only if the user is not the organizer */}
//             {event.uid !== uid && <ApplyButton onApply={handleApply} event={event} />}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Cards;

import React, { useState } from 'react';
import ApplyButton from './ApplyButton';
import { auth } from '../config';

const Cards = ({ event, onApply, onImageClick }) => {
  const userInfo = auth.currentUser;
  const uid = userInfo.uid;

  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    // Passing the event data to the parent component when the form is submitted
    onApply(event);
  };

  const handleImageClick = (event) => {
    // Only call the onClick function passed from the parent component
    // when the image is clicked
    onImageClick(event);
  };

  // Calculate currentDate
  
const currentDate = new Date();
// Calculate statusMessage based on event dates
let statusMessage = '';
// Convert event dates to Date objects if they are not already
const eventStartDate = new Date(event.StartDate);
const eventEndDate = new Date(event.EndDate);
// Check if event dates are valid
if (isNaN(eventStartDate.getTime()) || isNaN(eventEndDate.getTime())) {
  statusMessage = 'Invalid Date';
} else if (currentDate >= eventStartDate && currentDate <= eventEndDate) {
  statusMessage = 'In Progress';
} else if (currentDate < eventStartDate) {
  statusMessage = 'Has Not Started Yet';
} else {
  statusMessage = 'Expired';
}
  // Render ApplyButton only if the user is not the organizer and the event is in progress or has not started yet
  const renderApplyButton = () => {
    if (event.uid !== uid && (statusMessage === 'In Progress' || statusMessage === 'Has Not Started Yet')) {
      return <ApplyButton onApply={handleApply} event={event} />;
    }
    if (statusMessage === 'Expired'){
        return <p style={{color : 'red'}}>Event is completed successfully</p>;
    }
    return null;
  };

  // Styles
  const card_img = {
    width: '100%',
    height: '235px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  };
  const card_info = {
    backgroundColor: '#fff',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    padding: '16px 24px 24px 24px',
  };
  const card_category = {
    textTransform: 'uppercase',
    fontSize: '13px',
    letterSpacing: '2px',
    fontWeight: '500',
    color: '#868686',
    backgroundColor: '#fff',
    fontFamily: '"raleway", sans-serif',
  };
  const card_title = {
    marginTop: '5px',
    marginBottom: '10px',
    textTransform: 'capitalize',
    backgroundColor: '#fff',
    fontFamily: '"raleway", sans-serif',
  };
  const card = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '6%',
    transition: 'all 0.4s cubic-bezier(0.175,0.885,0,1)',
    backgroundColor: '#fff',
    borderRadius: '12',
    width: '80%',
    boxShadow: '0px 13px 10px -7px rgba(0,0,0,0.1)',
    float: 'left',
    "&:hover": {
      boxShadow: '0px 30px 18px -8px rgba(0,0,0,0.1)',
      transform: 'scale(1.05,1.05)',
    },
  };

  return (
    <>
      <div className='cards'>
        <div className='card' style={card}>
          {/* Wrap the image with a div and attach onClick to this div */}
          <div onClick={() => handleImageClick(event)}>
            <img src={event.imageUrl} alt={event.name} style={card_img}></img>
          </div>
          <div style={card_info}>
            <h3 style={card_title}>{event.EventName}</h3>
            <span style={card_category}>{event.CompanyName} </span>
            <h6 style={card_category}>Organizer name - {event.name}</h6>

            {renderApplyButton()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;


// import React, { useState } from 'react';
// import ApplyButton from './ApplyButton';

// const Cards = ({ event, onApply }) => {
//   const [isApplied, setIsApplied] = useState(false);

//   const handleApply = () => {
//     setIsApplied(true);
//     // Pass the event data to the parent component when the form is submitted
//     onApply(event);
//   };

//   return (
//     <>
//       <div className="col-lg-4 col-md-6 mb-3">
//         <div className="card">
//           <img src={event.image} alt={event.name} className="card-img-top" />
//           <div className="card-body">
//             <h3 className="card-title">{event.EventName}</h3>
//             <p className="card-text">{event.CompanyName}</p>
//             <p className="card-text">{event.Amount}</p>
//             <ApplyButton onApply={handleApply} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;
