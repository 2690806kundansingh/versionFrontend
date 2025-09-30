//context api which is hook in react which manaage the authentication at globbally
/*
Context API in authentication is used to manage global auth state (user, token, login/logout functions).

It avoids prop drilling.

Any component can easily check if a user is logged in and access user info
*/

import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

//read the currrent user and return
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  
  // Load user from localStorage on mount
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setCurrentUser(userId);
    }
  }, []);
  //set value
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
