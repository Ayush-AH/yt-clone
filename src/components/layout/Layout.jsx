import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../feed/Feed";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const Layout = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="w-full flex relative h-full justify-end">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
