import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className=''>
        
            <div className='w-full rounded-lg h-56 animate-pulse dark:bg-white/10 bg-gray-200' ></div>
            <div className='flex gap-2 mt-2 '>
                <div className='rounded-full shrink-0 dark:bg-white/10 bg-gray-200 mt-1 w-[30px] h-[30px]'></div>
                <div className='w-full '>
                    <div className='w-full mb-1 p-1 rounded-full dark:bg-white/10 bg-gray-200'></div>
                    <div className='w-full mb-1 p-1 rounded-full dark:bg-white/10 bg-gray-200'></div>
                    <div className='w-full mb-1 p-1 rounded-full dark:bg-white/10 bg-gray-200'></div>
                </div>
            </div>
        </div>
  )
}

export default SkeletonLoader