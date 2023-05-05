import { Button, TextField } from '@mui/material';
import { StyledLoginForm } from './Login.styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(loginThunk({ email, password }));
  };

  return (
    <>
      {' '}
      <StyledLoginForm $center onSubmit={handleSubmit}>
        {' '}
        <h1>Login</h1>
        <TextField
          id="filled-basic"
          label="E-mail"
          variant="filled"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          name="password"
          autoComplete="current-password"
          id="current-password"
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </StyledLoginForm>
    </>
  );
};
