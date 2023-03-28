import React from "react";
import ContectUs from "./ContectUs";
import Homedetails from "./Homedetails";
import Nav from "./Nav";
import Product from "./Product";
import User from "./User";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Nav /> <Homedetails />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Nav />
              <Product />
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              <Nav />
              <User />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Nav />
              <ContectUs />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
