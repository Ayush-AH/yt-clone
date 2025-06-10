import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/counterSlice";
import SkeletonLoader from "../common/SkeletonLoader";

const VideoContainer = () => {
  const { video, category } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true)

  const fetchVideo = async () => {
    try {
      setloading(true)
      const res = await axios.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      );
      dispatch(setHomeVideo(res?.data?.items));
      setloading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      setloading(true)
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      );
      dispatch(setHomeVideo(res?.data?.items));
      setloading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "all") {
      fetchVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className="py-8 grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-4 bg-white dark:bg-black">
      {loading ?  [0,1,2,3,4,5].map((s,i)=><SkeletonLoader key={i}/>) :video?.map((video, idx) => (
        <Link
          key={idx}
          to={`/watch?v=${
          typeof video.id === "string" ? video.id : video.id?.videoId
          }`}
        >
          <VideoCart key={idx} data={video} />
        </Link>
       
      ))}
    </div>
  );
};

export default VideoContainer;
