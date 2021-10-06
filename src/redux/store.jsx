import { createStore } from 'redux';

const initialState = {
  form: {
    name: '',
    number: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contactForm/InputName':
      return {
        ...state,
        form: {
          ...state.form,
          name: payload,
        },
      };

    case 'contactForm/InputNumber':
      return {
        ...state,
        form: {
          ...state.form,
          number: payload,
        },
      };

    // case 'contactForm/reset':
    //   return { name: '', number: '' };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
