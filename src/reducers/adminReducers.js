import {
  ADMIN_SIGNIN_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNOUT,
  ADD_SCHOOL_FAIL,
  ADD_SCHOOL_REQUEST,
  ADD_SCHOOL_SUCCESS,
} from "../constants/adminConstants";

export const AdminSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { loading: true };
    case ADMIN_SIGNIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const AddSchoolReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SCHOOL_REQUEST:
      return { loading: true };
    case ADD_SCHOOL_SUCCESS:
      return { loading: false, schoolInfo: action.payload };
    case ADD_SCHOOL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
