import React from 'react'
import badge from '../assets/vectors/badge.svg'

function Header() {
  return (
    <div>
      <div>
        <img src={badge} alt="" />
        <nav>
          <a className='link-nav' href="/">Create Your Nanny Share</a>
          <a className='link-nav' href="/">Browse Shares</a>
          <a className='link-nav' href="/">Our Story</a>
        </nav>
      </div>
      <div>
        <button className='btn'>Become a Nanny Share Host</button>
        <a className='link-nav' href="/">Sign In</a>
      </div>
    </div>
  )
}

export default Header
