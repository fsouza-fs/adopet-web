import * as actionTypes from './actionTypes';

export const getAnimals = () => {
  return {
    type: actionTypes.GET_ANIMALS,
  };
};

export const getAnimalsStart = () => {
  return {
    type: actionTypes.GET_ANIMALS_START,
  };
};

export const getAnimalsSuccess = (animals) => {
  return {
    type: actionTypes.GET_ANIMALS_SUCCESS,
    animals: animals,
  };
};

export const getAnimalsFail = (error) => {
  return {
    type: actionTypes.GET_ANIMALS_FAIL,
    error: error,
  };
};
