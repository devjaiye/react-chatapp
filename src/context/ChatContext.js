import { createContext, useEffect, useState } from "react";
import { Chat } from "../firebase";
import { onChatStateChanged } from "firebase/auth";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  //..using use reducer  

  return (
    <ChatContext.Provider value={{ currentUser }}>
      {children}
    </ChatContext.Provider>
  )
}