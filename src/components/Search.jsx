import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user"/>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
        <div className="userChatInfo">
          <span>Morris </span>
        </div>
      </div>
    </div>
  )
}

export default Search