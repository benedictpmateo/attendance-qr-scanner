// Imports: Dependencies
import * as Font from 'expo-font';
import { call, takeLatest, put } from 'redux-saga/effects';

// Increase Counter Async
function* loadFont () {
  try {
    yield put({ type: 'APP_FONT_READY', payload: false })
    yield put({ type: 'APP_FONT_ERROR', payload: null })

    yield call(Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    ));
  
    yield call(Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    ));
  } catch (error) {
    yield put({ type: 'APP_FONT_ERROR', payload: error })
  } finally {
    yield put({ type: 'APP_FONT_READY', payload: true })

  }
}

// Generator: Watch Counter
export function* appWatcher() {
  yield takeLatest('APP_LOAD_FONT', loadFont);
}