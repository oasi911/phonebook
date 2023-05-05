import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts/Contacts';
import { HomePage } from 'pages/Home/Home';
import { LoginPage } from 'pages/Login/Login';
import { NotFoundPage } from 'pages/NotFound/NotFound';
import { RegisterPage } from 'pages/Register/Register';
import { Layout } from './Layout/Layout';
import { refreshThunk } from '../redux/auth/authOperations';
import { PublicRoute } from 'HOC/PublicRoute';
import { PrivateRoute } from 'HOC/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <div style={{ paddingLeft: '40px' }}>
                <ContactsPage />
              </div>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
