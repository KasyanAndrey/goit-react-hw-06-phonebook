import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor="">
    <p className={s.title}>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} className={s.input} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalezedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalezedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProp = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Filter);

// ----- или --------

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;

//   const visibleContacts = getVisibleContacts(items, filter);

//   return {
//     value: visibleContacts,
//   };
// };
