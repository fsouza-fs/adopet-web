import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';

import Button from '../../../components/UI/button/Button';
import { createAnimalList } from '../../../utils/utils';

import styles from './styles';

const Details = (props) => {
  const { id } = props.match.params;

  const animal = props.animals.find(
    (animal) => animal.id.toString() === id.toString()
  );

  if (!animal) {
    return null;
  }

  const list = createAnimalList(animal);
  const listElements = list.map((item) => <li key={item}>{item}</li>);

  return (
    <article style={styles.container}>
      <div>
        <img style={styles.image} src={animal.imageUrl} alt={animal.name} />
      </div>
      <div style={styles.info}>
        <h2 style={styles.name}>{`Oi, eu sou o ${animal.name}`}</h2>
        <ul style={styles.list}>{listElements}</ul>
        <div style={styles.description}>{animal.description}</div>
        <Button style={[styles.button, styles.editButton]} btnClass="normal">
          Adotar
        </Button>
        <Button style={[styles.button, styles.deleteButton]} btnClass="normal">
          Ajude com recursos
        </Button>
      </div>
    </article>
  );
};

Details.propTypes = {
  animals: PropTypes.array,
  onGetAnimals: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    animals: state.animal.animals,
  };
};

export default connect(mapStateToProps)(Radium(Details));
