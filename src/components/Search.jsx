import React, { useContext, useState } from 'react'
import {collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where} from "firebase/firestore"
import {db} from "../firebase"
import {AuthContext} from "../context/AuthContext"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

   const {currentUser} = useContext(AuthContext)
  
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    )

    try{
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc)=>{
        setUser((doc.data()))
      })
    } catch(err){
      setErr(true)
    }
  }
  //..onKey listens to keyboard input from users
  const handleKey = (e) => {
   e.code === "Enter" && handleSearch() 
  } 

  const handleSelect = async () =>{
    //..check whether the group exists [chats in firestore] else create 
    const combinedId = currentUser.uid > user.uId ? 
      currentUser.uid + user.uid : 
       user.uid + currentUser.uid

    try{
      const res = await getDoc(doc(db, "chats", combinedId))

      if(!res.exists()){
        //..create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), {Messages: [] })
       
        //..create user chats
  await updateDoc(doc(db, "userChats", currentUser.uid),{  
      [combinedId + ".userInfo"]:{
        uid: user.id,
        displayName: user.displayName,
        photoURL: user.photoURL, 
      }, 
      [combinedId + ".date"]: serverTimestamp(),
  })

  await updateDoc(doc(db, "userChats", user.uid),{  
    [combinedId + ".userInfo"]:{
      uid:currentUser.id,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL 
    }, 
    [combinedId + ".date"]: serverTimestamp()
  })
  
  }
    } catch(err){

    }
    //..create user chats 
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" 
        onKeyDown={handleKey}
        onChange={e=>setUsername(e.target.value)}/>
      </div>

      {err && <span> user not found</span>}
      {/* if there is a user... */} 
     { user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search