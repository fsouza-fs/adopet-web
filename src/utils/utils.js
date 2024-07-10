/**
 * Function to update and object without losing its properties values
 * which weren't changed.
 *
 * @param {*} oldObject         The field of the object that hasn't changed
 * @param {*} updatedProperties The properties which have been updated
 */
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

/**
 * Function to validate a value from an input.
 *
 * @param {*} value The value received from the input
 * @param {*} rules The rules to decide whether the value is
 *                  valid or not.
 */
export const validate = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLengh) {
    isValid = value.length >= rules.minLengh && isValid;
  }
  if (rules.regex) {
    isValid = rules.regex.test(value);
  }

  return isValid;
};

/**
 * Capitalizes the string.
 *
 * @param {*} string  The string to be capitalized.
 */
export const capitalizeString = (string) => {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
};

/**
 * Create the animal list used to be displayed in the cards.
 *
 * @param {*} animal The animal data.
 */
export const createAnimalList = (animal) => {
  const gender = capitalizeString(animal.gender) === 'Male' ? 'Macho' : 'Femea';
  const age = animal.age + ' anos';
  const isVaccinated = animal.vaccinated ? 'Vacinado' : 'Não vacinado';
  return [gender, age, isVaccinated];
};
