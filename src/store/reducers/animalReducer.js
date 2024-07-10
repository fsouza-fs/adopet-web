import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
  animals: [],
  error: null,
};

const animalsStart = (state) => {
  return updateObject(state, { error: null, animals: [] });
};

const animalsSuccess = (state, action) => {
  return updateObject(state, {
    animals: action.animals,
  });
};

const animalsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMALS_START:
      return animalsStart(state);
    case actionTypes.GET_ANIMALS_SUCCESS:
      return animalsSuccess(state, action);
    case actionTypes.GET_ANIMALS_FAIL:
      return animalsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
