const styles = {
  drawerToggle: {
    width: '40px',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    marginRight: '20px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    '@media (min-width: 600px)': {
      display: 'none',
    },
  },
  div: {
    width: '90%',
    height: '3px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

export default styles;
