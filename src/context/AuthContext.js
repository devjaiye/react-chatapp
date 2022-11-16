import { onAuthStateChanged} from "firebase/auth";
import {createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

//..provider user
export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() =>{
        //..listener
    const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            console.log(user)
        })
        //..avoid memory leaking
     return () =>{
        unsub()
     }
    }, []);
    
    return () =>{
        <AuthContext.Provider value={{currentUser}}> 
        {children }
     </AuthContext.Provider>
    }   
}