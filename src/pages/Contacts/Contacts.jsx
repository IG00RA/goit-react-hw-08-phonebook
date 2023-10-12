import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { GlobalStyle } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { FullPageLoader } from 'components/Loader/Loader';
import { StyledDiv } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <div>{isLoading && <FullPageLoader />}</div>
      <GlobalStyle />
      <ContactForm />
      <StyledDiv>
        <h2>Your contacts</h2>
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <div>
            <p>You don't have any contacts added yet.</p>
          </div>
        )}
      </StyledDiv>
    </>
  );
}
