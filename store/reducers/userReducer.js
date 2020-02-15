// Initial State
const initialState = {
  loader: false,
  error: null,
  data: [],
  user: null,
  success: false,
};

// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SUCCESS': {
      return {
        ...state,
        success: action.payload
      };
    }
    case 'USER_ERROR': {
      return {
        ...state,
        error: action.payload
      };
    }
    case 'USER_LOADER': {
      return {
        ...state,
        loader: action.payload
      };
    }
    case 'USER_DATA': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'USER_SET': {
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

// Exports
export default userReducer;