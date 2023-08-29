// import React from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

function User() {
  // For Params
  let param = useParams();
  let { id, name } = param;
  console.log(id, id == undefined);

  // id = id === undefined ? 0 : id;

  // For SearchParams
  let [firstParams, setFirstParams] = useSearchParams();
  let age = firstParams.get("age");
  let area = firstParams.get("area");
  let city = firstParams.get("city");

  // For useNavigate
  let navigate = useNavigate();
  return (
    <div>
      <h1>this is {name} Page</h1>
      {id != undefined ? (
        <p>Employee id: {id} </p>
      ) : (
        <p>Non registered Employee</p>
      )}
      <ul>
        <li>
          <h3>Age : {age}</h3>
        </li>
        <li>
          <h3>Area : {area}</h3>
        </li>
        <li>
          <h3>City : {city}</h3>
        </li>
      </ul>
      <button
        onClick={() =>
          setFirstParams({ area: "Gulistan-e-Jauhar", age: age, city: "Dubai" })
        }
      >
        Change Area
      </button>
      <button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default User;
