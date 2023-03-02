import React from 'react'
import Body from '../../components/Body/Body'
import TopNav from '../../components/NavBar/TopNav'
import SemNavBar from '../../components/SemNavBar/SemNavBar'

const Home = () => {
  return (
    <section>
        <TopNav className='home-topnav'/>
        <SemNavBar/>
        <Body/>
    </section>
  )
}

export default Home