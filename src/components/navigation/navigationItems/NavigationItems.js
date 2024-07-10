import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';

import NavigationItem from './navigationItem/NavigationItem';
import styles from './styles';

export const NavigationItems = (props) => {
  let classes = styles.nav;
  if (props.style) {
    classes = [styles.nav, props.style];
  }
  let items = (
    <React.Fragment>
      <NavigationItem link="/" exact>
        Adotar
      </NavigationItem>
      <NavigationItem link="/about" exact>
        Quem Somos
      </NavigationItem>
      <NavigationItem link="/admin/login">Administração</NavigationItem>
    </React.Fragment>
  );

  if (props.isAuth) {
    items = (
      <React.Fragment>
        <NavigationItem link="/admin">Animais</NavigationItem>
        <NavigationItem link="/admin/add-animal">Adicionar Animal</NavigationItem>
        <NavigationItem link="/admin/create-user">Criar Usuario</NavigationItem>
        <NavigationItem link="/admin/logout">Sair</NavigationItem>
      </React.Fragment>
    );
  }

  return <nav style={classes}>{items}</nav>;
};

NavigationItems.propTypes = {
  style: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Radium(NavigationItems));
