import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, generateRandomText } from '../utils/Helper';
import ChatMeassage from './ChatMeassage';

const LiveChat = () => {

    const dispatch = useDispatch();
    const ChatMessage = useSelector(store => store.chat.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("API is polling")
            dispatch(addMessage({
                name:generateRandomName(),
                msg:generateRandomText(20)
            }))
        }, 2000);
        return () => {
            clearInterval(timer);
        }
    },[])

  return (
    <div>
        {ChatMessage?.map((eachMessage) =>{
            console.log("eachmeassage",eachMessage)
            return (
                <>
                <ChatMeassage name={eachMessage.name} msg ={eachMessage.msg}/>
                </>
            )
        })}
       </div>
  )
}

export default LiveChat