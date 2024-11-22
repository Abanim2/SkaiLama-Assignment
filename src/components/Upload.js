import React, { useState, useContext } from "react";
import { SlHome } from "react-icons/sl";
import { FaSortDown, FaRegBell } from "react-icons/fa6";
import united from "../united-kingdom.png";
import QuickUpload from "./QuickUpload";
import rss from "../rss.png";
import spotify from "../spotify.png";

import {TailSpin} from 'react-loading-icons'
import youtube from "../youtube.png";
import { Modal } from "./Modal";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../App";
import Table from "./Table"

const Upload = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { projects, setProjects } = useContext(ProjectsContext);

  const [dataLoading, setDataLoading] = useState(false);
  console.log("Upload - Projects:", projects);

  const { index } = useParams();

  return (
    <div className="flex flex-col mx-12 gap-1">
      <div className="flex mt-5 justify-between">
        <div className="flex">
          <a href="/home">
            <SlHome className="text-[#7e22ce] font-bold text-xl " />
          </a>

          <span className="text-[#a7a7a7] font-semibold pl-2">
            / {projects[index]?.projectName} /
          </span>
          <span className="text-[#7e22ce] pl-2"> Upload</span>
        </div>
        <div className="flex">
          <FaSortDown />
          <h2 className="pl-2 font-bold">EN</h2>
          <img src={united} className="h-[30px] pl-2" />
          <FaRegBell className="p-1 text-3xl font-bold" />
        </div>
      </div>
      <h1 className=" text-[#7e22ce] font-bold text-3xl ml-5 mt-5">Upload</h1>
      <div
        onClick={() => {
          setIsShowModal(true);
        }}
        className="mt-10 grid grid-cols-3 gap-x-[90px] gap-y-4"
      >
        <QuickUpload img={youtube} />
        <QuickUpload img={spotify} />
        <QuickUpload img={rss} />
        <QuickUpload img={youtube} />
        <QuickUpload img={spotify} />
        <QuickUpload img={rss} />
      </div>
      <Modal
        isShowModal={isShowModal}
        img={youtube}
        pageName="upload"
        setIsShowModal={setIsShowModal}
        setDataLoading={setDataLoading}
      />
      <h1 className="text-2xl text-gray-300 m-auto mt-10">or</h1>
      {projects[index]?.episodes?.length ? (
        <Table data={projects[index]?.episodes} project={projects[index]} projectIndex={index} setDataLoading={setDataLoading}/>
      ) : (
        <div className="flex flex-col gap-4 border outline-dashed  border-2 rounded-[10px] p-6 mt-10">
          <svg
            className="m-auto"
            width="90"
            height="70"
            viewBox="0 0 128 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.2 54.4666C99.5733 36.0666 83.4133 22.2533 64 22.2533C48.5867 22.2533 35.2 31 28.5333 43.8C12.48 45.5066 0 59.1066 0 75.5866C0 93.24 14.3467 107.587 32 107.587H101.333C116.053 107.587 128 95.64 128 80.92C128 66.84 117.067 55.4266 103.2 54.4666ZM101.333 96.92H32C20.2133 96.92 10.6667 87.3733 10.6667 75.5866C10.6667 64.6533 18.8267 55.5333 29.6533 54.4133L35.36 53.8266L38.0267 48.76C43.0933 39 53.0133 32.92 64 32.92C77.9733 32.92 90.0267 42.84 92.7467 56.5466L94.3467 64.5466L102.507 65.1333C110.827 65.6666 117.333 72.6533 117.333 80.92C117.333 89.72 110.133 96.92 101.333 96.92ZM42.6667 70.2533H56.2667V86.2533H71.7333V70.2533H85.3333L64 48.92L42.6667 70.2533Z"
              fill="#7E22CE"
            />
          </svg>
          <p className="text-2xl m-auto">
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p className="text-gray-400 m-auto text-lg">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
          </p>
          <button
            onClick={() => {
              setIsShowModal(true);
            }}
            className="text-[#7e22cd] border border-1 border-[#7e22cd] p-2 px-4 hover:bg-gray-100 rounded-[20px] m-auto "
          >
            Select File
          </button>
        </div>
      )}

      {isShowModal && (
        <div className="absolute inset-0 bg-black bg-opacity-70 z-2"></div>
      )}

{dataLoading && <div className="absolute z-20 inset-0 bg-black bg-opacity-70"><TailSpin strokeWidth={5} speed={.95} className="h-[80px] z-20 w-[80px] absolute top-[45%] left-[50%] rounded-full" stroke="#7e22ce"/></div>  }

    </div>
  );
};

export default Upload;
