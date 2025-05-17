import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "./utils/axios";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";

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
      className={`${open ? "w-[84.5%]" : "w-[95%] "}  p-3 pl-0 mt-[64px] bg-white flex justify-center`}
    >
      <div className={`w-[${open ? '65%':'62%'}]`}>
        <iframe
          className="rounded-xl w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="mt-2 ">
          <h2 className="font-bold text-xl">
            Build & Deploy YouTube Clone | ReactJS + Redux + Tailwind
          </h2>
          <div className="w-full flex items-center justify-between mt-2">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
              <div>
                <h4 className="text-md font-semibold">Patel MernStack</h4>
                <h6 className="text-xs text-gray-800">29K subscribers</h6>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <div className="p-2 px-4 font-semibold text-sm rounded-full bg-black text-white">
                  <h5 className="leading-none">Join</h5>
                </div>
                <div className="p-2 px-4 font-semibold text-sm rounded-full bg-gray-100 text-black">
                  <h5 className="leading-none">Subscribed</h5>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-6">
              <div className="p-2 px-4 font-semibold text-sm rounded-full flex items-center gap-6 bg-gray-100 text-black">
                <h5 className="leading-none">
                  <BiLike size={18} />
                </h5>
                <h5 className="leading-none">
                  <BiDislike size={18} />
                </h5>
              </div>
              <div className="p-2 px-4 font-semibold text-sm flex items-center gap-4 rounded-full bg-gray-100 text-black">
                <h5 className="leading-none flex items-center gap-2">
                  <PiShareFatThin size={18} /> Share
                </h5>
              </div>
              <div className="p-2 px-4 font-semibold text-sm rounded-full bg-gray-100 text-black">
                <h5 className="leading-none flex items-center gap-2">
                  <TfiDownload size={18} /> Download
                </h5>
              </div>
              <div className="p-2 font-semibold text-sm rounded-full bg-gray-100 text-black">
                <h5 className="leading-none">
                  <HiDotsHorizontal size={18} />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-[${open ? '34%':'30%'}] h-full p-6  pt-0`}>
        <div className="w-full flex overflow-hidden flex-col justify-between rounded-xl border border-gray-300">
          <div className="w-full p-2 px-4 border-b border-gray-300 flex items-center justify-between">
            <span className="text-md">Top chat</span>
            <BiDotsVerticalRounded size={18}/>
          </div>
          <div className="w-full h-[450px] overflow-y-auto"></div>
          <div className="w-full  border-t overflow-hidden border-gray-300 flex items-center pr-4 justify-between">
            <input type="text"  placeholder="chat..." className="pl-4 mr-4 p-2 w-full border-none outline-none"/>
            <IoSendOutline size={20} className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
