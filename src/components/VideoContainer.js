import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/Constants'
import VideosCard, {adBorderVideoCard} from './VideosCard'

const VideoContainer = () => {
  const [videos, setVideos] = useState()
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json?.items)
  }
  return (
    <div className='d-flex flex-wrap'>
      <adBorderVideoCard/>
      {videos && videos?.map((eachVideo) => {
        return (
          <>
            <VideosCard info={eachVideo} />
          </>
        )
      })}
    </div>
  )
}

export default VideoContainer