import React from 'react'
import Fb from "../public/fb.svg"
import Youtube from "../public/youtube.svg"
import Insta from "../public/insta.svg"
import Twitter from "../public/twitter.svg"


function footer() {
  return (
    <div className='footer'>
      <div className='socials'>
        <Fb/>
        <Insta/>
        <Twitter/>
        <Youtube/>
      </div>
      <div className='footer_links'>
        <p>Conditions of Use</p>
        <p>Privacy policy</p>
        <p>Press Room</p>
      </div>
      <div className='copyright'>© 2021 MovieBox by Adriana Eka Prayudha  </div>
    </div>
  )
}

export default footer
