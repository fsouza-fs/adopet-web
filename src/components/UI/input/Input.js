import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = (props) => {
  let classes = [];
  for (let n in props.classes) {
    classes.push(styles[props.classes[n]]);
  }

  // if (!props.valid) {
  //   classes.push(styles.inputError);
  // }

  if (classes.length === 1) {
    classes = classes[0];
  }

  return (
    <input
      style={styles.inputElement}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChangeEvent}
    />
  );
};

Input.propTypes = {
  valid: PropTypes.bool,
  classes: PropTypes.array,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func,
};

export default Input;
