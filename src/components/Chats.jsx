import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

const Chats = () => {

  const [chats, setChats] = useState([])

  const currentUser = useContext(AuthContext)

  useEffect(() =>{
    const getChats =() =>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }
    //..call the function if there is a currentUser id 
    currentUser.uid && getChats()    

  }, [currentUser.uid])
    
    console.log(Object.entries(chats)) //..convert to array
  
    return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) =>(
        <div className="userChat" key={chat[0]}>
        <img src={chat[1].userInfo.photoUrl} alt="" />
        <div className="userChatInfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats