import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      );
      console.log(res.data.items);
      setVideo(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

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
