import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import styles from './styles';

const Backdrop = (props) =>
  props.show ? (
    <div style={styles.backdrop} onClick={props.clicked}></div>
  ) : null;

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Radium(Backdrop);
