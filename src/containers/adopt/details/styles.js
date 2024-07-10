const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    '@media (min-width: 600px)': {
      width: '800px',
    },
  },
  image: {
    maxWidth: '100%',
  },
  info: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    rowGap: '15px',
    marginTop: '15px',
    '@media (min-width: 600px)': {
      rowGap: '40px',
    },
  },
  name: {
    gridColumn: '1/8',
    paddingLeft: '15px',
  },
  list: {
    gridColumn: '1/8',
    display: 'flex',
    justifyContent: 'space-around',
  },
  description: {
    gridColumn: '1/8',
  },
  button: {
    gridColumn: '2/7',
    height: '50px',
  },
  editButton: {
    gridColumn: '2/4',
  },
  deleteButton: {
    gridColumn: '5/7',
  },
};

export default styles;
