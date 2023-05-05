import PropTypes from 'prop-types';
import { ContactElement } from '../ContactElement/ContactElement';
import { ElementsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  const { isLoading, error } = useSelector(selectContacts);

  return (
    <>
      {' '}
      {isLoading && !error && <p>Loading contacts...</p>}
      <ElementsList>
        {contacts.map(({ name, number, id }) => (
          <ContactElement name={name} number={number} key={id} id={id} />
        ))}
      </ElementsList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};
