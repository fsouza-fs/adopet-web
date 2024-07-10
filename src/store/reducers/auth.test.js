import reducer from './authReducer';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isAuth: false,
      token: null,
      userId: null,
      error: null,
    });
  });

  it('should store the token upon login', () => {
    expect(
      reducer(
        {
          isAuth: false,
          token: null,
          userId: null,
          error: null,
        },
        {
          type: actionTypes.LOGIN_SUCCESS,
          isAuth: true,
          idToken: 'some-token',
          userId: 'some-user-id',
        }
      )
    ).toEqual({
      isAuth: true,
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
    });
  });

  it('should store an error upon login fail', () => {
    expect(
      reducer(
        {
          isAuth: false,
          token: null,
          userId: null,
          error: null,
        },
        {
          type: actionTypes.LOGIN_FAIL,
          error: 'Login has failed',
        }
      )
    ).toEqual({
      isAuth: false,
      token: null,
      userId: null,
      error: 'Login has failed',
    });
  });

  it('should reset the token, userId and isAuth upon logout', () => {
    expect(
      reducer(
        {
          isAuth: true,
          token: 'some-token',
          userId: 'some-user-id',
          error: null,
        },
        {
          type: actionTypes.LOGOUT,
          isAuth: false,
          idToken: null,
          userId: null,
        }
      )
    ).toEqual({
      isAuth: false,
      token: null,
      userId: null,
      error: null,
    });
  });
});
