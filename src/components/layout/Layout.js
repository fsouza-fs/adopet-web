import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';

const Layout = (props) => {
  // States
  const [sideDrawerState, setSideDrawerState] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerState(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerState(!sideDrawerState);
  };

  return (
    <React.Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={sideDrawerState} closed={sideDrawerClosedHandler} />
      <main style={{ height: '100%' }}>{props.children}</main>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
