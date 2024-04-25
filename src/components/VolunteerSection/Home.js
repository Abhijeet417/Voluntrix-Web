// // //UPDATED CODE

// // import React, { useEffect, useState } from "react";
// // import { Navbar1 } from "../Navbar1";
// // import { Footer } from "../Footer";
// // import { getDatabase, ref, get } from "firebase/database";
// // import Cards from './Cards';
// // import { useAppliedEvents } from "./AppliedEventsContext";
// // import { useUser } from "../UserContext";
// // import Popup from "./Popup";


// // const ListOfEvents = {
// //     width : '100%',
// //     marginTop : '7%',
// //     position : 'absolute',
// // }
// // const heading ={
// //   padding: '30px 0',
// //   textAlign:'center',
// //   fontFamily:'"raleway", sans-serif',
// //   textTransform:'uppercase',
// //   fontSize:'1.5rem',
// //   letterSpacing:'2px',
// //   fontWeight:'500',
// //   color:'#868686',
// //   backgroundColor:'black',
// //   margin: '0',
// // }
// // function Home() {
// //    const {user} = useUser();
// //   //  console.log("user" , user.displayName);
// //   const [userEvents, setUserEvents] = useState([]);
// //   const { addAppliedEvent } = useAppliedEvents();
// //   const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

   
// //   const handleApply = (event) => {
// //     // Call addAppliedEvent to add the event to the appliedEvents state
// //     addAppliedEvent(event);
// //   };



// //   useEffect(() => {
// //     // Fetch user-specific events from Firebase
// //     const fetchData = async () => {
// //       const db = getDatabase();
// //       const organizerEventsRef = ref(db, "OrganizerData");
// //       try {
// //         const snapshot = await get(organizerEventsRef);
// //         if (snapshot.exists()) {
// //           const eventsData = snapshot.val();
// //           // Convert Firebase object to an array of events
// //           const eventsArray = Object.keys(eventsData)
// //             .map((key) => ({
// //               id: key,
// //               ...eventsData[key],
// //             }));
// //           setUserEvents(eventsArray);
// //         } else {
// //           setUserEvents([]); // No user-specific events found
// //         }
// //       } catch (error) {
// //         console.error("Error fetching events:", error);
// //         // Handle errors here
// //       }
// //     };

// //     fetchData(); // Call the fetchData function when the component mounts
// //   }, []); 

 
// //   const handleEventClick = (event) => {
// //     setSelectedEvent(event);
// //     // console.log("selected event : " ,selectedEvent);
// //   };

// //   const handleClosePopup = () => {
// //     setSelectedEvent(null);
// //   };

// //   return (
// //     <div>
// //       <Navbar1 />
// //       <div style={ListOfEvents}>
// //         {/* <h1 style={heading}>Events</h1> */}
// //         <div className="row">

// //         {userEvents.map((event,index) => (
// //           <div className="col-md-4 mb-3" key={index}>
// //               <Cards event={event} onApply={() => handleApply(event)} onClick={() => handleEventClick(event)}/> 
// //             </div>
// //         ))}
// //        </div>
// //         </div>
// //         {selectedEvent && <Popup event={selectedEvent} onClose={handleClosePopup} />}
// //       {/* <Footer /> */}
// //     </div>
// //   );
// // }

// // export default Home;

// with search functionality
// import React, { useEffect, useState } from "react";
// import { Navbar1 } from "../Navbar1";
// import { getDatabase, ref, get } from "firebase/database";
// import Cards from './Cards';
// import { useAppliedEvents } from "./AppliedEventsContext";
// import { useUser } from "../UserContext";
// import Popup from "./Popup";


// const ListOfEvents = {
//     width: '100%',
//     marginTop: '7%',
//     position: 'absolute',
// };
// const heading = {
//     padding: '30px 0',
//     textAlign: 'center',
//     fontFamily: '"raleway", sans-serif',
//     textTransform: 'uppercase',
//     fontSize: '1.5rem',
//     letterSpacing: '2px',
//     fontWeight: '500',
//     color: '#868686',
//     backgroundColor: 'black',
//     margin: '0',
// };
// function Home() {
//     const { user } = useUser();
//     const [userEvents, setUserEvents] = useState([]);
//     const { addAppliedEvent } = useAppliedEvents();
//     const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event
//     const [searchQuery, setSearchQuery] = useState(""); // State for search query
//     const [filteredEvents, setFilteredEvents] = useState([]); // State for filtered events

//     useEffect(() => {
//       // Fetch user-specific events from Firebase
      
