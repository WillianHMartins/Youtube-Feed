import React from 'react';
import { number, shape, string } from 'prop-types';

import { Card } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';

import Main from '../../App/Main';

import AsyncActionsFormik from '../../../components/Formik/AsyncActionsFormik';
import FormikInput from '../../../components/Formik/FormikInput';

import { updatePassword } from '../../../api/users';
import { setToken } from '../../../utils/authentication';

import Yup from '../../../utils/yup';

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

const User = ({ data: { user } }) => {
  return (
    <Main>
      <Formik
        enableReinitialize
        initialValues={user}
        validationSchema={validationSchema}
      >
        {({
          handleReset,
          setFieldValue,
          setFieldTouched,
          values,
          validateForm,
        }) => (
          <Card body>
            <h2 className="my-4">{`Mudança de senha para ${values.username}`}</h2>
            <FormikForm>
              <FormikInput
                className="mb-2"
                label="Senha atual"
                name="current_password"
                onInputChange={setFieldValue}
                type="password"
                value={values.current_password}
              />
              <FormikInput
                className="mb-2"
                label="Senha"
                name="password"
                onInputChange={setFieldValue}
                type="password"
                value={values.password}
              />
              <FormikInput
                className="mb-2"
                label="Confirmação de senha"
                name="confirm_password"
                onInputChange={setFieldValue}
                type="password"
                value={values.confirm_password}
              />
              <AsyncActionsFormik
                onCancel={handleReset}
                onConfirm={async () => {
                  const { password, current_password, id } = values;
                  const { token } = await updatePassword({
                    id,
                    current_password,
                    password,
                  });
                  setToken(token);
                  window.location.reload();
                }}
                setFieldTouched={setFieldTouched}
                validateForm={validateForm}
                values={values}
              />
            </FormikForm>
          </Card>
        )}
      </Formik>
    </Main>
  );
};

User.propTypes = {
  data: shape({
    user: shape({
      id: number.isRequired,
      username: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
