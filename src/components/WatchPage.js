import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/AppSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log("searchparams",searchParams.get("v"))
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='text-start p-3'>
      <div className='d-flex'>
      <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='border p-3 ms-3 rounded-2 bg-body-secondary overflow-scroll flex-column-reverse' style={{width:"37%",height:"600px"}}>
            
          <LiveChat/>
          </div>
          </div>
          <CommentsContainer/>
    </div>
  )
}

export default WatchPage