import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledItem, StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
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
    <StyledList>
      {isLoading && !error && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {filtredContacts.map(contact => (
        <StyledItem key={contact.id}>
          <ContactItem contact={contact} />
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </StyledItem>
      ))}
      {error && <p>Sorry ERROR happened</p>}
    </StyledList>
  );
};
