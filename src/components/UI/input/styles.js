const styles = {
  inputElement: {
    border: '2px solid #e4e2e2',
    borderRadius: '5px',
    width: '100%',
    height: '42px',
    backgroundColor: 'transparent',
    padding: '0 10px',

    ':focus': {
      borderColor: 'rgba(0, 0, 0, 0.7)',
      outline: 'none',
    },
  },

  inputError: {
    ':focus': {
      borderColor: '#e60000',
    },
  },

  invalidInput: {
    borderColor: '#e60000',
  },

  inputSuccess: {
    ':focus': {
      borderColor: '##54e600',
    },
  },
};

export default styles;
