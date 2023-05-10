import React, { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    
  const [data,setdata] = useState("hello")


  
  return (
    <AuthContext.Provider value={{data,setdata}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 