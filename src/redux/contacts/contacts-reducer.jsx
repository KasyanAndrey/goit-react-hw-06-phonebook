import { combineReducers } from 'redux';
import types from './contacts-types';

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const items = (
  state = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  { type, payload },
) => {
  switch (type) {
    case types.ADD:
      if (state.find(({ name }) => name === payload.name)) {
        alert(`${payload.name} is already in contacts.`);
      } else {
        return [...state, payload];
      }

    // eslint-disable-next-line no-fallthrough
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
