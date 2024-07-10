import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';

import styles from './styles';

const NavigationItem = (props) => {
  return (
    <li style={styles.item} className="navLink">
      <NavLink style={styles.link} to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Radium(NavigationItem);
