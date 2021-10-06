export const inputName = value => ({
  type: 'contactForm/InputName',
  payload: value,
});

export const inputNumber = value => ({
  type: 'contactForm/InputNumber',
  payload: value,
});

export const reset = value => ({
  type: 'contactForm/reset',
  payload: value,
});
