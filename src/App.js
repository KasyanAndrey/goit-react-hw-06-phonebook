import React from 'react';

import ContactForm from './componets/ContactForm';
import ContactList from './componets/ContactList';
import Filter from './componets/Filter';

import './index.css';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
