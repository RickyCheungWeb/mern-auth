import React from "react";
import logo from "../assets/RickyLogo.png";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className="flex items-center gap-6">
            <img src={logo} alt="" className="w-8 h-8" />
            <h1 className="font-bold text-xl">Auth App Demo</h1>
          </div>
        </Link>
        <ul className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white bg-black px-2" : "px-2 hover:text-white hover:bg-slate-400"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white bg-black px-2" : "px-2 hover:text-white hover:bg-slate-400"
            }
          >
            <li>About</li>
          </NavLink>

          {/* making profile page private and show user photo */}
          <Link
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-white  px-2" : "px-2 hover:text-white hover:bg-slate-400"
            }
          >
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
