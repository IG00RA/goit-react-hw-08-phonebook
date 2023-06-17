import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  contactContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    padding: '10px',
    border: '1px solid  #949494',
    borderRadius: '5px',
  },
  name: {
    fontWeight: 'bold',
  },
  number: {
    color: '#999999',
  },
}));

export const ContactItem = ({ contact: { name, number } }) => {
  const classes = useStyles();
  return (
    <div className={classes.contactContainer}>
      <Typography variant="body1" className={classes.name}>
        {name}
      </Typography>
      <Typography variant="body2" className={classes.number}>
        {number}
      </Typography>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
