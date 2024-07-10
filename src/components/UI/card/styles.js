const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '12px',
    boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.1)',
    margin: '15px',
  },
  image: {
    maxWidth: '300px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    justifyContent: 'center',
    rowGap: '10px',
    margin: '20px 10px',
  },
  infoName: {
    gridColumn: '1 / 8',
    paddingLeft: '5px',
  },
  infoList: {
    gridColumn: '1 / 8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};

export default styles;
