import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const Feed = () => {
  const open = useSelector((state)=>state.app.open)
  return (
    <div  className={`${open ? 'sm:w-[84.5%]':'sm:w-[95%]'} w-full min-h-[95vh]  p-3 dark:text-white text-black bg-white dark:bg-black mt-[64px]`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Feed