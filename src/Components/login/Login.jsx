import React, { useState, useEffect } from "react";
import "./Login.css";
import Gt from "../images/bad.png";
// import app, { auth, signIn } from '../context/Util/firebaseConfig';
// import {createContext,  useUserContext } from '../context/UserContextState'; // Adjusted import
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextState";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useUserContext();

  // handle Login
  const handleLogin = async () => {
    if (email === "" || password === "") {
      console.log(email, password);
      alert("Please enter your Student ID and Password");
      return;
    }

    // setLoading(true);
    // try {
    //   const reponse = login(email, password);
    //   console.log(reponse);
    //   setLoading(false);
    //   navigate("/");
    // } catch (error) {
    //   console.error(error);
    //   setLoading(false);
    // }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="gt">
          <span>GHANA COMMUNICATION TECHNOLOGY UNIVERSITY</span>
          <img src={Gt} alt="" />
          <span>Document Management System</span>
        </div>
        <div className="l-details">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Student ID"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="l-sign" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
