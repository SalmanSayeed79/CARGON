import React, { useState,createContext } from "react";

import useLocalStorage from '../Hooks/useLocalStorage'

export const FactoryIDContext = createContext();
export const FactoryIDUpdateContext = createContext();
export const AdminIDUpdateContext = createContext();
export const AdminIDContext = createContext();
export const LogoutContext = createContext();
export const IDContextProvider = ({ children }) => {
  const [facID, setFacID] = useLocalStorage("millhouseFacID",null);
  const [adminID, setAdminID] = useLocalStorage("millhouseAdmID",null);
  const updateFactoryID=(data)=>{
    setFacID(data)
  }
  const updateAdminID=(data)=>{
    setAdminID(data)
  }
  const logout=()=>{
    setAdminID(null)
    setFacID(null)
  }
  return (
    <LogoutContext.Provider value={logout}>
    <FactoryIDContext.Provider value={facID}>
      <FactoryIDUpdateContext.Provider value={updateFactoryID}>
      <AdminIDContext.Provider value={adminID}>
      <AdminIDUpdateContext.Provider value={updateAdminID}>
        {children}
        </AdminIDUpdateContext.Provider>
      </AdminIDContext.Provider>
      </FactoryIDUpdateContext.Provider>
    </FactoryIDContext.Provider>
    </LogoutContext.Provider>
  );
};
