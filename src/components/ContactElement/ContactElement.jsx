import PropTypes from 'prop-types';
import { List, DeleteBtn } from './ContactElement.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

export const ContactElement = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectContacts);
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <List>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn onClick={handleDelete} disabled={isLoading}>
        Delete
      </DeleteBtn>
    </List>
  );
};

ContactElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClickDeleteBtn: PropTypes.func,
};
