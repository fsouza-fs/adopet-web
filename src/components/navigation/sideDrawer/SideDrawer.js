import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../UI/backdrop/Backdrop';

import styles from './styles';

const SideDrawer = (props) => {
  let attachedClasses = [styles.sideDrawer, styles.close];
  if (props.open) {
    attachedClasses = [styles.sideDrawer, styles.open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div style={attachedClasses}>
        <NavigationItems style={styles.nav} />
      </div>
    </React.Fragment>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool,
  closed: PropTypes.func,
};

export default Radium(SideDrawer);
