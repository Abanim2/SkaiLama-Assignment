import React from 'react'
import {useNavigate} from "react-router-dom"

const Navitems = ({ selected, name, number, setClickedTab, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <a href={navigateTo}>
    <li
      onClick={() => {
        
        setClickedTab(name);
        // navigate(navigateTo)
      }}
      className={`flex items-center w-[100%] gap-2 ${
        selected ? "bg-[#7e22ce] text-white rounded-full" : "text-black"
      }  mt-4 p-3`}
    >
      <span
        className={`${
          selected ? "bg-[#1e1e1e] text-white" : "bg-[#d8cfe4] text-"
        }  text-sm rounded-full px-2 py-[2px]`}
      >
        {number}
      </span>
      <h2 className=" font-semibold text-sm ">{name}</h2>
    </li>
    </a>
  );
};

export default Navitems