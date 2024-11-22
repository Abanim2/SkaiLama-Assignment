import React from "react";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";

const Project = () => {
  return (
    <div className="w-[100%] flex">
      <Sidenav />
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Project;
