// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import counterReducer from './counterReducer';
import userReducer from './userReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// Exports
export default rootReducer;