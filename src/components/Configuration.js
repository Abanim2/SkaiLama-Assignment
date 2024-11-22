import React, { useState } from "react";
// import Sidenav from './Sidenav'
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import { Input } from "./Input";
import { SlHome } from "react-icons/sl";
import united from "../united-kingdom.png";
import { SlPencil } from "react-icons/sl";
import { BiZoomIn } from "react-icons/bi";
// import HorizontalLine from './HorizontalLine';

const Configuration = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="flex flex-col mx-12 gap-8">
      <div className="flex mt-5 justify-between">
        <div className="flex gap-2">
          <a href="/home">
            <SlHome className="text-[#7e22ce] font-bold text-xl " />
          </a>

          <span className="text-[#a7a7a7] font-semibold pl-2">
            / Sample Project /
          </span>
          <span className="text-[#7e22ce] pl-2 font-bold text-lg">
            {" "}
            Widget Configuration
          </span>
        </div>
        <div className="flex gap-2">
          <FaSortDown />
          <h2 className="pl-2 font-semibold">EN</h2>
          <img src={united} className="h-[30px] pl-2" />
          <FaRegBell className="p-1 text-3xl font-bold" />
        </div>
      </div>
      <p className="text-4xl text-[#7e22ce] font-bold">Configuration</p>
      <div className="flex flex-col">
        <div className="flex text-md font-bold  gap-4">
          <h2
            onClick={() => {
              setSelectedCategory("general");
            }}
            class={`cursor-pointer ${
              selectedCategory === "general"
                ? "z-20 border-b-4 border-[#7e22ce] text-[#7e22ce]"
                : ""
            }`}
          >
            General
          </h2>

          <h2
            onClick={() => {
              setSelectedCategory("display");
            }}
            class={`cursor-pointer ${
              selectedCategory === "display"
                ? "z-20 border-b-4 border-[#7e22ce] text-[#7e22ce]"
                : ""
            }`}
          >
            Display
          </h2>
          <h2
            onClick={() => {
              setSelectedCategory("advance");
            }}
            class={`cursor-pointer ${
              selectedCategory === "advance"
                ? "z-20 border-b-4 border-[#7e22ce] text-[#7e22ce]"
                : ""
            }`}
          >
            Advance
          </h2>
        </div>
        {/* <HorizontalLine className='w-[80%] text-gray'/> */}
        <div className="border-t-4 border-gray-400 width-full mt-[-4px] rounded"></div>
      </div>

      {selectedCategory === "general" && (
        <form className="flex flex-col gap-1">
          <Input className="text-xl font-bold" label="Chatbot Name" />
          <p className="text-md text-gray-400">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>

          <Input className="text-xl font-bold" label="Welcome Message" />
          <p className="text-md text-gray-400">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
          <Input className="text-xl font-bold" label="Input Placeholder" />
          <p className="text-md text-gray-400">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </form>
      )}

      {selectedCategory === "display" && <div>Display</div>}

      {selectedCategory === "advance" && <div>Advance</div>}
    </div>
  );
};

export default Configuration;
