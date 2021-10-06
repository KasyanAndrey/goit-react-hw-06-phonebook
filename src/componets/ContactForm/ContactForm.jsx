import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.css';

function ContactForm({ name, number, handleChangeName, handleChangeNumber }) {
  // state = {
  //   name: '',
  //   number: '',
  // };

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;

  //   this.setState({ [name]: value });
  // };

  const handleSabmit = event => {
    event.preventDefault();

    // this.props.onSubmit(this.state);
    // this.reset();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  // const { name, number } = this.state;

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  return (
    <form className={s.form} onSubmit={handleSabmit}>
      <p className={s.title}>Name</p>
      <label htmlFor={nameInputId}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={() => handleChangeName()}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={nameInputId}
          required
          className={s.input}
        />
      </label>

      <p className={s.title}>Number</p>
      <label htmlFor={numberInputId}>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={() => handleChangeNumber()}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          id={numberInputId}
          required
          className={s.input + ' ' + s.number}
        />
      </label>

      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  name: state.form.name,
  number: state.form.number,
});

const mapDispatchToProps = dispatch => ({ 
  handleChangeName: value => dispatch(actions.inputName(value)),
  handleChangeNumber: value => dispatch(actions.inputNumber(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

//  <form onSubmit={this.handleSabmit} className={s.form}></form>
