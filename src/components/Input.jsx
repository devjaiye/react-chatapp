import React from 'react'
import Img from "../img/img.png"
import Attachment from "../img/attach.png"

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message..." />
      <div className="send">
        <img src="" alt="" />
        <input type="text" style={{display: "none"}} id="fifle" />
        <label htmlFor="file">
          <img src={Img} alt="" />
          <img src={Attachment} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input 