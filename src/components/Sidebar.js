import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='text-start p-3 m-3 shadow' style={{"width":"13%"}}>
      <h3>Subscriptions</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h3>Watch Later</h3>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar