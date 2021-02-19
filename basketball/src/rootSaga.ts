import { takeEvery } from 'redux-saga/effects';
import { signInSaga, signOutSaga } from './store/sagaActions/auth';

export function* rootSaga() {
  yield takeEvery('SIGN_IN', signInSaga);
  yield takeEvery('SIGN_OUT', signOutSaga);
}
