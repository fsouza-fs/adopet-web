import { put, call } from 'redux-saga/effects';
import axios from '../../services/api';

import * as actions from '../actions/authActions';

/**
 * Logout from the server. Clears the localStorage with data from the user.
 */
export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(actions.logoutSuccess());
}

/**
 * Try to login in the website.
 *
 * @param {*} action  The action object with the data.
 */
export function* loginUserSaga(action) {
  yield put(actions.loginStart());
  const authData = {
    email: action.email,
    password: action.password,
  };
  try {
    const response = yield call(axios.post, 'admin/login', authData);

    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(
      actions.loginSuccess(response.data.idToken, response.data.localId)
    );
  } catch (error) {
    yield put(actions.loginFail(error.response.data.message));
  }
}
