import React from "react";
import "./style/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/product">
          <li>Product</li>
        </Link>
        <Link to="/user">
          <li>User</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
