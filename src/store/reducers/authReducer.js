import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
  isAuth: false,
  token: null,
  userId: null,
  error: null,
};

const loginStart = (state) => {
  return updateObject(state, { error: null });
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    isAuth: true,
    token: action.idToken,
    userId: action.userId,
    error: null,
  });
};

const loginFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const logout = (state) => {
  return updateObject(state, { isAuth: false, token: null, userId: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return loginStart(state);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state, action);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export default reducer;
