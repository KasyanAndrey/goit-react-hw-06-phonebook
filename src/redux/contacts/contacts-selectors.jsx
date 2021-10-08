export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalezedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalezedFilter),
  );
};
