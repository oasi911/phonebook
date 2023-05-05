import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding-bottom: 15px;
  padding-top: 15px;
  color: black;
  font-weight: 700;
  &.active {
    color: #8b9199;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
