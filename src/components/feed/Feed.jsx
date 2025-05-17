import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const Feed = () => {
  const open = useSelector((state)=>state.app.open)
  return (
    <div style={{ height: "calc(100vh - 64px)"}} className={`${open ? 'w-[84.5%]':'w-[95%]'}  p-3 bg-white mt-[64px]`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Feed