//       const fetchData = async () => {
//             const db = getDatabase();
//             const organizerEventsRef = ref(db, "OrganizerData");
//             try {
//                 const snapshot = await get(organizerEventsRef);
//                 if (snapshot.exists()) {
//                     const eventsData = snapshot.val();
//                     // Convert Firebase object to an array of events
//                     const eventsArray = Object.keys(eventsData)
//                     .map((key) => ({
//                             id: key,
//                             ...eventsData[key],
//                         }));
//                     setUserEvents(eventsArray);
//                     // Initially set filtered events to all events
//                     setFilteredEvents(eventsArray);
//                   } else {
//                     setUserEvents([]); // No user-specific events found
//                     // Initially set filtered events to empty array
//                     setFilteredEvents([]);
//                   }
//                 } catch (error) {
//                   console.error("Error fetching events:", error);
//                   // Handle errors here
//                 }
//               };
              
//               fetchData(); // Call the fetchData function when the component mounts
//       }, []);
      
//       useEffect(() => {
//         // Filter events based on search query whenever searchQuery changes
//         if (searchQuery.trim() === "") {
//           // If search query is empty, display all events
//           setFilteredEvents(userEvents);
//         } else {
//           // If search query is not empty, filter events based on the search query
//           const newFilteredEvents = userEvents.filter(event =>
//             Object.values(event).some(value =>
//               typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
//             )
//           );
//           setFilteredEvents(newFilteredEvents);
//         }
//       }, [searchQuery, userEvents]);
      
//       const handleApply = (event) => {
//           // Call addAppliedEvent to add the event to the appliedEvents state
//           addAppliedEvent(event);
//       };
//       const handleEventClick = (event) => {
//         setSelectedEvent(event);
//     };

//     const handleClosePopup = () => {
//         setSelectedEvent(null);
//     };

//     return (
//         <div>
//             <Navbar1 searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//             <div style={ListOfEvents}>
//                 {/* <h1 style={heading}>Events</h1> */}
//                 <div className="row">
//                     {filteredEvents.map((event, index) => (
//                         <div className="col-md-4 mb-3" key={index}>
//                             <Cards event={event} onApply={() => handleApply(event)} onClick={() => handleEventClick(event)} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {selectedEvent && <Popup event={selectedEvent} onClose={handleClosePopup} />}
//             {/* <Footer /> */}
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import { Navbar1 } from "../Navbar1";
import { getDatabase, ref, get } from "firebase/database";
import Cards from './Cards';
import { useAppliedEvents } from "./AppliedEventsContext";
import { useUser } from "../UserContext";
import Popup from "./Popup";


const ListOfEvents = {
    width: '100%',
    marginTop: '7%',
    position: 'absolute',
};

function Home() {
    const { user } = useUser();
    const [userEvents, setUserEvents] = useState([]);
    const { addAppliedEvent } = useAppliedEvents();
    const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filteredEvents, setFilteredEvents] = useState([]); // State for filtered events

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
                    // Initially set filtered events to all events
                    setFilteredEvents(eventsArray);
                } else {
                    setUserEvents([]); // No user-specific events found
                    // Initially set filtered events to empty array
                    setFilteredEvents([]);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
                // Handle errors here
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []);

    useEffect(() => {
        // Filter events based on search query whenever searchQuery changes
        if (searchQuery.trim() === "") {
            // If search query is empty, display all events
            setFilteredEvents(userEvents);
        } else {
            // If search query is not empty, filter events based on the search query
            const newFilteredEvents = userEvents.filter(event =>
                Object.values(event).some(value =>
                    typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setFilteredEvents(newFilteredEvents);
        }
    }, [searchQuery, userEvents]);

    const handleApply = (event) => {
        // Call addAppliedEvent to add the event to the appliedEvents state
        addAppliedEvent(event);
    };

    // Define a new onClick handler to pass to Cards component
    const handleCardImageClick = (event) => {
        setSelectedEvent(event);
    };

    const handleClosePopup = () => {
        setSelectedEvent(null);
    };

    return (
        <div>
            <Navbar1 searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div style={ListOfEvents}>
                {/* <h1 style={heading}>Events</h1> */}
                <div className="row">
                    {filteredEvents.map((event, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            {/* Pass handleCardImageClick as onClick to trigger popup only when image is clicked */}
                            <Cards event={event} onApply={() => handleApply(event)} onImageClick={() => handleCardImageClick(event)} />
                        </div>
                    ))}
                </div>
            </div>
            {selectedEvent && <Popup event={selectedEvent} onClose={handleClosePopup} />}
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
