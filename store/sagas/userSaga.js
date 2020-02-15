import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios'

const apiGet = () => axios.get('http://intense-taiga-92297.herokuapp.com/users');
const apiGetQR = (payload) => axios.get(`http://intense-taiga-92297.herokuapp.com/users-qr/${payload}`);
const apiPost = (payload) => axios.post('http://intense-taiga-92297.herokuapp.com/users', payload);

// Increase Counter Async
function* loadUsers () {
  try {
    yield put({ type: 'USER_LOADER', payload: true })
    yield put({ type: 'USER_ERROR', payload: null })

    const {data} = yield call(apiGet);
    yield put({ type: 'USER_DATA', payload: data });
  } catch (error) {
    yield put({ type: 'USER_ERROR', payload: error })
  } finally {
    yield put({ type: 'USER_LOADER', payload: false })
  }
}

function* addUser ({ payload }) {
  try {
    yield put({ type: 'USER_LOADER', payload: true })
    yield put({ type: 'USER_ERROR', payload: null })

    yield call(apiPost, payload);
    yield put({ type: 'USER_SUCCESS', payload: true });
  } catch (error) {
    yield put({ type: 'USER_ERROR', payload: error })
  } finally {
    yield put({ type: 'USER_LOADER', payload: false })
    yield put({ type: 'USER_SUCCESS', payload: false });
  }
}

function* getUserQR ({ payload }) {
  
  try {
    yield put({ type: 'USER_LOADER', payload: true })
    yield put({ type: 'USER_ERROR', payload: null })

    const {data} = yield call(apiGetQR, payload);
    yield put({ type: 'USER_SET', payload: data });
  } catch (error) {
    yield put({ type: 'USER_ERROR', payload: error })
  } finally {
    yield put({ type: 'USER_LOADER', payload: false })
  }
}

// Generator: Watch Counter
export function* userWatcher() {
  yield takeLatest('USER_GET_ALL', loadUsers);
  yield takeLatest('USER_ADD', addUser);
  yield takeLatest('USER_GET_QR', getUserQR);
}