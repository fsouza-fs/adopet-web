const styles = {
  sideDrawer: {
    position: 'fixed',
    width: '280px',
    maxWidth: '70%',
    height: '100%',
    right: '0',
    top: '0',
    zIndex: '200',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '32px 16px',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease-out',
    '@media (min-width: 600px)': {
      display: 'none',
    },
  },
  open: {
    transform: 'translateX(0)',
  },
  close: {
    transform: 'translateX(200%)',
  },
  nav: {
    height: '250px',
    flexDirection: 'column',
  },
};

export default styles;
