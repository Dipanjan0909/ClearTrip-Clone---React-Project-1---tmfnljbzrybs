// LoginComponent.js
import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked with:", { username, password });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
            backgroundColor: "#3498db",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            textAlign: 'center'
          }}
        >
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
