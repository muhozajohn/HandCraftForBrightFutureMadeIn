import React from 'react'
import './TopNav.css'

const TopNav = () => {
  return (
    <section>
      <div className='topnav-sect1' >
        <p>
          welcome to made in rwanda handcrafted website
        </p>
        <div className='topnav-sect1-left'>
          <div >avatar</div>
          <div><a href="#">login</a>/<a href="#">signup</a></div>
        </div>
      </div>
    </section>
  )
}

export default TopNav