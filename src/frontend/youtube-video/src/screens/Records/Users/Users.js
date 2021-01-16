import React, { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import * as Yup from 'yup';

import { Card } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';

import Main from '../../App/Main';

import AsyncActionsFormik from '../../../components/Formik/AsyncActionsFormik';
import DataManagerTable from '../../../components/DataManagerTable';
import FormikInput from '../../../components/Formik/FormikInput';
import FormikSelect from '../../../components/Formik/FormikSelect';

import { destroyUserById, persistUser } from '../../../api/users';

import formatDate from '../../../utils/formatDate';

const validationSchema = Yup.object().shape({
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
  id: Yup.number(),
  name: Yup.string().required(),
  password: Yup.string()
    .min(7)
    .when('id', {
      is: val => !!val,
      then: Yup.string(),
      otherwise: Yup.string().required(),
    }),
  role: Yup.object()
    .shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
    })
    .required(),
  username: Yup.string().required(),
});

const tableColumns = [
  {
    name: 'Nome',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Usuário',
    selector: 'username',
    sortable: true,
  },
  {
    name: 'Perfil',
    selector: 'role.name',
    sortable: true,
  },
  {
    cell: row => formatDate(row.last_password_update),
    name: 'Ultima alteração de senha',
    selector: 'last_password_update',
    sortable: true,
  },
];

const checkDuplicity = (users, values) => {
  const { id, username } = values;
  if (users.find(user => user.username === username && user.id !== id)) {
    throw Error('Este usuário já está cadastrado.');
  }
};

const Users = ({ data = {} }) => {
  const [users, setUsers] = useState(data.users);
  return (
    <Main>
      <Formik
        enableReinitialize
        initialValues={{
          confirm_password: '',
          id: undefined,
          name: '',
          password: '',
          role: null,
          username: '',
        }}
        validationSchema={validationSchema}
      >
        {({
          handleReset,
          setFieldValue,
          setFieldTouched,
          setValues,
          values,
          validateForm,
        }) => (
          <>
            <Card body>
              <h4 className="my-4">
                {values.id ? 'Edição de usuário' : 'Cadastro de usuário'}
              </h4>
              <FormikForm>
                <FormikInput
                  className="mb-2"
                  label="Nome*"
                  name="name"
                  onInputChange={setFieldValue}
                  value={values.name}
                />
                <FormikInput
                  className="mb-2"
                  label="Usuário*"
                  name="username"
                  onInputChange={(name, value) =>
                    setFieldValue(name, value ? value.toUpperCase() : value)
                  }
                  value={values.username}
                />
                <FormikInput
                  className="mb-2"
                  label={values.id ? 'Senha' : 'Senha*'}
                  name="password"
                  onInputChange={setFieldValue}
                  type="password"
                  value={values.password}
                />
                <FormikInput
                  className="mb-2"
                  label={
                    values.id ? 'Confirmação de senha' : 'Confirmação de senha*'
                  }
                  name="confirm_password"
                  onInputChange={setFieldValue}
                  type="password"
                  value={values.confirm_password}
                />
                <FormikSelect
                  className="mb-2"
                  closeMenuOnSelect
                  label="Perfil*"
                  name="role"
                  onSelectionChange={setFieldValue}
                  options={data.roles}
                  setFieldTouched={setFieldTouched}
                  value={values.role}
                />
                <AsyncActionsFormik
                  onCancel={handleReset}
                  onConfirm={async () => {
                    checkDuplicity(users, values);
                    const { password, role, ...user } = values;
                    return persistUser({
                      ...user,
                      password: password || undefined,
                      role_id: role.id,
                    });
                  }}
                  onConfirmSuccess={result => {
                    setUsers(result.users);
                    handleReset();
                  }}
                  setFieldTouched={setFieldTouched}
                  validateForm={validateForm}
                  values={values}
                />
              </FormikForm>
            </Card>
            <Card className="mt-4" body>
              <DataManagerTable
                title="Usuários"
                data={users}
                columns={tableColumns}
                onDestroy={async ({ id }) => destroyUserById(id)}
                onDestroySuccess={result => {
                  handleReset();
                  setUsers(result.users);
                }}
                onUpdate={({ id, name, role, username }) =>
                  setValues({
                    id,
                    name,
                    role,
                    username,
                  })
                }
              />
            </Card>
          </>
        )}
      </Formik>
    </Main>
  );
};

Users.propTypes = {
  data: shape({
    users: arrayOf(
      shape({
        id: number.isRequired,
        name: string.isRequired,
        role: shape({
          id: number.isRequired,
          name: string.isRequired,
        }).isRequired,
        username: string.isRequired,
      }).isRequired
    ).isRequired,
    roles: arrayOf(
      shape({
        description: string.isRequired,
        id: number.isRequired,
        name: string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Users;
