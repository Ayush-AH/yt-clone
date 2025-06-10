import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "./utils/axios";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoSendOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const Watch = () => {
  const open = useSelector((state) => state.app.open);
  const [singleVideo, setSingleVideo] = useState(null);
  const [videoComments, setVideoComments] = useState(null);
  const [suggestedVideo, setSuggestedVideo] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const maxLines = 1;
  const lines = singleVideo?.snippet?.description?.split("\n") || [];
  const visibleLines = showMore ? lines : lines.slice(0, maxLines);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const navigate = useNavigate();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      );
      console.log(res?.data?.items[0]);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getVideoComments = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=20&key=AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs`
      );
      console.log(res?.data?.items);
      setVideoComments(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };
  const getsuggestedVideo = async () => {
    try {
      const res = await axios.get("/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          videoCategoryId: singleVideo?.snippet?.categoryId,
          regionCode: "IN",
          maxResults: 20,
          key: "AIzaSyBwwohaeQEZTTAmLGKlq49inCo4PM4E7Zs",
        },
      });
      console.log(res?.data?.items);
      setSuggestedVideo(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!videoId) {
      navigate("/");
    }
    getSingleVideo();
    getsuggestedVideo();
    getVideoComments();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  const handleshare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied! Ready to share.");
  };

  return (
    <div
      style={{ height: "auto" }}
      className={`${
        open ? "sm:w-[84.5%]" : "sm:w-[95%] "
      } p-6 sm:p-3 sm:pl-0 py-[64px] w-full  bg-white dark:bg-black dark:text-white flex flex-col sm:flex-row justify-center`}
    >
      <div className={`${open ? "sm:w-[65%] w-full" : "sm:w-[66%] w-full"}`}>
        <div className="sm:min-h-120 w-full bg-gray-200 dark:bg-white/20 rounded-xl">
          <iframe
            className="rounded-xl w-full aspect-video sm:min-h-120"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-2 ">
          <h2 className="font-bold text-xl">{singleVideo?.snippet?.title}</h2>
          <div className="w-full flex items-center flex-wrap justify-between mt-2">
            <div className="flex items-center gap-4 mb-3 sm:mb-0">
              <div className="w-10 h-10 bg-gray-200 shrink-0 rounded-full"></div>
              <div>
                <h4 className="text-md font-semibold whitespace-nowrap">Developer Ayush</h4>
                <h6 className="text-xs text-gray-800 dark:text-gray-400">
                  29K subscribers
                </h6>
              </div>
              <div className="flex items-center gap-2 sm:ml-6">
                <div className="p-2 px-4 font-semibold text-sm rounded-full bg-black dark:bg-white dark:text-black text-white">
                  <h5 className="leading-none">Join</h5>
                </div>
                <div className="p-2 px-4 font-semibold text-sm rounded-full bg-gray-100 dark:bg-white/20 dark:text-white text-black">
                  <h5 className="leading-none">Subscribed</h5>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ml-6">
              <div className="p-2 px-4 font-semibold text-sm rounded-full flex items-center gap-6 bg-gray-100 dark:bg-white/20 dark:text-white text-black">
                <h5 className="leading-none cursor-pointer flex items-center gap-2">
                  <BiLike size={18} />
                  <span>
                    {(() => {
                      const count = Number(singleVideo?.statistics?.likeCount);
                      if (count >= 1_000_000_000)
                        return (count / 1_000_000_000).toFixed(1) + "B";
                      if (count >= 1_000_000)
                        return (count / 1_000_000).toFixed(1) + "M";
                      if (count >= 1000) return (count / 1000).toFixed(1) + "K";
                      return count;
                    })()}
                  </span>
                </h5>
                <h5 className="leading-none cursor-pointer">
                  <BiDislike size={18} />
                </h5>
              </div>
              <div className="p-2 px-4 font-semibold text-sm flex items-center gap-4 rounded-full dark:bg-white/20 dark:text-white bg-gray-100 text-black">
                <h5
                  onClick={handleshare}
                  className="leading-none flex items-center gap-2 cursor-pointer"
                >
                  <PiShareFatThin size={18} /> Share
                </h5>
              </div>
              <div className="hidden sm:inline-block p-2 px-4 font-semibold text-sm rounded-full bg-gray-100 dark:bg-white/20 dark:text-white text-black">
                <h5 className="leading-none flex items-center gap-2 cursor-pointer">
                  <TfiDownload size={18} /> Download
                </h5>
              </div>
              <div className="p-2 font-semibold text-sm rounded-full bg-gray-100 dark:bg-white/20 dark:text-white text-black">
                <h5 className="leading-none cursor-pointer">
                  <HiDotsHorizontal size={18} />
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full p-2 px-3 mt-2 overflow-hidden  bg-gray-100 dark:bg-white/20 dark:text-white  rounded-xl`}
        >
          <p className="font-bold text-sm">
            {Number(singleVideo?.statistics?.viewCount).toLocaleString()} views
            Feb 9, 2024{" "}
            <span className="text-blue-600"> #reactjs #youtubeclone</span>
          </p>
          <p className="text-sm w-[65%] mt-1">
            {visibleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line.split(/(https?:\/\/[^\s]+)/g).map((part, j) =>
                  part.match(/https?:\/\/[^\s]+/) ? (
                    <a
                      key={j}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      {part}
                    </a>
                  ) : (
                    part
                  )
                )}
                <br />
              </React.Fragment>
            ))}
          </p>

          {lines.length > maxLines && (
            <span
              onClick={() => setShowMore(!showMore)}
              className="text-xs font-bold mt-2 inline-block cursor-pointer"
            >
              {showMore ? "Show Less" : "Show More"}
            </span>
          )}
        </div>
        <div className="w-full sm:px-0  sm:p-2 mt-4 overflow-hidden">
          {videoComments &&
            videoComments.map((comment, idx) => (
              <div key={idx} className="flex  gap-4 mb-3 w-full">
                <div className="w-10 h-10 bg-gray-100  dark:bg-white/20 dark:text-white shrink-0 overflow-hidden rounded-full">
                  <img
                    className="w-full h-full"
                    src={
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorProfileImageUrl
                    }
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">
                    {
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName
                    }
                  </h4>
                  <h6 className="text-sm text-gray-800 dark:text-gray-200">
                    {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
                  </h6>
                  <div className="flex gap-3 mt-2">
                    <BiLike size={18} />
                    <BiDislike size={18} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={`${open ? "w-full sm:w-[35%]" : "w-full sm:w-[30%]"} h-full sm:p-6  pt-0`}>
        {suggestedVideo &&
          suggestedVideo.map((video, idx) => (
            <Link
              to={`/watch?v=${video?.id}`}
              key={idx}
              className="mb-3 w-full flex"
            >
              <div className="thumbnail w-[45%] shrink-0 overflow-hidden bg-gray-100 rounded-md">
                <img
                  className="w-full h-auto"
                  src={video?.snippet?.thumbnails?.medium?.url}
                  alt=""
                />
              </div>
              <div className="px-2">
                <h3 className="text-sm font-semibold mb-1">
                  {video?.snippet?.title.substring(0, 58)}...
                </h3>
                <h3 className="text-xs font-normal">
                  {video?.snippet?.channelTitle}
                </h3>
                <h3 className="text-xs font-normal dark:text-gray-400">
                  59M views
                </h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Watch;
