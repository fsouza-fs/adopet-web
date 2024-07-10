const styles = {
  item: {
    paddingRight: '25px',
    '@media (maxWidth: 732px)': {
      paddingRight: '15px',
    },
  },
  link: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: '1.1em',
    textDecoration: 'none',
    ':hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
    '@media (maxWidth: 732px)': {
      fontSize: '1.05em',
    },
  },
};

export default styles;
