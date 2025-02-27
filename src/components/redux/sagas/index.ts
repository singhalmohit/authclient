import { all, fork } from 'redux-saga/effects';
import registerGuestSaga from '../../bootStrapper/sagas/registerGuestSaga';

export default function* rootSaga() {
  yield all([
    fork(registerGuestSaga),
  ]);
}