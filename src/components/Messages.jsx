import { onSnapshot, doc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Message from "./Message"

const Messages = () => {

  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().message)
    })
    return () => {
      unsub()
    }
  }, [data.chatId])
  

  return (
    <div className="messages">
      {messages.map((m) =>(
        <Message messages={m}/>
      ))}      
    </div>
  )
}

export default Messages