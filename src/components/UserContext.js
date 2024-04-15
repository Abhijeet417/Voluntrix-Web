// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };

import React, { createContext, useContext, useState,useEffect } from "react";
import { auth } from "./config";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

//changes made 
const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor: 'black'}}>
      <div class="spinner-border" style={{color:"#8F43EE"}} role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      {/* <h2>Loading...</h2> */}
      {/* You can replace this text with a spinner or any other loading animation */}
    </div>
  );
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // You can return a loading indicator here
    return <LoadingComponent />;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
