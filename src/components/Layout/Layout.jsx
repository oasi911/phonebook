import { StyledHeader } from './Layout.styled';
import { NavBar } from 'components/NavBar/NavBar';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {' '}
      <StyledHeader>
        <NavBar />
        <UserMenu />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};
