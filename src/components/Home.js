import React,{useState} from "react";
import ContectUs from "./ContectUs";
import Homedetails from "./Homedetails";
import Nav from "./Nav";
import Product from "./Product";
import User from "./User";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Productdetail from "./Productdetail";

const Home = () => {
  const [id, setId] = useState()
  const [data, setData] = useState()
  console.log(id, data)
  return (
    <div>
      <Routes>
        <Route
          path="/productdetail"
          element={
            <>
              <Nav />
              <Productdetail id={id} data={data} />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
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
              <Product setId={setId} setData={setData} />
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
