import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    //..listening to users 
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user)
    })
    //..avoiding overload 
    return () => {
      unsub()
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}