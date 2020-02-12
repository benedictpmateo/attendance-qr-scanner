import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchCounter } from './counterSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchCounter),
  ]);
};