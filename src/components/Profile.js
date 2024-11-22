import React from "react";
import Sidenav from "./Sidenav";
import { SlHome } from "react-icons/sl";
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import united from "../united-kingdom.png";
import profilePic from "../linkedinPic.jpeg";
import { Input } from "./Input";

const Profile = () => {
  return (
    <div className="flex ">
      <Sidenav />

      <div className="flex mx-20 flex-col gap-10 mt-5 w-full ">
        <div className="flex justify-between">
          <div className="flex">
            <a href="/home">
              <SlHome className="text-[#7e22ce] font-bold text-xl " />
            </a>
            <span className="text-[#7e22ce] font-semibold pl-2">
              / Account Settings
            </span>
          </div>
          <div className="flex">
            <FaSortDown />
            <h2 className="pl-2 font-bold">EN</h2>
            <img src={united} className="h-[30px] pl-2" />
            <FaRegBell className="p-1 text-3xl font-bold" />
          </div>
        </div>
        <div className="flex">
          <h1 className="text-4xl text-[#7e22ce] font-bold">
            Account Settings
          </h1>
        </div>
        <div className="flex items-center justify-between font-bold">
          <img src={profilePic} className="rounded-full h-[180px] w-[180px]" />
          <Input className="w-[40%]" label="User Name" placeholder="username" />
          <Input className="w-[40%]" label="Email" placeholder="email" />
        </div>
        <h1 className="text-4xl text-[#7e22ce] font-bold">Subscriptions</h1>
        <div className="banner items-center flex justify-between py-8 px-10 text-white rounded-lg bg-gradient-to-r from-[#7E22CE] to-[#460281] ">
          <span className="text-3xl">
            <span>You are currenlty on the</span>{" "}
            <span className="font-bold underline">Ques AI Basic Plan!</span>
          </span>
          <button className="text-[#7e22ce] bg-white p-4 text-xl font-semibold rounded-lg ">
            Upgrade
          </button>
        </div>
        <button className="underline text-red-500 font-semibold text-left">
          {" "}
          Cancel Subscription{" "}
        </button>
      </div>
    </div>
  );
};

export default Profile;
