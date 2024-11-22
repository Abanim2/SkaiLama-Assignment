import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Upload from "./components/Upload";
import Project from "./components/Project";
import EditTranscripit from "./components/EditTranscript";
import Configuration from "./components/Configuration";
import Transcripit from "./components/Transcript";
import {Home} from "./components/Home"
import Profile from "./components/Profile"
import React, { useState, useEffect, createContext } from "react";

import { API_URL } from "./config/config";

export const UserContext = createContext();
export const ProjectsContext = createContext();


function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);


  const getProjects = async () => {
    try {
      let user = JSON.parse(localStorage.getItem("user"));
      const url = `${API_URL}/projects/${user?._id}`;
      let res = await fetch(url);
      let resp = await res.json();
      setProjects(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      let userObj = JSON.parse(user);
      setUser(userObj);
    }

    // get all projects
    getProjects()
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <ProjectsContext.Provider value={{ projects, setProjects }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/project" element={<Project />}>
              <Route path=":index/Upload" element={<Upload />} />
              <Route path=":projectIndex/:episodeIndex/transcript" element={<Transcripit />} />
              <Route path="EditTranscript" element={<EditTranscripit />} />
              <Route path="Configuration" element={<Configuration />} />
            </Route>
          </Routes>
        </ProjectsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
