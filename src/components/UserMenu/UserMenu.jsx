import { StyledDiv } from './UserMenu.styled';
import { StyledNavLink } from 'components/NavBar/NavBar.styled';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../redux/auth/authOperations';
import { selectAuthUser, selectIsOnline } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectAuthUser);
  const isUserOnline = useSelector(selectIsOnline);
  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return isUserOnline ? (
    <StyledDiv>
      <p>Hello, {name}</p>
      <Button variant="contained" onClick={handleLogOut}>
        Logout
      </Button>
    </StyledDiv>
  ) : (
    <StyledDiv>
      <StyledNavLink to="/login">Log in</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </StyledDiv>
  );
};
