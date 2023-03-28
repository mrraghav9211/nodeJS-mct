import React, { useState } from "react";
import "./style/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState()

  const registerUser = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://ecommerce-api-production-ec1e.up.railway.app/user/register",
        {
          name: name,
          email: email,
          password: password,
          phone_number: phone,
          gender: gender,
          city: city,
        },
        config
      );
      console.log(response)
      if(response.data.email === email){
        alert("User Registration Successfully.")
        navigate('/', { replace: true })
      }else{
        setError("Please Enter valid Credentials!")
      }
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
      setError(error.message)
      console.log(error);
    }
  };
  return (
    <div style={{ top: "2vh" }} className="login-container">
      <section className="left-section">
        <h1>Welcome back to Signup</h1>
        <p>It's great to have you back!</p>
        <label htmlFor="">Name</label>
        <br />
        <input type="text" required onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input type="email" required onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label htmlFor="">Phone</label>
        <br />
        <input type="number" required onChange={(e) => setPhone(e.target.value)} />
        <br />
        <label htmlFor="">Gender</label>
        <br />
        <select name="" id="" onClick={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label htmlFor="">City</label>
        <br />
        <input type="text" required onChange={(e) => setCity(e.target.value)} />
        <br />
        <br />
        <div className="btn-detail">
          <button>LOGIN</button>
          <button onClick={registerUser}>SIGNUP</button>
        </div>
        <div className="other-login-method">
          <p>or login with</p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>Facebook</span>
          <span>Google</span>
        </div>
        <p style={{textAlign:'center',color:'red'}}>{error}</p>
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

export default Signup;
