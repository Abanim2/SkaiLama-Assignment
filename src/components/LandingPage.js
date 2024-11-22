import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { Input } from "./Input";
import { FiPlusCircle } from "react-icons/fi";
import { LandingPageImage } from "./LandingPageImage";
import { Modal } from "./Modal";
import { RxCross2 } from "react-icons/rx";
import { API_URL } from "../config/config";
import { UserContext } from "../App";

import {TailSpin} from 'react-loading-icons'

const LandingPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [email, setEmail] = useState("");

  const [dataLoading, setDataLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const createUser = async () => {
   
    try {
      setDataLoading(true)
      const url = `${API_URL}/user`;
      setShowUserModal(false)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
        body: JSON.stringify({ email }),
      });
      

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

     let res = await response.json()
      setDataLoading(false)
     
      localStorage.setItem('user', JSON.stringify(res.user))
      setUser(res.user)

      alert('User created successfully!');

    } catch (error) {
      console.error('Error creating user:', error.message);
     
    }

  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      // setShowUserModal(false)
    } else {
      setShowUserModal(true);
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Navbar />

      <p className="text-[#7e22ce] text-5xl font-bold text-center">
        Create a New Project
      </p>
      {/* <img src={landingPage} className="w-[500px] h-[300px] m-auto pl-2" /> */}
      <LandingPageImage />
      <p className="w-[70%] m-auto text-2xl text-[#8c8c8c]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <button
        onClick={() => {
          setIsShowModal(true);
        }}
        className="bg-[#211935] items-center text-white gap-3 text-xl rounded-md py-4 px-8 flex m-auto hover:bg-[#342754]"
      >
        <FiPlusCircle className="text-3xl" />

        <p>Create New Project</p>
      </button>

      <Modal
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        pageName="landing"
        setDataLoading={setDataLoading}
      />
      {isShowModal && <div className="absolute inset-0 bg-black bg-opacity-70 z-2"></div>}
      {/* user modal */}

      {showUserModal && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}

      {showUserModal && (
        <div className="flex flex-col w-[400px] gap-4 items-start border border-2 shadow-lg border-gray-200 bg-white rounded rounded-r-lg rounded-l-lg absolute top-[25%] left-[36%] p-4">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-3xl font-bold">New User Registeration</h1>
            {/* <RxCross2
            onClick={() => {setShowUserModal(false)}}
            className="text-xl font-bold"/> */}
          </div>

          <Input
            className="w-full"
            label="Please enter your Email"
            placeholder="Type here ..."
            type="email"
            onChange={setEmail}
          />
          <button
            onClick={createUser}
            className="p-2 px-3 rounded-[10px] text-white bg-[#7e22ce]"
          >
            Submit
          </button>
        </div>
      )}

{dataLoading && <div className="absolute inset-0 bg-black bg-opacity-70"><TailSpin strokeWidth={5} speed={.95} className="h-[80px] w-[80px] absolute top-[45%] left-[50%] rounded-full" stroke="#7e22ce"/></div>  }

    </div>
  );
};

export default LandingPage;
