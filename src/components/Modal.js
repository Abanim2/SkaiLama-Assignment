import React, { useState, useContext, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { Input } from "./Input";
import { API_URL } from "../config/config";
import { useLocation } from "react-router-dom";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";

import { ProjectsContext } from "../App";

export const Modal = ({
  isShowModal,
  img = null,
  setIsShowModal,
  pageName,
  setDataLoading
}) => {
  const [projectName, setProjectName] = useState("");

  const { projects, setProjects } = useContext(ProjectsContext);
const { index } = useParams();
  const { user, setUser } = useContext(UserContext);
  const [sampleName, setSampleName] = useState("");
  const [descriptionName, setDescriptionName] = useState("");
  const location = useLocation()
  const [pathArray, setPathArray] = useState("")

  useEffect(() => {
    let pathArray = location?.pathname?.split("/")
    setPathArray(pathArray)
    console.log(pathArray)
  }, [])

  const createEpisode = async () => {
    try {
      setIsShowModal(false);
      setDataLoading(true)
      console.log(".." , location)
      const url = `${API_URL}/projects/${projects[index]._id}/episodes`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify({ 
          episodeName: sampleName,
          description: descriptionName
         }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setDataLoading(false)
      console.log('Project created successfully!');
      window.location.reload();

    
    } catch (error) {
      console.error('Error creating project:', error.message);
      // Handle error scenarios here
    }
  }
  const createProject = async () => {
    try {
      setIsShowModal(false);
      setDataLoading(true)
      const url = `${API_URL}/projects`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify({ 
          userId: user._id,
          projectName
         }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setDataLoading(false)
        window.location.reload();

      console.log('Project created successfully!');

      
    } catch (error) {
      console.error('Error creating project:', error.message);
    }
  };


  return (
    <>
      {isShowModal && (
        <div className="flex z-10 flex-col w-[600px] border border-2 shadow-lg border-gray-200 bg-white rounded rounded-r-lg rounded-l-lg absolute top-[20%] left-[34%] p-4">
          <div className="flex mt-4 ml-5 justify-between">
            <div className="flex items-center gap-4">
             
              {img && <img src={img} className="h-[40px] " />}

              <h1 className="text-black text-xl font-bold">
                {pageName === "landing"
                  ? "Create Project"
                  : "Upload from Youtube"}
              </h1>
            </div>
            <RxCross2
              onClick={() => {
                setIsShowModal(false);
              }}
              className="text-2xl font-bold mr-[5%]"
            />
          </div>
          <div className="flex flex-col mt-4 ml-5 w-full">
            {pageName === "upload" ? (
              <form className="flex flex-col gap-4">
                <Input
                  label="Name"
                  placeholder="Type here ..."
                  onChange={setSampleName}
                />

                <Input
                  label="Description"
                  placeholder="Type here ..."
                  onChange={setDescriptionName}
                />
              </form>
            ) : (
              <form className="flex flex-col">
                <Input
                  label="Enter Project Name: "
                  placeholder="Type here ..."
                  onChange={setProjectName}
                />
              </form>
            )}
          </div>
          <div className="flex flex-row-reverse mt-5 mr-10">
            {pageName === "landing" ? (
              <div className="flex gap-4 font-semibold"> 
              <button 
              onClick={() => {setIsShowModal(false)}}
              className="bg-white p-2 text-red-500">Cancel</button>
              <button
               onClick={createProject}
              className="p-2 px-3 rounded-[10px] text-white bg-[#7e22ce]">Create</button>
              </div>
            ) : (
              <button
              onClick={createEpisode}
              className="bg-black text-white rounded-md px-4 py-2 ">
                Submit
              </button>
            )}
          </div>
</div>
      )}
    </>
  );
};
