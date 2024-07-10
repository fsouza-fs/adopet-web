import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import styles from './styles';

const Button = (props) => {
  const buttonClass = styles[props.btnClass];

  return (
    <button
      style={[buttonClass, props.style]}
      onClick={props.onClickEvent}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  btnClass: PropTypes.object.isRequired,
  style: PropTypes.object,
  onClickEvent: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Radium(Button);
