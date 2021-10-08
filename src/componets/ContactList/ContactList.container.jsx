import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactList from './ContactList';

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
