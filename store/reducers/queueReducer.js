// Initial State
const initialState = {
  queue: [],
};

// Redux: Counter Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPEND_QUEUE': {
      return {
        ...state,
        queue: [...state.queue, action.payload],
      };
    }
    case 'REMOVE_QUEUE': {
      return {
        ...state,
        queue: state.queue.filter((_d, i) => i === action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;