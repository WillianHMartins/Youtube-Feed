import React from 'react';
import { func } from 'prop-types';

import { Card, Col, Row } from 'reactstrap';
import { Formik, Form as FormikForm } from 'formik';

import AsyncSearchFormik from './AsyncSearchFormik';
import FormikInput from '../Formik/FormikInput';
import FormikDateRange from '../Formik/FormikDateRange';

import { getDaysInPeriod } from '../../utils/formatDate';
import Yup from '../../utils/yup';

const validationSchema = Yup.object().shape({
  period: Yup.object().shape({
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
  }),
  searchTerm: Yup.string().required(),
  commaSeparatedMinutes: Yup.string().required(),
});

const Filters = ({ onSearch, onSearchSuccess }) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          startDate: null,
          endDate: null,
          searchTerm: null,
          commaSeparatedMinutes: null,
        }}
        validationSchema={validationSchema}
      >
        {({
          handleReset,
          setFieldTouched,
          setFieldValue,
          validateForm,
          values,
        }) => {
          const handleSearch = async () => {
            const {
              commaSeparatedMinutes,
              startDate,
              endDate,
              searchTerm,
              ...rest
            } = values;
            const daysInPeriod = getDaysInPeriod({ startDate, endDate });
            const minutesPerDay = commaSeparatedMinutes.split(',');

            if (daysInPeriod.length !== minutesPerDay.length) {
              throw new Error(
                `Quantidade de minutos incompatível com o período selecionado
                - Dias no período: ${daysInPeriod.length}\n
                - Minutos informados: ${minutesPerDay.length}`
              );
            }

            return onSearch({
              searchTerm,
              timeAvailability: {
                startDate,
                endDate,
                minutesPerDay,
              },
              ...rest,
            });
          };

          return (
            <>
              <Card body>
                <FormikForm>
                  <Row>
                    <Col>
                      <FormikDateRange
                        endLabel="Final"
                        endName="endDate"
                        label="Período"
                        startLabel="Início"
                        startName="startDate"
                        setFieldTouched={setFieldTouched}
                        setFieldValue={setFieldValue}
                        values={values}
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        className="mb-2"
                        label="Termo de busca"
                        name="searchTerm"
                        onInputChange={(name, value) =>
                          setFieldValue(name, value)
                        }
                        value={values.searchTerm}
                      />
                    </Col>
                    <Col>
                      <FormikInput
                        className="mb-2"
                        // TODO: refactor this into a better input
                        label="Minutos por dia (separados por vírgula)"
                        name="commaSeparatedMinutes"
                        onInputChange={(name, value) =>
                          setFieldValue(name, value)
                        }
                        value={values.commaSeparatedMinutes}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <AsyncSearchFormik
                        confirmText="Buscar"
                        onCancel={handleReset}
                        onSearch={handleSearch}
                        onSearchSuccess={onSearchSuccess}
                        setFieldTouched={setFieldTouched}
                        validateForm={validateForm}
                        values={values}
                      />
                    </Col>
                  </Row>
                </FormikForm>
              </Card>
            </>
          );
        }}
      </Formik>
    </>
  );
};

Filters.defaultProps = {
  onSearch: () => {},
  onSearchSuccess: () => {},
};

Filters.propTypes = {
  onSearch: func,
  onSearchSuccess: func,
};

export default Filters;
