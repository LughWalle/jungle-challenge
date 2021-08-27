import React from 'react'

function Header() {
  return (
    <div>
      <div>
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
