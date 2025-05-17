import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../feed/Feed'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
     <div className='w-full flex relative h-full justify-end'>
        <Sidebar/>
        <Outlet/>
      </div>
  )
}

export default Home;