import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProp = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Filter);
