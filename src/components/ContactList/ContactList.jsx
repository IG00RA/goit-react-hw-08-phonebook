import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { List, Button, makeStyles, Typography } from '@material-ui/core';
import { selectFiltredContacts } from 'redux/filter/selectors';

const useStyles = makeStyles(theme => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
  },
  loadingSpinner: {
    margin: theme.spacing(2),
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  deleteButton: {
    marginLeft: theme.spacing(2),
  },
}));

export const ContactList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFiltredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {isLoading && !error && (
        <div className={classes.loadingContainer}>
          <MagnifyingGlass
            visible={true}
            height={80}
            width={80}
            ariaLabel="MagnifyingGlass-loading"
            className={classes.loadingSpinner}
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}
      <List>
        {filtredContacts.map(contact => (
          <StyledItem key={contact.id}>
            <ContactItem contact={contact} />
            <Button
              variant="outlined"
              color="secondary"
              className={classes.deleteButton}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </StyledItem>
        ))}
      </List>
      {error && (
        <Typography variant="body1" className={classes.errorText}>
          Sorry, an error occurred.
        </Typography>
      )}
    </ul>
  );
};
