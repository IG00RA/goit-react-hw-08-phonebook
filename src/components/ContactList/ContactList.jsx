import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Button, Typography } from '@mui/material';
import { selectFiltredContacts } from 'redux/filter/selectors';

export const ContactList = () => {
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
        <div>
          <MagnifyingGlass
            visible={true}
            height={80}
            width={80}
            ariaLabel="MagnifyingGlass-loading"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}
      <ul>
        {filtredContacts.map(contact => (
          <StyledItem key={contact.id}>
            <ContactItem contact={contact} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </StyledItem>
        ))}
      </ul>
      {error && (
        <Typography variant="body1">Sorry, an error occurred.</Typography>
      )}
    </ul>
  );
};
