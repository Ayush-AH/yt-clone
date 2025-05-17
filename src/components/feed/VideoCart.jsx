import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';

const VideoCart = ({ data }) => {
    const [channelIcon, setChannelIcon] = useState(null)

    const getYoutubeChannelName = async () => {
        try {
            const res = await axios.get(`/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`)
            setChannelIcon(res.data.items[0].snippet.thumbnails.default.url)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName()
    },[])

    return (
        <div className=''>
            <img className='w-full rounded-lg' src={data.snippet.thumbnails.medium.url} alt="thumbnails" />
            <div className='flex gap-2 mt-2'>
                <img className='rounded-full mt-1 w-[30px] h-[30px]' src={channelIcon ? channelIcon :""} alt="" />
                <div>
                    <h4 className='text-sm font-semibold'>{data.snippet.title}</h4>
                    <p className='text-sm opacity-[.8]'>{data.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCart