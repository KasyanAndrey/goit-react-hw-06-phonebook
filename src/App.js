import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './componets/ContactForm';
import ContactList from './componets/ContactList';
import Filter from './componets/Filter';

import useLocalStorage from './hooks/useLocalStorage';

import './index.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(state => [...state, contact]);
    }
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;

    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  const deletContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeletContacts={deletContacts} />
    </div>
  );
}
