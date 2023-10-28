import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const VideosCard = ({info}) => {
    const navigate = useNavigate()
    console.log("info",info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='p-2 m-2 text-start shadow ' style={{width:"21%"}}>
      <Link to={`/watch?v=${info.id}`}>
        <img alt ="thumbnails" src={thumbnails.medium?.url} className="rounded-3"/>
        <ul className='ps-0 p-2' style={{listStyleType:"none"}}>
            <li className='fw-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>

        </ul>
        </Link>
    </div>
  )

}

export const adBorderVideoCard = (videoCard) => {
  return(
    <div className='border-red p-4'>
      <videoCard/>
    </div>   
  )
}
export default VideosCard