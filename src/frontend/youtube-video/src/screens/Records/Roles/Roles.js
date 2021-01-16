import React, { useState } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import { Card } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';

import Main from '../../App/Main';

import AsyncActionsFormik from '../../../components/Formik/AsyncActionsFormik';
import DataManagerTable from '../../../components/DataManagerTable';
import FormikInput from '../../../components/Formik/FormikInput';

import Yup from '../../../utils/yup';
import { disableRoleById, persistRole } from '../../../api/roles';

const validationSchema = Yup.object().shape({
  description: Yup.string(),
  id: Yup.number(),
  name: Yup.string().required(),
});

const tableColumns = [
  {
    name: 'Nome',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Descrição',
    selector: 'description',
    sortable: true,
  },
];

const checkDuplicity = (roles, values) => {
  if (roles.find(item => item.name === values.name && item.id !== values.id)) {
    throw Error('Este perfil de usuário já está cadastrado.');
  }
};

const Roles = ({ data = {} }) => {
  const [roles, setRoles] = useState(data.roles);

  return (
    <Main>
      <Formik
        enableReinitialize
        initialValues={{
          description: '',
          id: undefined,
          name: '',
        }}
        validationSchema={validationSchema}
      >
        {({
          handleReset,
          setFieldValue,
          setFieldTouched,
          setValues,
          validateForm,
          values,
        }) => {
          return (
            <>
              <Card body>
                <h4 className="my-4">
                  {values.id
                    ? 'Edição de perfil de usuários'
                    : 'Cadastro de perfil de usuários'}
                </h4>
                <FormikForm>
                  <FormikInput
                    className="mb-2"
                    label="Nome"
                    name="name"
                    onInputChange={(name, value) =>
                      setFieldValue(name, value ? value.toUpperCase() : value)
                    }
                    value={values.name}
                  />
                  <FormikInput
                    className="mb-2"
                    label="Descrição"
                    name="description"
                    onInputChange={setFieldValue}
                    type="textarea"
                    value={values.description}
                  />
                  <AsyncActionsFormik
                    onCancel={handleReset}
                    onConfirm={async () => {
                      checkDuplicity(roles, values);
                      return persistRole(values);
                    }}
                    onConfirmSuccess={result => {
                      setRoles(result.roles);
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
                  title="Perfis de usuários"
                  data={roles}
                  columns={tableColumns}
                  onDestroy={async ({ id }) => disableRoleById(id)}
                  onDestroySuccess={result => {
                    handleReset();
                    setRoles(result.roles);
                  }}
                  onUpdate={({ id, name, description }) =>
                    setValues({ id, name, description })
                  }
                />
              </Card>
            </>
          );
        }}
      </Formik>
    </Main>
  );
};

Roles.defaultProps = {
  data: {
    roles: [],
  },
};

Roles.propTypes = {
  data: shape({
    roles: arrayOf(
      shape({
        description: string,
        id: number.isRequired,
        name: string.isRequired,
      }).isRequired
    ),
  }),
};

export default Roles;
