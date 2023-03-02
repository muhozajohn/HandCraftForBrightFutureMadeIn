import React from 'react'
import './TopNav.css'
import {RxAvatar} from 'react-icons/rx'

const TopNav = () => {
  return (
    <section className='TopNav'>
      <div className='topnav-sect1' >
        <p>
          Welcome to made in rwanda handcrafted website
        </p>
        <div className='topnav-sect1-left'>
          <div>
          <RxAvatar className='TopNav-icon'/>
          </div>
          <div><a className='topnav-link' href="#">SignIn</a>/<a className='topnav-link' href="#">Register</a></div>
        </div>
      </div>
    </section>
  )
}

export default TopNav