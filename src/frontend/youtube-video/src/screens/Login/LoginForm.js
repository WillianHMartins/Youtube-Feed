import React from 'react';
import { func } from 'prop-types';

import { Button, Col, Row } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';

import useRouter from 'found/lib/useRouter';

import FormikInput from '../../components/Formik/FormikInput';

import { login } from '../../api/login';
import { setToken } from '../../utils/authentication';

import Yup from '../../utils/yup';

const validationSchema = Yup.object().shape({
  password: Yup.string().required(),
  username: Yup.string().required(),
});

const initialValues = {
  password: '',
  username: '',
};

const LoginForm = ({ setUser, setError }) => {
  const { router } = useRouter();
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ setFieldTouched, setFieldValue, validateForm, values }) => {
        const handleLogin = async () => {
          const errors = await validateForm(values);
          const keys = Object.keys(errors);
          if (keys.length) {
            keys.forEach(key => {
              setFieldTouched(key, true);
            });
          } else {
            try {
              const { token } = await login(values);
              setToken(token);
              router.push('/');
            } catch (e) {
              setUser(e.user);
              setError(e);
            }
          }
        };

        return (
          <FormikForm>
            <FormikInput
              className="mb-2"
              label="Usuário"
              name="username"
              autoComplete="off"
              onInputChange={(name, value) =>
                setFieldValue(name, value ? value.toUpperCase() : value)
              }
              onKeyUp={event => {
                // 13 === [Enter]
                if (event.keyCode === 13) {
                  event.preventDefault();
                  handleLogin();
                }
              }}
              value={values.username}
            />
            <FormikInput
              className="mb-2"
              label="Senha"
              name="password"
              onInputChange={setFieldValue}
              onKeyUp={event => {
                // 13 === [Enter]
                if (event.keyCode === 13) {
                  event.preventDefault();
                  handleLogin();
                }
              }}
              type="password"
              value={values.password}
            />
            <Row>
              <Col className="text-right">
                <Button color="primary" onClick={handleLogin}>
                  Entrar
                </Button>
              </Col>
            </Row>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  setError: func.isRequired,
  setUser: func.isRequired,
};

export default LoginForm;
