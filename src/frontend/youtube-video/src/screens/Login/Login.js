import React, { useState } from 'react';

import { Card, Container } from 'reactstrap';

import Logo from '../../components/Logo';

import LoginForm from './LoginForm';
import PasswordChangeForm from './PasswordChangeForm';

import styles from './login.module.scss';

const Login = () => {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);

  return (
    <Container fluid className=" d-flex vh-100 bg-secondary">
      <Card body className={styles.card}>
        <Logo />
        <p className="text-center">Acesso</p>
        {error && (
          <small className="form-text mb-2 text-danger">
            {error.message || error.data}
          </small>
        )}
        {user ? (
          <PasswordChangeForm
            user={user}
            setUser={setUser}
            setError={setError}
          />
        ) : (
          <LoginForm setUser={setUser} setError={setError} />
        )}
      </Card>
    </Container>
  );
};

export default Login;
