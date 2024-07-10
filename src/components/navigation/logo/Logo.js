import React from 'react';
import Radium from 'radium';

import logo from '../../../assets/logo.png';
import mobileLogo from '../../../assets/mobile-logo.png';
import styles from './styles';

const Logo = () => {
  return (
    <div style={styles.image}>
      <img
        style={styles.desktopImage}
        src={logo}
        alt="Adopet - Share your home, gain their loves"
      />
      <img
        style={styles.mobileImage}
        src={mobileLogo}
        alt="Adopet - Share your home, gain their loves"
      />
    </div>
  );
};

export default Radium(Logo);
