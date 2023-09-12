import React from 'react'
import Home from '../public/home.svg'
import Movieprojector from '../public/movieprojector.svg'
import Heart from '../public/heart.svg'
import Tvshow from '../public/tvshow.svg'
import Calendar from '../public/calendar.svg'
import Logo from "../public/logo.svg"
import Logout from "../public/logout.svg"

function sidebar() {
  return (
    <div className='sidebar'>
        <Logo fill='black'/>
        <ul>
          <li><Home/><span>Home</span></li>
          <li className='mov'><Movieprojector /><span>Movies</span></li>
          <li><Tvshow/><span>TV series</span></li>
          <li><Calendar/><span>Upcoming</span></li>       
        <div className='box'>
          <h4>Play movie quizes and earn free tickets</h4>
          <p>50k people are playing now</p>
          <button className='light'>Start Playing</button>
        </div>
        <p><Logout/><span>Logout</span></p>
        </ul>

    </div>
  )
}

export default sidebar
