import React from 'react';
import { number, shape, string, func } from 'prop-types';

import { Button, Col, Row } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';

import useRouter from 'found/lib/useRouter';

import FormikInput from '../../components/Formik/FormikInput';

import { updatePassword } from '../../api/users';
import { setToken } from '../../utils/authentication';

import Yup from '../../utils/yup';

const validationSchema = Yup.object().shape({
  id: Yup.number(),

  current_password: Yup.string().required(),

  confirm_password: Yup.string().when('password', {
    is: val => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'A senha precisa ser a mesma')
      .required(),
    otherwise: Yup.string().oneOf(
      [Yup.ref('password')],
      'A senha precisa ser a mesma'
    ),
  }),
  password: Yup.string().required(),
});

const PasswordChangeForm = ({ setError, setUser, user }) => {
  const { router } = useRouter();
  return (
    <Formik
      enableReinitialize
      initialValues={user}
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
              const { token } = await updatePassword(values);
              setToken(token);
              router.push('/');
            } catch (e) {
              setError(e);
            }
          }
        };

        return (
          <>
            <p className="mt-2 mb-4">{`Bem-vindo ${user.username}`}</p>
            <FormikForm>
              <FormikInput
                className="mb-2"
                label="Senha atual"
                name="current_password"
                onInputChange={setFieldValue}
                type="password"
                value={values.current_password}
                onKeyUp={event => {
                  // 13 === [Enter]
                  if (event.keyCode === 13) {
                    event.preventDefault();
                    handleLogin();
                  }
                }}
              />
              <FormikInput
                className="mb-2"
                label="Senha"
                name="password"
                onInputChange={setFieldValue}
                type="password"
                value={values.password}
                onKeyUp={event => {
                  // 13 === [Enter]
                  if (event.keyCode === 13) {
                    event.preventDefault();
                    handleLogin();
                  }
                }}
              />
              <FormikInput
                className="mb-2"
                label="Confirmação de senha"
                name="confirm_password"
                onInputChange={setFieldValue}
                type="password"
                value={values.confirm_password}
                onKeyUp={event => {
                  // 13 === [Enter]
                  if (event.keyCode === 13) {
                    event.preventDefault();
                    handleLogin();
                  }
                }}
              />
              <Row>
                <Col className="text-right">
                  <Button
                    className="mr-2 "
                    color="secondary"
                    onClick={() => {
                      setError(undefined);
                      setUser(undefined);
                    }}
                    outline
                  >
                    Cancelar
                  </Button>
                  <Button color="primary" onClick={handleLogin}>
                    Entrar
                  </Button>
                </Col>
              </Row>
            </FormikForm>
          </>
        );
      }}
    </Formik>
  );
};

PasswordChangeForm.propTypes = {
  user: shape({
    id: number.isRequired,
    username: string.isRequired,
  }).isRequired,
  setError: func.isRequired,
  setUser: func.isRequired,
};

export default PasswordChangeForm;
