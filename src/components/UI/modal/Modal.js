import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import Backdrop from '../backdrop/Backdrop';

import styles from './styles';

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div style={[styles.modal, props.modalClass]}>{props.children}</div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
  modalClass: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default React.memo(Radium(Modal));
