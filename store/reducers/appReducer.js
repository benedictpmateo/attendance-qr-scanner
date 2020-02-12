// Initial State
const initialState = {
  isReady: false,
  error: null
};

// Redux: Counter Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_FONT_ERROR': {
      return {
        ...state,
        error: action.value,
      };
    }
    case 'APP_FONT_READY': {
      return {
        ...state,
        isReady: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default appReducer;