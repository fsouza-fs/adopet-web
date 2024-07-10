import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';

import Card from '../../components/UI/card/Card';
import { createAnimalList, capitalizeString } from '../../utils/utils';
import { getAnimals } from '../../store/actions/animalActions';

import styles from './styles';
import buttonStyles from '../../components/UI/button/styles';

const detailsURL = 'details/';

const links = [
  {
    text: 'Me adote!',
    style: {
      gridColumn: '1 / 8',
      height: '50px',
      textAlign: 'center',
      lineHeight: '50px',
      textDecoration: 'none',
      ...buttonStyles.normal,
    },
    defaultClass: 'normal',
  },
];

const Adopt = (props) => {
  const { onGetAnimals } = props;
  useEffect(() => {
    onGetAnimals();
  }, [onGetAnimals]);

  let animalCards = null;
  if (props.animals) {
    animalCards = props.animals.map((animal) => {
      const detailsPath = detailsURL + animal.id;
      const list = createAnimalList(animal);
      const name = capitalizeString(animal.name);

      return (
        <Card
          key={animal.id}
          url={animal.imageUrl}
          name={name}
          list={list}
          links={links}
          animalId={detailsPath}
        />
      );
    });
  }

  // Creates the links which the card will have, in this case
  // will be only the adopt me link which will go to the details
  // page.

  return <div style={styles.container}>{animalCards}</div>;
};

Adopt.propTypes = {
  animals: PropTypes.array,
  onGetAnimals: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    animals: state.animal.animals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAnimals: () => dispatch(getAnimals()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Adopt));
