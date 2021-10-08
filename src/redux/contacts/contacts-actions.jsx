import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('App/contactAdd', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deliteContact = createAction('App/contactDelete');
const changeFilter = createAction('App/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deliteContact, changeFilter };
