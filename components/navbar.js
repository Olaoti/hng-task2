import React,{useState, useEffect} from 'react'
import Logo from "../public/logo.svg"
import Search from "../public/search.svg"
import Link from 'next/link'

function navbar() {
const [sidebarShow, setSidebarShow] = useState(false)
const [show, handleShow] = useState(false);
  const handleScroll = () => {
    if (document.body.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("scroll",handleScroll);
    return () => {
      document.body.removeEventListener("scroll",handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${show&&'blacked'}`} >
        <div className='mobile-nav'>
        <Logo className='logo' fill='white'/>
        <div className={`hamburger mobile ${sidebarShow?('cancel'):('show')}`} onClick={()=>{setSidebarShow(!sidebarShow)}}>
              <span></span>
              <span></span>
            </div>
        </div>
          <div className='searchBox'>
            <input type='search' placeholder='What do you want to watch?'/>
            <div className='icon'><Search/></div>
          </div>
          <div className='options'>
            <div className='sign-in'>Sign in</div>
            <div className={`hamburger desktop ${sidebarShow?('cancel'):('show')}`} onClick={()=>{setSidebarShow(!sidebarShow)}}>
              <span></span>
              <span></span>
            </div>
            
          </div>
    </div>
  )
}

export default navbar
