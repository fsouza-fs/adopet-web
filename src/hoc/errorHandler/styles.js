const styles = {
  modalShow: {
    transform: 'translateY(0)',
    opacity: '1',
    position: 'fixed',
    zIndex: '500',
    backgroundColor: 'white',
    width: '70%',
    maxWidth: '450px',
    border: '1px solid #ccc',
    boxShadow: '1px 1px 1px black',
    padding: '16px',
    left: '0',
    right: '0',
    top: '30%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease-out',
    margin: '0 auto',
  },
  modalHide: {
    transform: 'translateY(-100vh)',
    opacity: '0',
  },
};

export default styles;
