const {
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_SUCCESS,
    SCHOOL_LIST_FAIL,
    SCHOOL_INFO_FAIL,
    SCHOOL_INFO_REQUEST,
    SCHOOL_INFO_SUCCESS,
    SCHOOL_ID_FAIL,
    SCHOOL_ID_REQUEST,
    SCHOOL_ID_SUCCESS,
    ADD_YOURSELF_FAIL,
    ADD_YOURSELF_REQUEST,
    ADD_YOURSELF_SUCCESS
  } = require('../constants/schoolConstants');
  
  export const schoolListReducer = (
    state = { loading: true, schools: [] },
    action
  ) => {
    switch (action.type) {
      case SCHOOL_LIST_REQUEST:
        return { loading: true };
      case SCHOOL_LIST_SUCCESS:
        return { loading: false, schools: action.payload };
      case SCHOOL_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const schoolInfoReducer = (
    state = { loading: true, schoolInfo: [] },
    action
  ) => {
    switch (action.type) {
      case SCHOOL_INFO_REQUEST:
        return { loading: true };
      case SCHOOL_INFO_SUCCESS:
        return { loading: false, schoolInfo: action.payload };
      case SCHOOL_INFO_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const schoolIdReducer = (
    state = { loading: true, schoolId: [] },
    action
  ) => {
    switch (action.type) {
      case SCHOOL_ID_REQUEST:
        return { loading: true };
      case SCHOOL_ID_SUCCESS:
        return { loading: false, schoolId: action.payload };
      case SCHOOL_ID_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const addYourselfReducer = (
    state = { loading: true, addYourself: [] },
    action
  ) => {
    switch (action.type) {
      case ADD_YOURSELF_REQUEST:
        return { loading: true };
      case ADD_YOURSELF_SUCCESS:
        return { loading: false, addYourself: action.payload };
      case ADD_YOURSELF_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };