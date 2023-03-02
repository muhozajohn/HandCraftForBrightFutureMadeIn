import React from 'react'
import Body from '../components/Body/Body'
import TopNav from '../components/NavBar/TopNav'

const Home = () => {
  return (
    <section>
        <TopNav className='home-topnav'/>
        <Body/>
    </section>
  )
}

export default Home