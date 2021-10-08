import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactForm from './ContactForm';

const mapDispatchToProp = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsActions.addContact({ name, number })),
});

export default connect(null, mapDispatchToProp)(ContactForm);
