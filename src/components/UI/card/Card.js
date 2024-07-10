import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link as ReactLink } from 'react-router-dom';

import Button from '../button/Button';

import styles from './styles';

const Link = Radium(ReactLink);

const Card = (props) => {
  let links = null;
  let buttons = null;
  let list = props.list.map((item) => {
    return <li key={item}>{item}</li>;
  });

  if (props.links) {
    links = props.links.map((link) => {
      return (
        <Link key={link.text} style={link.style} to={props.animalId}>
          {link.text}
        </Link>
      );
    });
  }

  if (props.buttons) {
    buttons = props.buttons.map((button) => {
      return (
        <Button
          key={button.text}
          style={button.style}
          btnClass={button.defaultClass}
        >
          {button.text}
        </Button>
      );
    });
  }

  return (
    <article style={styles.card}>
      <div>
        <img style={styles.image} src={props.url} alt="" />
      </div>
      <div style={styles.info}>
        <h2 style={styles.infoName}>{props.name}</h2>
        <ul style={styles.infoList}>{list}</ul>
        {links}
        {buttons}
      </div>
    </article>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
  links: PropTypes.array,
  buttons: PropTypes.array,
};

export default Radium(Card);
