import React, { createContext, useContext, useState } from 'react';

const AppliedEventsContext = createContext();

export const useAppliedEvents = () => {
  return useContext(AppliedEventsContext);
};

export const AppliedEventsProvider = ({ children }) => {
  const [appliedEvents, setAppliedEvents] = useState([]);

  const addAppliedEvent = (event) => {
    setAppliedEvents([...appliedEvents, event]);
  };

  return (
    <AppliedEventsContext.Provider value={{ appliedEvents, addAppliedEvent }}>
      {children}
    </AppliedEventsContext.Provider>
  );
};
