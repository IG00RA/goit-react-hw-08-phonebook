import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { GlobalStyle } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formField: {
    marginTop: '20px',
    maxWidth: 400,
    margin: '0 auto',
    padding: theme.spacing(3),
    borderRadius: 8,
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.438)',
  },
  header: {
    marginBottom: '16px',
  },
}));

export default function Contacts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <div>{isLoading && 'Request in progress...'}</div>
      <GlobalStyle />
      <ContactForm />
      <div className={classes.formField}>
        <h2 className={classes.header}>Your contacts</h2>
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <div>You don't have any contacts added yet.</div>
        )}
      </div>
    </>
  );
}
