const styles = {
  container: {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '50px auto',
    '@media (min-width: 600px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
};

export default styles;
