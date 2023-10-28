import React from 'react'
import PersonIcon from "../images/icons8-person-24.png";
const ChatMeassage = ({name,msg}) => {
  return (
    <div className="d-flex align-items-center shadow-sm p-2">
        <img src={PersonIcon} alt={"person Icon"}/>
      <span className="fw-bold px-2">{name}</span>
      <span>{msg}</span>
    </div>
  )
}

export default ChatMeassage