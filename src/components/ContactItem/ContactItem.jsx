import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { ContactsList } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <ContactsList>
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body2">{number}</Typography>
    </ContactsList>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
