import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

import Modal from '../../../components/UI/modal/Modal';
import Input from '../../../components/UI/input/Input';
import Button from '../../../components/UI/button/Button';
import errorHandler from '../../../hoc/errorHandler/ErrorHandler';

import { login } from '../../../store/actions/authActions';
import { updateObject, validate } from '../../../utils/utils';
import { errorMessages } from '../../../utils/string';
import axios from '../../../services/api';

import styles from './styles';

/**
 * Function to generate the state form.
 */
const createForm = () => {
  return {
    email: {
      type: 'email',
      placeholder: 'Email',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Email',
      validation: {
        required: true,
        minLengh: 9,
        regex: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },
    password: {
      type: 'password',
      placeholder: 'Password',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Password',
      validation: {
        required: true,
        // minLengh: 9,
        // regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      },
    },
  };
};

const Signin = (props) => {
  // States
  const [formState, setFormState] = useState(createForm());
  // TODO - update to receive error from server
  const [showErrorState, setShowErrorState] = useState({});

  // Variables
  let formElements = [];

  /**
   * Function responsible for handling input values and changes.
   *
   * @param {*} event the event.
   * @param {*} input the input which is being changed.
   */
  const inputChangedHandler = (event, input) => {
    let value = event.target.value;
    const updatedForm = updateObject(formState, {
      [input]: updateObject(formState[input], {
        value: value,
        valid: validate(value, formState[input].validation),
      }),
    });

    setFormState(updatedForm);
  };

  /**
   * Function to handle the login.
   *
   * @param {*} event the event being passed.
   */
  const loginHandler = (event) => {
    event.preventDefault();
    let updatedShowErrorObj = {};
    for (let key in formState) {
      if (!formState[key].valid) {
        updatedShowErrorObj[key] = true;
      }
    }

    if (isEmpty(updatedShowErrorObj)) {
      let email = formState.email.value;
      let password = formState.password.value;
      props.onLogin(email, password);
    } else {
      setShowErrorState(updatedShowErrorObj);
    }
  };

  // Create the form inputs.
  for (let key in formState) {
    let classes = ['inputElement'];
    let errorContainer = <div style={styles.errorMessageContainer}></div>;

    // If the form is invalid, show the appropriate error to the input.
    // TODO - update to receive error from server
    if (showErrorState[key]) {
      classes.push('invalidInput');
      errorContainer = (
        <div style={styles.errorMessageContainer}>
          <p>{errorMessages[formState[key].errorMessage]}</p>
        </div>
      );
    }

    // Create the elements.
    formElements.push(
      <div style={styles.inputContainer} key={key}>
        <Input
          classes={classes}
          type={formState[key].type}
          placeholder={formState[key].placeholder}
          value={formState[key].value}
          valid={formState[key].valid}
          validation={formState[key].validation}
          onChangeEvent={(e) => inputChangedHandler(e, key)}
        />
        {errorContainer}
      </div>
    );
  }

  return (
    <div style={styles.signin}>
      <Modal modalClass={styles.signinModal}>
        <h2>Login</h2>
        <form onSubmit={loginHandler} style={styles.form}>
          {formElements}
          <Button btnClass="normal" style={styles.button}>
            Login
          </Button>
        </form>
      </Modal>
    </div>
  );
};

Signin.propTypes = {
  onLogin: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(errorHandler(Radium(Signin), axios));
