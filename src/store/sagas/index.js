import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, loginUserSaga } from './auth';
import { getAnimalsSaga } from './animal';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.LOGIN, loginUserSaga),
    takeLatest(actionTypes.GET_ANIMALS, getAnimalsSaga),
  ]);
}
