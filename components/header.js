import React,{useState, useEffect} from 'react'
import Navbar from './navbar.js'
import Path from "../components/API"
import Item from "../public/item.svg"
import Idmblogo from "../public/idmblogo.svg"
import Playsvg from "../public/play.svg"

function header({randommovie}) {   
  const trim = function(str, len){
    return str?.length>len?str.substr(0,n)+'...':str
  }
  return (
    <div className='header' style={{backgroundSize:'cover',background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("https://image.tmdb.org/t/p/original/${randommovie?.backdrop_path}")`, backgroundPosition: "center center"}}>
      <Navbar/>
      <div className='header_content'>
          <h1 className='title'>{randommovie?.title}</h1>
          <div className='info'>
            <Idmblogo className='idmb'/>
            <p>{Math.ceil(randommovie?.popularity)}.0/100</p>
            <Item className='item'/>
            <p>97%</p>
          </div>
          <h5>{trim(randommovie?.overview)}</h5>
          <button><Playsvg/><span>Watch Trailer</span></button>
      </div>
    </div>
  )
}

export default header
