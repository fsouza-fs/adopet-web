import * as actionTypes from './actionTypes';

export const logout = () => {
  return {
    type: actionTypes.INITIATE_LOGOUT,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const login = (email, password) => {
  return {
    type: actionTypes.LOGIN,
    email: email,
    password: password,
  };
};

export const loginSuccess = (token, userId) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const loginFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error,
  };
};
