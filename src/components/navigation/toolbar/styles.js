const styles = {
  header: {
    width: '100%',
    height: '64px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  desktopOnly: {
    '@media (max-width: 599px)': {
      display: 'none',
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    marginInline: '15px'
  },
  paragraph: {
    color: 'rgba(168, 50, 50)',
    fontSize: '15px'
  }
};

export default styles;
