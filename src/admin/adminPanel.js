// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSchool } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function AdminSigninScreen(props) {
  const [schoolName, setschoolName] = useState("");
  const [schoolAddress, setschoolAddress] = useState("");
  const [schoolLat, setschoolLat] = useState("");
  const [schoolLong, setschoolLong] = useState("");
  const [createdBy, setcreatedBy] = useState("");
  const adminSigninState = useSelector((state) => state.adminSignin);
  const { adminInfo, loading, error } = adminSigninState;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addSchool(schoolName, schoolAddress, schoolLat, schoolLong, createdBy, adminInfo));
  };


  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>Admin Panel</h2>
          <h2>Add school</h2>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">School Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setschoolName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="address">address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter School Address"
            required
            onChange={(e) => setschoolAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="lat">lat</label>
          <input
            type="text"
            id="lat"
            placeholder="Enter School lat"
            required
            onChange={(e) => setschoolLat(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="long">long</label>
          <input
            type="text"
            id="long"
            placeholder="Enter School long"
            required
            onChange={(e) => setschoolLong(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="created by">created by</label>
          <input
            type="text"
            id="creator"
            placeholder="Created by"
            required
            onChange={(e) => setcreatedBy(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
