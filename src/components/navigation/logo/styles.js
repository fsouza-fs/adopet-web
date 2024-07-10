const styles = {
  image: {
    flex: '1',
    width: '100%',
    height: '64px',
    paddingLeft: '20px',
  },
  desktopImage: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  mobileImage: {
    display: 'none',
    maxWidth: '100%',
    maxHeight: '100%',
    '@media (max-width: 600px)': {
      display: 'block',
    },
  },
};

export default styles;
