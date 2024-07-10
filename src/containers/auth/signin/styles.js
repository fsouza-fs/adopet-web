const styles = {
  signin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px 0',
  },
  signinModal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
  },
  form: {
    width: '100%',
    padding: '20px 20px 0 20px',
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '30px',
    rowGap: '20px',
  },
  button: {
    gridColumn: '1/3',
    height: '40px',
  },
  inputContainer: {
    gridColumn: '1/3',
  },
  input: {
    width: '100%',
  },
  errorMessageContainer: {
    fontSize: '0.8rem',
    paddingLeft: '8px',
    marginTop: '5px',
    color: '#e91717',
  },
};

export default styles;
