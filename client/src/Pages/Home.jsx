import React from 'react'
import Navbar from '../Components/Navbar'
import HomeCard from '../Components/Card'

const Home = () => {
  return (
    <div className='flex gap-4'>
        <Navbar/>
        <HomeCard/>
    </div>
  )
}

export default Home