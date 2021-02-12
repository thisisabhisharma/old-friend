import Axios from "axios";
import API from "../axios/api";
import {
  SCHOOL_LIST_FAIL,
  SCHOOL_LIST_REQUEST,
  SCHOOL_LIST_SUCCESS,
  SCHOOL_INFO_SUCCESS,
  SCHOOL_INFO_REQUEST,
  SCHOOL_INFO_FAIL,
} from "../constants/schoolConstants";

const BASE_LINK = API.BASE_LINK;

export const listSchools = () => async (dispatch) => {
  dispatch({
    type: SCHOOL_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(BASE_LINK + "/getallschool/");
    dispatch({ type: SCHOOL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SCHOOL_LIST_FAIL, payload: error.message });
  }
};

export const schoolInfoAction = (sid, userInfo) => async (dispatch) => {
  // const sid = '18';
  dispatch({
    type: SCHOOL_INFO_REQUEST,
    payload: { sid },
  });
  const config = {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  };
  try {
    const { data } = await Axios.post(
      BASE_LINK + "/getusersfromschool/",
      { sid },
      config
    );
    dispatch({ type: SCHOOL_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SCHOOL_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};