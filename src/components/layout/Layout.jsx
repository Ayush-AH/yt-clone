import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import { Toaster } from "react-hot-toast";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="h-full bg-white dark:bg-black">
        <Navbar />
        <div className="w-full flex relative h-full justify-end bg-white dark:bg-black">
          <Sidebar/>
          <Outlet />
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default Layout;
