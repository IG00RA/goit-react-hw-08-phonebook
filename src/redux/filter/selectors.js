export const getFiltredContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter)
  );
};
