import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { getFilteredContacts } from './FilteredContacts';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  const { items: contacts } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} />
      {contacts.length ? (
        <ContactList contacts={getFilteredContacts(contacts, filter)} />
      ) : (
        <p style={{ paddingLeft: '40px' }}>Please add at least 1 contact</p>
      )}
    </>
  );
};
