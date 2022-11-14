 import React from 'react'
 
 const Navbar = () => {
   return (
     <div className="navbar">
        <span className="logo">Chat world</span>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          <span>Morris</span>
          <button>logout</button>
        </div>
     </div>
   )
 }
 
 export default Navbar