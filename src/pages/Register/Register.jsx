import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { StyledLoginForm } from '../Login/Login.styled';
import { registerThunk } from '../../redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateName = value => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(value);
  };

  const validateEmail = value => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const validatePassword = value => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(value);
  };

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
          label="Name"
          variant="filled"
          type="text"
          name="name"
          autoComplete="name"
          title="Must contain from 3 to 16 characters. Only letters, numbers and underscores."
          onChange={e => setName(e.target.value)}
          error={!validateName(name)}
          helperText={
            !validateName(name)
              ? 'Must contain from 3 to 16 characters. Only letters, numbers and underscores.'
              : ''
          }
          required
        />
        <TextField
          label="E-mail"
          variant="filled"
          type="email"
          name="email"
          autoComplete="email"
          title="Must contain «@» and «.» symbols."
          onChange={e => setEmail(e.target.value)}
          error={!validateEmail(email)}
          helperText={
            !validateEmail(email) ? "Must contain '@' and '.' symbols." : ''
          }
          required
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          name="password"
          autoComplete="new-password"
          title="Minimum 8 characters. Must contain one number and one letter."
          onChange={e => setPassword(e.target.value)}
          error={!validatePassword(password)}
          helperText={
            !validatePassword(password)
              ? 'Minimum 8 characters. Must contain one number and one letter.'
              : ''
          }
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
