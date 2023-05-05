import {
  StyledForm,
  AddBtn,
  StyledLabel,
  StyledInput,
  Paragraph,
} from './ContactForm.styler';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    if (true) {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value,
        })
      );
    }

    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <Paragraph>Name</Paragraph>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        <Paragraph>Number</Paragraph>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <AddBtn>Add Contact</AddBtn>
    </StyledForm>
  );
};
