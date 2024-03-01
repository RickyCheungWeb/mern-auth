import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text3xl font-bold mb-4 text-size-slate-700">
        Welcome to Ricky's Auth App!
      </h1>
      <p className="mb-4 text-slate-700">
        This web app is built using the MERN stack (MongoDB, Express, React,
        Node.js). It lets users register, log in, and log out. Once you're in,
        you can easily switch up your profile pic by tapping on your avatar.
        You're also able to change your username and password.
      </p>
      <p className="mb-4 text-slate-700">
        The front-end uses React and React Router to move between pages. The
        back-end is developed with Node.js and Express, and the data is stored
        in MongoDB. Authentication is done with something called a JSON Web
        Token (JWT).
      </p>
      <p className="mb-4 text-slate-700">
        I made this app to learn how to build full-stack web apps with
        authentication using the MERN stack. I'm really excited about starting a
        career as a front-end or full-stack developer. If you want to get in
        touch, please visit
      </p>
      <NavLink to="https://rickyc.co/" target="_blank">
        <p className="bg-slate-700 text-white flex justify-center items-center w-36 h-12 mx-auto text-center rounded-lg hover:bg-gray-400 ">My Personal Page</p>
      </NavLink>
    </div>
  );
}

export default Home;
