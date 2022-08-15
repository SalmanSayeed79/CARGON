import React, { useState,createContext } from "react";
import useLocalStorage from '../Hooks/useLocalStorage'


export const DistributorIDUpdateContext = createContext();
export const DistributorIDContext = createContext();
export const IDContextProvider = ({ children }) => {
  const [distID, setDistID] = useLocalStorage("medpilot_dist_id",null);

  const updateDistributorID=(data)=>{
    setDistID(data)
  }
  return (
    <DistributorIDContext.Provider value={distID}>
      <DistributorIDUpdateContext.Provider value={updateDistributorID}>
          {children}
      </DistributorIDUpdateContext.Provider>
    </DistributorIDContext.Provider>
    
  );
};
