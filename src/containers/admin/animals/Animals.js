import React, { useState, useEffect } from 'react';
import Radium from 'radium';
import axios from '../../../services/api';

import Card from '../../../components/UI/card/Card';
import { createAnimalList, capitalizeString } from '../../../utils/utils';

import styles from './styles';
import buttonStyles from '../../../components/UI/button/styles';

const editAnimalURL = 'admin/edit-animal/';

const links = [
  {
    text: 'Editar',
    style: {
      gridColumn: '2 / 4',
      height: '50px',
      textAlign: 'center',
      lineHeight: '50px',
      textDecoration: 'none',
      ...buttonStyles.normal,
    },
    defaultClass: 'normal',
  },
];

const buttons = [
  {
    text: 'Deletar',
    style: { gridColumn: '5 / 7', height: '50px' },
    defaultClass: 'normal',
  },
];

const Animals = () => {
  const [animalsState, setAnimalsState] = useState([]);

  useEffect(() => {
    async function fetchAnimals() {
      try {
        const { data } = await axios.get();
        setAnimalsState(data.animals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAnimals();
  }, []);

  const animalCards = animalsState.map((animal) => {
    links[0].to = editAnimalURL + animal.id;
    const list = createAnimalList(animal);
    const name = capitalizeString(animal.name);

    return (
      <Card
        key={animal.id}
        url={animal.imageUrl}
        name={name}
        list={list}
        links={links}
        buttons={buttons}
      />
    );
  });

  return <div style={styles.container}>{animalCards}</div>;
};

export default Radium(Animals);
