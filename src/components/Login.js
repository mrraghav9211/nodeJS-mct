import React, { useState } from "react";
import "./style/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const authUser = async () => {
    console.log("login clicked");
    console.log(typeof password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://ecommerce-api-production-ec1e.up.railway.app/user/auth",
        { email: email, password: password },
        config
      );
      if (response.data.email === email) {
        navigate("/home", { replace: true });
      }
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)

      console.log(error);
    }
    console.log("login ended");
  };
  return (
    <div className="login-container">
      <section className="left-section">
        <h1>Welcome back to Login</h1>
        <p>It's great to have you back!</p>
        <label htmlFor="">Email</label>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <div className="btn-detail">
          <button onClick={authUser}>LOGIN</button>
          <button>CREATE ACCOUNT</button>
        </div>
      </section>
      <section className="right-section">
        <img
          src="https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?size=626&ext=jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Login;
