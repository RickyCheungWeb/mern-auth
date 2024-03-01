import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text3xl font-bold mb-4 text-size-slate-700">About</h1>
      <p className="mb-4 text-slate-700">
        Hey, I'm Ricky and I'm super passionate about coding and building apps.
        Lately, I've been focusing on React and I've learned a lot through
        online courses. I'm also trying to get some experience with the backend
        stuff by working on a project using NodeJS, MongoDB, and Firebase.
      </p>

      <p className="mb-4 text-slate-700">Feel free to contact me at</p>
      <NavLink to="https://rickyc.co/" target="_blank">
        <p className="bg-slate-700 text-white flex justify-center items-center w-36 h-12 mx-auto text-center rounded-lg hover:bg-gray-400 ">
          My Personal Page
        </p>
      </NavLink>
    </div>
  );
}
