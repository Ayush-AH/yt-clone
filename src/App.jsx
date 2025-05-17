import React from 'react'
import Navbar from './components/common/Navbar'
import {RouterProvider } from 'react-router-dom'
import Router from './components/utils/Router'


const App = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App