import { takeEvery } from 'redux-saga/effects';
import { signInSaga, signOutSaga, changeAuthDataSaga } from './store/sagaActions/auth';

export function* rootSaga() {
  yield takeEvery('SIGN_IN', signInSaga);
  yield takeEvery('SIGN_OUT', signOutSaga);
  yield takeEvery('CHANGE_USER', changeAuthDataSaga);
}
