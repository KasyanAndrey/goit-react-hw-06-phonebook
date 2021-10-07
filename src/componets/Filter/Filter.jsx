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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProp = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Filter);
