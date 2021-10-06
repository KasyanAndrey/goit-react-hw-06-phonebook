import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './componets/ContactForm';
import ContactList from './componets/ContactList';
import Filter from './componets/Filter';

import './index.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  changeFilter = event => {
    const value = event.currentTarget.value;

    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalezedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalezedFilter),
    );
  };

  deletContacts = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeletContacts={this.deletContacts}
        />
      </div>
    );
  }
}

export default App;
