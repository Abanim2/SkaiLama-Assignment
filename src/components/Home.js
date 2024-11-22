import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { ProjectInfoCard } from "./ProjectInfoCard";
import { UserContext } from "../App";
import { FiPlusCircle } from "react-icons/fi";
import { Modal } from "./Modal";
import {TailSpin} from 'react-loading-icons'
import { API_URL } from "../config/config";

export const Home = () => {
  const [projects, setProjects] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const [isShowModal, setIsShowModal] = useState(false);

  const getProjects = async () => {
    try {
      setDataLoading(true)
      let user = JSON.parse(localStorage.getItem("user"));
      const url = `${API_URL}/projects/${user?._id}`;
      let res = await fetch(url);
      let resp = await res.json();
      setDataLoading(false)
      setProjects(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <Navbar />
     {dataLoading && <div className="absolute inset-0 bg-black bg-opacity-70"><TailSpin strokeWidth={5} speed={.95} className="h-[80px] w-[80px] absolute top-[45%] left-[50%] rounded-full" stroke="#7e22ce"/></div>  }

      <header className="flex justify-between items-center mx-40">
        <h1 className="text-6xl font-bold text-[#7e22ce]">Projects</h1>
        <button
          onClick={() => {
            setIsShowModal(true);
          }}
          className="bg-[#211935] justify-between items-center text-white gap-3 text-xl rounded-md py-3 px-6 flex hover:bg-[#342754]"
        >
          <FiPlusCircle className="text-3xl" />

          <p>Create New Project</p>
        </button>
      </header>

      <div className="grid grid-cols-3 gap-x-48 gap-y-20 mx-40">
        {projects?.map((item, index) => (
          <ProjectInfoCard data={item} index={index} />
        ))}
      </div>
      <Modal
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        setDataLoading={setDataLoading}
        pageName="landing"
      />
      {isShowModal && <div className="absolute inset-0 bg-black bg-opacity-70 z-2"></div>}
    </div>
  );
};
