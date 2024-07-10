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
    age: {
      type: 'number',
      placeholder: 'Idade',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
    breed: {
      type: 'text',
      placeholder: 'Raça',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
    specie: {
      type: 'text',
      placeholder: 'Especie',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
    picture: {
      type: 'text',
      placeholder: 'URL da foto',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
    gender: {
      type: 'text',
      placeholder: 'Genero',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
    vaccinated: {
      type: 'text',
      placeholder: 'Vacinado',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
    description: {
      type: 'text',
      placeholder: 'Descrição',
      value: '',
      valid: false,
      errorMessage: 'Wrong-Empty',
      validation: {
        required: true,
      },
    },
  };
};

const AddAnimal = (props) => {
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

  const createBody = () => {
    return {
      name: formState.name.value,
      age: formState.age.value,
      breed: formState.breed.value,
      specie: formState.specie.value,
      imageUrl: formState.picture.value,
      gender: formState.gender.value,
      vaccinated: formState.vaccinated.value === 'Vacinado' ? true : false,
      description: formState.description.value,
      adopted: false,
    };
  }

  /**
   * Function to add the animal.
   *
   * @param {*} event the event being passed.
   */
  const addAnimalHandler = async (event) => {
    event.preventDefault();
    let updatedShowErrorObj = {};
    for (let key in formState) {
      if (!formState[key].valid) {
        updatedShowErrorObj[key] = true;
      }
    }

    if (isEmpty(updatedShowErrorObj)) {
      try {
        const data = createBody();
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': props.auth,
        };

        const response = await axios.post('admin/add-animal', data, { headers });
        if (response.status === 201) {
          props.history.push('/admin');
        }
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

  let isAdd = true;
  if (props.match.path.includes('edit-animal')) {
    isAdd = false;
  }

  return (
    <div style={styles.addAnimal}>
      <Modal modalClass={styles.addAnimalModal}>
        <h2>{isAdd ? 'Adicionar novo animal' : 'Editar animal'}</h2>
        <form onSubmit={addAnimalHandler} style={styles.form}>
          {formElements}
          <Button btnClass="normal" style={styles.button}>
            {isAdd ? 'Adicionar novo animal' : 'Editar animal'}
          </Button>
        </form>
      </Modal>
    </div>
  );
};

AddAnimal.propTypes = {
  match: PropTypes.object,
  auth: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.token,
  };
};

export default connect(mapStateToProps)(Radium(AddAnimal));
