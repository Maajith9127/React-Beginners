

import React, { createContext, useContext } from 'react';

export const StateContext = createContext();

// Create a provider component
export const StateProvider = ({ children, state1,state2 }) => {
  return (
    <StateContext.Provider value={{ state1,state2 }}>
      {children}
    </StateContext.Provider>
  );
};