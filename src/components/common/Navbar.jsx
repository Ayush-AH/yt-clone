import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import axios from "../utils/axios";
import {
  setCategory,
  setSearchSuggetion,
  toggleSidebar,
} from "../utils/counterSlice";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const dispatch = useDispatch();
  const { searchSuggetion } = useSelector((state) => state.app);
  const [input, setinput] = useState("");
  const path = useLocation();
  const navigate = useNavigate();
  const [serachParams] = useSearchParams();
  const query = serachParams.get("search_query");

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    navigate(`/?search_query=${input}`);
    dispatch(setCategory(input));
  };
// useEffect(() => {
//   const fetchSuggestions = async () => {
//     try {
//       const res = await axios.get(
//         `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`
//       );
//       console.log(res);
//       dispatch(setSearchSuggetion(res.data[1])); // use res.data instead of res
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (input.trim().length > 0) {
//     fetchSuggestions();
//   }
// }, [input]);


  return (
    <div className="fixed top-0 z-10 w-full h-16 flex items-center justify-between bg-white dark:bg-black dark:text-white py-2 px-6">
      <div className="flex items-center gap-5">
        <GiHamburgerMenu
          onClick={handleToggleSidebar}
          className="cursor-pointer hidden sm:inline-block"
          size={"24px"}
        />
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <form
        onSubmit={handleSearch}
        className="hidden sm:flex items-center w-[40%] border border-gray-400 rounded-full relative"
      >
        {/* <div className="w-[88%] flex flex-col p-4 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-black/80 shadow-xl shadow-black/10 dark:shadow-white/10 absolute top-[110%] left-0">
          <span className="py-1 text-sm flex items-center gap-2">
            <CiSearch size={22} /> ayush vlogs
          </span>
        </div> */}
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          className="border w-full border-none  border-gray-400 py-2 px-4 dark:text-white dark:placeholder:text-white outline-none"
          placeholder="Search"
          type="text"
        />
        <button className="px-6 border-l cursor-pointer border-gray-400 py-2 h-full">
          <CiSearch size={22} />
        </button>
      </form>
      <div className="flex items-center gap-5">
        <DarkModeToggle/>
        <CiVideoOn size={"24px"} className="hidden sm:inline-block"/>
        <IoIosNotificationsOutline size={"24px"}  className="hidden sm:inline-block"/>
        <img
          className="rounded-full w-[30px] h-[30px]"
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
