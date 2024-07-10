import { put, call } from 'redux-saga/effects';
import axios from '../../services/api';

import * as actions from '../actions/animalActions';

/**
 * Get the data from the server.
 *
 * @param {*} action  The action object with the data.
 */
export function* getAnimalsSaga(action) {
  yield put(actions.getAnimalsStart());
  try {
    const response = yield call(axios.get);

    yield put(actions.getAnimalsSuccess(response.data.animals));
  } catch (error) {
    yield put(actions.getAnimalsFail(error.response.data.message));
  }
}
