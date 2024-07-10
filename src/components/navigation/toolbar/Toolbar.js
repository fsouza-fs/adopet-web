import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import axios from '../../../services/api';

import Logo from '../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrewerToggle';

import styles from './styles';

const Toolbar = (props) => {
  const [stackInfo, setStackInfo] = useState('');
  
  useEffect(() => {
    async function getStackInfo() {
      try {
        const { data } = await axios.get('stack-info');
        setStackInfo(data);

      } catch (error) {
        console.log(error);
      }
    }
    getStackInfo();
  }, []);

  return (
    <header style={styles.header}>
      <Logo />
      <div style={styles.info}>
        <p style={styles.paragraph}>
          site-ip: {stackInfo.siteIpAddress}
        </p>
      </div>
      <div style={styles.info}>
        <p style={styles.paragraph}>
          service-ip: {stackInfo.serviceIpAddress}
        </p>
      </div>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <NavigationItems style={styles.desktopOnly} />
    </header>
  );
};

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func,
};

export default Radium(Toolbar);
