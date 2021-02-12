import Axios from "axios";
import API from "../axios/api";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";
import {
  ADMIN_SIGNIN_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNOUT,
  ADD_SCHOOL_FAIL,
  ADD_SCHOOL_REQUEST,
  ADD_SCHOOL_SUCCESS,
} from "../constants/adminConstants";

const BASE_LINK = API.BASE_LINK;

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(BASE_LINK + "/users/register", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    var { data } = await Axios.post(BASE_LINK + "/users/login", {
      email,
      password,
    });
    console.log(data.message, "this is data");
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error, "this is error");
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
  document.location.href = "/signin";
};

export const adminSignin = (email, password) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { email, password } });
  try {
    var { data } = await Axios.post(BASE_LINK + "/users/login", {
      email,
      password,
    });
    // console.log(data, "this is data");
    if (data.isAdmin === 1) {
      // console.log("inside if");
      dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("adminInfo", JSON.stringify(data.token));
    } else if (data.isAdmin === 0) {
      // console.log("inside else");
      dispatch({
        type: ADMIN_SIGNIN_FAIL,
      });
      alert("you are not admin. Dont even try :p");
    }
  } catch (error) {
    // console.log(error, "this is error");
    dispatch({
      type: ADMIN_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminSignout = () => (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_SIGNOUT });
  document.location.href = "/admin";
};

export const addSchool = (schoolName, schoolAddress, schoolLat, schoolLong, createdBy, adminInfo) => async (
  dispatch
) => {
  dispatch({
    type: ADD_SCHOOL_REQUEST,
    payload: { schoolName, schoolAddress, schoolLat, schoolLong, createdBy}
  });
  const config = {
    headers: { Authorization: `Bearer ${adminInfo.token}` },
  };
  try {
    console.log(adminInfo.token, 'this is admin token');
    var { data } = await Axios.post(
      BASE_LINK + "/addschool/",
      {
        schoolName,
        schoolAddress,
        schoolLat,
        schoolLong,
        createdBy
      },
      config
    );
    console.log(data.message, "this is data");
    dispatch({ type: ADD_SCHOOL_SUCCESS, payload: data });
    alert("school added successfully")
  } catch (error) {
    console.log(error, "this is error");
    dispatch({
      type: ADD_SCHOOL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

