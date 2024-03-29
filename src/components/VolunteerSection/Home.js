// import React from "react";
// import {Navbar1} from '../Navbar1'
// import { Footer } from "../Footer";
// import Cards from './Cards';
// import Sdata from './Sdata';

// function ncard(val){
// return (
//   <Cards
//         image={val.image}
//         title={val.title}
//         category={val.category}
//         cost={val.cost}
//     />
// );
// }
// const ListOfEvents = {
//     width : '100%',
//     marginTop : '7%',
//     position : 'absolute',
// }
// const heading ={
//   padding: '30px 0',
//   textAlign:'center',
//   fontFamily:'"raleway", sans-serif',
//   textTransform:'uppercase',
//   fontSize:'1.5rem',
//   letterSpacing:'2px',
//   fontWeight:'500',
//   color:'#868686',
//   backgroundColor:'black',
//   margin: '0',
// }

// function Home(){
//     return (
//         <div>
//            <Navbar1/>
//             <div style={ListOfEvents}> 
//                 <h1 style={heading}>List of Events</h1>
//                     {Sdata.map(ncard)}
                    
//             </div> 
//            <Footer/>
//         </div>
//     );
// }
// export default Home;




//UPDATED CODE

import React, { useEffect, useState } from "react";
import { Navbar1 } from "../Navbar1";
import { Footer } from "../Footer";
import { getDatabase, ref, get } from "firebase/database";
import Cards from './Cards';
import { useAppliedEvents } from "./AppliedEventsContext";
import { useUser } from "../UserContext";


const ListOfEvents = {
    width : '100%',
    marginTop : '7%',
    position : 'absolute',
}
const heading ={
  padding: '30px 0',
  textAlign:'center',
  fontFamily:'"raleway", sans-serif',
  textTransform:'uppercase',
  fontSize:'1.5rem',
  letterSpacing:'2px',
  fontWeight:'500',
  color:'#868686',
  backgroundColor:'black',
  margin: '0',
}
function Home() {
   const {user} = useUser();
   console.log("user" , user.displayName);
  const [userEvents, setUserEvents] = useState([]);
  const { addAppliedEvent } = useAppliedEvents();

  const handleApply = (event) => {
    // Call addAppliedEvent to add the event to the appliedEvents state
    addAppliedEvent(event);
  };



  useEffect(() => {
    // Fetch user-specific events from Firebase
    const fetchData = async () => {
      const db = getDatabase();
      const organizerEventsRef = ref(db, "OrganizerData");
      try {
        const snapshot = await get(organizerEventsRef);
        if (snapshot.exists()) {
          const eventsData = snapshot.val();
          // Convert Firebase object to an array of events
          const eventsArray = Object.keys(eventsData)
            .map((key) => ({
              id: key,
              ...eventsData[key],
            }));
          setUserEvents(eventsArray);
        } else {
          setUserEvents([]); // No user-specific events found
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle errors here
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); 

 

  return (
    <div>
      <Navbar1 />
      <div style={ListOfEvents}>
        {/* <h1 style={heading}>Events</h1> */}
        <div className="row">

        {userEvents.map((event,index) => (
          <div className="col-md-4 mb-3" key={index}>
              <Cards event={event} onApply={() => handleApply(event)}/> 
            </div>
        ))}
       </div>
        </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

