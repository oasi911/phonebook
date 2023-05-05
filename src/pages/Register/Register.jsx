import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { StyledLoginForm } from '../Login/Login.styled';
import { registerThunk } from '../../redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    dispatch(registerThunk({ name, email, password }));
  };

  return (
    <>
      {' '}
      <StyledLoginForm $center onSubmit={handleSubmit}>
        {' '}
        <h1>Registration</h1>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          type="text"
          name="name"
          autoComplete="name"
          required
        />
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
          autoComplete="new-password"
          id="new-password"
          required
          minLength={7}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </StyledLoginForm>
    </>
  );
};
