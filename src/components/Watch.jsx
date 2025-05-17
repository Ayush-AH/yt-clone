import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "./utils/axios";

const Watch = () => {
  const open = useSelector((state) => state.app.open);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div
      style={{ height: "calc(100vh - 64px)" }}
      className={`${open ? "w-[84.5%]" : "w-[95%]"}  p-3 mt-[64px] bg-white `}
    >
      <iframe
        width="900"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
