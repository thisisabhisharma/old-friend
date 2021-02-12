const {
    SCHOOL_LIST_REQUEST,
    SCHOOL_LIST_SUCCESS,
    SCHOOL_LIST_FAIL,
    SCHOOL_INFO_FAIL,
    SCHOOL_INFO_REQUEST,
    SCHOOL_INFO_SUCCESS,
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
