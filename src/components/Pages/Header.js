import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";


const Header = () => {
  const [mode, setMode] = useState('')

  useEffect(() => {
    setMode(localStorage.getItem("mode"))
  }, [])
  const toogler = () => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "light")
    }
    else if (localStorage.getItem("mode") === "light") {
      localStorage.setItem("mode", "dark")
    }
    else if (localStorage.getItem("mode") === "dark") {
      localStorage.setItem("mode", "light")
    }
    window.location.reload()
  }
  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return
  }
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
          </ul>
        </div>
        <Link to='/home' className="btn btn-ghost normal-case text-xl">Tech Learning</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/courses'>Courses</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={toogler} className={`btn btn-sm mr-5 ${mode === "light" && "bg-white text-black"}`}>{mode}</button>
        {
          !user && <Link to={'/login'} className="btn">Login</Link>
        }
        {
          user &&
          <div className="dropdown">
            <button className="btn">
              {
                user &&
                <div className="avatar">
                  <div className="w-10 rounded-full mr-2">
                    <img src={user ? user.photoURL ? user.photoURL : "https://placeimg.com/192/192/people" : "https://placeimg.com/192/192/people"} />
                  </div>
                </div>
              }
              {user ? user.displayName ? user.displayName : user.email.slice(0, 15) : "Login"}</button>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><button onClick={() => {
                signOut(auth)
              }}>Logout</button></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;
