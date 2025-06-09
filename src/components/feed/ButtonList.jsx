import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../utils/counterSlice'

const ButtonList = () => {

    const category = useSelector(store=>store.app.category)
    const dispatch = useDispatch()

    const buttonList = [
    "all",
    "music",
    "T-series",
    "realme",
    "feature phones",
    "bollywood songs",
    "hindi songs",
    "latest songs",
    "trending songs",
    "romantic songs",
    "party songs",
    "T-series music",
    "bollywood hits",
    "indian music",
    "film songs",
    "kriti sanon songs",
    "kriti sanon movies",
    "bollywood actress",
    "bollywood celebrities",
    "bollywood 2025",
    "kriti sanon dance",
    "kriti sanon interview",
    "realme phone",
    "realme review",
    "realme unboxing",
    "realme 2025",
    "feature phones review",
    "best budget phone",
    "tech unboxing",
    "smartphone comparison",
    "indian tech",
    "mobile phone tips",
    "trending now",
    "viral video",
    "youtube india",
    "2025 trending",
    "desi content",
    "shorts video",
    "viral shorts"
]


    const handleActiveTag = (tag)=>{
        if(category !== tag){
            dispatch(setCategory(tag))
        }
    }

  return (
    <div className='taglist overflow-x-auto flex w-full items-center gap-3  overflow-hidden'>
        {
            buttonList.map((item,idx)=>(
                <button key={idx} onClick={()=>handleActiveTag(item)} className={`px-4 py-1 whitespace-nowrap cursor-pointer ${category === item ? 'bg-black dark:text-black dark:bg-white text-white':"bg-gray-100 dark:bg-white/20 dark:text-white text-black"} rounded-md capitalize text-sm font-medium`}>{item}</button>
            ))
        }
    </div>
  )
}

export default ButtonList