import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { isEmpty } from 'ramda';
import { connect } from 'react-redux';

import Modal from '../../../components/UI/modal/Modal';
import Input from '../../../components/UI/input/Input';
import Button from '../../../components/UI/button/Button';

import axios from '../../../services/api';
import { updateObject, validate } from '../../../utils/utils';
import { errorMessages } from '../../../utils/string';

import styles from './styles';

/**
 * Function to generate the state form.
 */
const createForm = () => {
  return {
    name: {
      type: 'text',
      placeholder: 'Nome',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
        minLengh: 3,
      },
    },
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
      placeholder: 'Senha',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Password',
      validation: {
        required: true,
        minLengh: 9,
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
      },
    },
  };
};

const CreateUser = (props) => {
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
   * Function to create the user.
   *
   * @param {*} event the event being passed.
   */
  const createUserHandler = async (event) => {
    event.preventDefault();
    let updatedShowErrorObj = {};
    for (let key in formState) {
      if (!formState[key].valid) {
        updatedShowErrorObj[key] = true;
      }
    }

    if (isEmpty(updatedShowErrorObj)) {
      try {
        let data = {
          name: formState.name.value,
          email: formState.email.value,
          password: formState.password.value,
        };

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': props.auth,
        }

        const response = await axios.post('admin/create-user', data, { headers });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
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
    // TODO - Update classes
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
    <div style={styles.createUser}>
      <Modal modalClass={styles.createUserModal}>
        <h2>Create New User</h2>
        <form onSubmit={createUserHandler} style={styles.form}>
          {formElements}
          <Button btnClass="normal" style={styles.button}>
            Criar Usuário
          </Button>
        </form>
      </Modal>
    </div>
  );
};

CreateUser.propTypes = {
  auth: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
  };
};

export default connect(mapStateToProps)(Radium(CreateUser));
