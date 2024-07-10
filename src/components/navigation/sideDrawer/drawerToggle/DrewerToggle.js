import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import styles from './styles';

const DrawerToggle = (props) => (
  <div style={styles.drawerToggle} onClick={props.clicked}>
    <div style={styles.div}></div>
    <div style={styles.div}></div>
    <div style={styles.div}></div>
  </div>
);

DrawerToggle.propTypes = {
  clicked: PropTypes.func,
};

export default Radium(DrawerToggle);
