import { StyledNav, StyledNavLink } from './NavBar.styled';
import { useSelector } from 'react-redux';
import { selectIsOnline } from 'redux/selectors';

export const NavBar = () => {
  const isOnline = useSelector(selectIsOnline);

  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isOnline && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
