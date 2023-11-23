import React from "react";
import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <header className="clearmytrip-header">
        <div className="header-content">
          <NavLink to={"/"} style={{textDecoration: 'none'}}><h1 className="logo">ClearMyTrip Clone</h1></NavLink>
          <button
            className="login-logout login-button"
            onClick={handleLoginLogout}
          >
            <NavLink to={'/login'}style={{textDecoration: 'none', color: 'black'}}>{isLoggedIn ? "Logout" : "Login"}</NavLink>
          </button>
        </div>
      </header>
      <Outlet/>
    </>
  );
}
