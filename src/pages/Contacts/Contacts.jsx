import { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { getFilteredContacts } from 'components/FilteredContacts';

export const ContactsPage = () => {
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
