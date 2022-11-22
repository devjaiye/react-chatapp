import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Chat } from "../firebase";
import { onChatStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const { currentUser} = useContext(AuthContext)
    const INITIAL_STATE = {
        chatId: "null", 
       user: {}
    }
    //..creating use reducer  
    const chatReducer = (state, action) =>{
        switch(action.type){
            case "CHANGE_USER": 
            return{
               user: action.payload, 
                chatId: 
                    currentUser.uid > action.payload.uid 
                    ? currentUser.uid + action.payload.chatId
                    :action.payload.uid + currentUser.uid
            }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}