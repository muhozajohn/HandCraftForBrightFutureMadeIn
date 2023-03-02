import React from 'react'
import './TopNav.css'
import {RxAvatar} from 'react-icons/rx'

const TopNav = () => {
  return (
    <section className='TopNav'>
      <div className='topnav-sect1' >
        <p>
          welcome to made in rwanda handcrafted website
        </p>
        <div className='topnav-sect1-left'>
          {/* <div >
          <div className="Topnav-avatar">
             <img className="Topnav-avatar__image" src="..." />
           </div>
          </div> */}
          <RxAvatar className='TopNav-icon'/>
          <div><a href="#">login</a>/<a href="#">signup</a></div>
        </div>
      </div>
    </section>
  )
}

export default TopNav