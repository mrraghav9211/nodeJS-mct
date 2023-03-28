import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./style/user.css";
const User = () => {
  const [details, setDetails] = useState();
  const [updatedData, setUpdatedData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    const data = await fetch("https://ecommerce-api-production-ec1e.up.railway.app/user/data");
    const jsonData = await data.json();
    setDetails(jsonData);
    setUpdatedData(jsonData);
    setLoading(true);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(details);
  return( !loading ? 
    <Loading />
 : 
    <div className="user-container">
      <h1>User Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio minima
        dolorem, ex et corrupti perferendis harum reiciendis deleniti porro,
        possimus quaerat ad facere nulla. Veniam velit, numquam veritatis
        debitis dolore ipsam? Esse placeat sed delectus numquam iste maiores
        fuga explicabo!
      </p>
      <label htmlFor="">All</label>
      <input
        type="radio"
        onClick={() => {
          setUpdatedData(details);
        }}
      />
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <label htmlFor="">Female</label>
      <input
        type="radio"
        onClick={() => {
          const femaledata = details.filter(
            (val, idx) => val.gender === "female"
          );
          setUpdatedData(femaledata);
        }}
      />
      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
      <label htmlFor="">Male</label>
      <input
        type="radio"
        onClick={() => {
          const maledata = details.filter((val, idx) => val.gender === "male");
          setUpdatedData(maledata);
        }}
      />
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {updatedData.map((val, idx) => (
          <>
            <tr>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default User;
