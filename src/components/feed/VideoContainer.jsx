import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/counterSlice";

const VideoContainer = () => {
  const {video,category} = useSelector((state)=>state.app)
  const dispatch = useDispatch()

  const fetchVideo = async () => {
    try {
      const res = await axios.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      )
      dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      )
      console.log(res?.data.items);
      dispatch(setHomeVideo(res?.data?.items))
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(category === 'all'){
      fetchVideo();
    }else{
      fetchVideoByCategory()
    }
  }, [category]);
  

  return (
    <div className="py-8 grid grid-cols-3 gap-4">
      {video?.map((video, idx) => (
        <Link key={idx} to={`/watch?v=${video.id}`}>
          <VideoCart key={idx} data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
