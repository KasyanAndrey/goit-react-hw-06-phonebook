import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeletContacts }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <button onClick={() => onDeletContacts(id)} className={s.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeletContacts: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalezedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalezedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProp = dispatch => ({
  onDeletContacts: id => dispatch(contactsActions.deliteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProp)(ContactList);
