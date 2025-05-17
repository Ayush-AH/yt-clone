import React, { useState } from 'react'

const ButtonList = () => {

    const [active, setActive] = useState("all")

    const buttonList = [
        "all",
        "music",
        "T-series",
        "kriti sanon",
        "realme",
        "feature phones",
    ]

    const handleActiveTag = (tag)=>{
        if(active !== tag){
            setActive(tag)
        }
    }

  return (
    <div className='flex w-full items-center gap-3 overflow-hidden'>
        {
            buttonList.map((item,idx)=>(
                <button key={idx} onClick={()=>handleActiveTag(item)} className={`px-4 py-1 whitespace-nowrap ${active === item ? 'bg-black text-white':"bg-gray-100 text-black"} rounded-md capitalize text-sm font-medium`}>{item}</button>
            ))
        }
    </div>
  )
}

export default ButtonList