export const selectFiltredContacts = state => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter)
  );
};
