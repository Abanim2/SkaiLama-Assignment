import React, { useState, useContext } from "react";
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import { SlHome } from "react-icons/sl";
import united from "../united-kingdom.png";
import { SlPencil } from "react-icons/sl";
import { ProjectsContext } from "../App";
import { API_URL } from "../config/config";
import { useParams } from "react-router-dom";

import {TailSpin} from 'react-loading-icons'

const Transcript = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  const { projectIndex, episodeIndex } = useParams();
  const [input, setInput] = useState();
  const [showEditElements, setShowEditElements] = useState(false);
  const [dataLoading, setDataLoading] = useState(false)
  
  const showEditTranscript = () => {
    setInput(projects[projectIndex]?.episodes[episodeIndex]?.description);
    setShowEditElements(true);
  };
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const discardHandler = () => {
    setShowEditElements(false);
    setInput(projects[projectIndex]?.episodes[episodeIndex]?.description);
  };

  const updateEpisodeDescription = async () => {
    try {
      setDataLoading(true)
      const response = await fetch(`${API_URL}/episodes/${projects[projectIndex]?.episodes[episodeIndex]._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newDescription: input }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update description: ${response.status}`);
      }
      setDataLoading(false)
  
      const responseData = await response.json();
      console.log(responseData); 
      alert('Episode updated successfully')
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('Unable to update episode description successfully')
    }
  }
 
  const saveHandler = () => {
    setShowEditElements(false);
    updateEpisodeDescription()
  };

  return (
    <div className="flex flex-col mx-12 gap-10">
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <a href="/home">
            <SlHome className="text-[#7e22ce] font-bold text-xl " />
          </a>

          <span className="text-[#a7a7a7] font-semibold pl-2">
            / {projects[projectIndex]?.projectName} /
          </span>
          <span className="text-[#7e22ce] pl-2 font-bold text-lg">
            {" "}
            Transcripit
          </span>
        </div>
        <div className="flex">
          <FaSortDown />
          <h2 className="pl-2 font-semibold">EN</h2>
          <img src={united} className="h-[30px] pl-2" />
          <FaRegBell className="p-1 text-3xl font-bold" />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="font-bold text-4xl text-[#7e22ce]">Edit Transcripit</p>
        {showEditElements && (
          <div className="flex gap-3">
            <button
              onClick={discardHandler}
              className="border border-2 rounded-[5px] border-red-400 text-red-400 px-4 py-1 font-semibold"
            >
              Discard
            </button>
            <button
              onClick={saveHandler}
              className="border border-1 rounded-[5px] bg-black text-white px-4 py-1"
            >
              Save & exit
            </button>
          </div>
        )}
      </div>
      <div className="border border-2 rounded-[6px] border-[#7e22ce] px-4 py-1">
        <div className="flex mt-2  justify-between">
          {!showEditElements && (
            <button
              onClick={showEditTranscript}
              className=" flex gap-1 border border-1 rounded-[20px] bg-gray-700  text-sm px-4 py-1"
            >
              <SlPencil className="text-md text-white mt-1" />
              <p className="text-white">EditMode</p>
            </button>
          )}

          {/* <BiZoomIn className="text-[#7e22ce] text-xl" /> */}
        </div>
        <h1 className="text-lg font-bold text-[#7e22ce] mt-2">Speaker</h1>
        {showEditElements ? (
          <textarea
            className="w-full"
            value={input}
            onChange={inputChangeHandler}
          ></textarea>
        ) : (
          <p className="text-black text-md mt-2">
            {projects[projectIndex]?.episodes[episodeIndex]?.description}
          </p>
        )}
      </div>
      {dataLoading && <div className="absolute inset-0 bg-black bg-opacity-70"><TailSpin strokeWidth={5} speed={.95} className="h-[80px] w-[80px] absolute top-[45%] left-[50%] rounded-full" stroke="#7e22ce"/></div>  }

    </div>
  );
};

export default Transcript;
