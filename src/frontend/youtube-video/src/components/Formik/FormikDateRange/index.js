import React from 'react';
import { func, object, string } from 'prop-types';

import { Col, Row } from 'reactstrap';

import FormikDatePicker from '../FormikDatePicker';

const FormikDateRange = ({
  endLabel,
  endName,
  startLabel,
  startName,
  setFieldTouched,
  setFieldValue,
  values,
}) => {
  return (
    <Row>
      <Col>
        <FormikDatePicker
          endDate={values[endName]}
          label={startLabel}
          name={startName}
          onChange={setFieldValue}
          selectsStart
          setFieldTouched={setFieldTouched}
          startDate={values[startName]}
          value={values[startName]}
        />
      </Col>
      <Col>
        <FormikDatePicker
          endDate={values[endName]}
          label={endLabel}
          minDate={values[startName]}
          name={endName}
          onChange={setFieldValue}
          selectsEnd
          setFieldTouched={setFieldTouched}
          startDate={values[startName]}
          value={values[endName]}
        />
      </Col>
    </Row>
  );
};

FormikDateRange.defaultProps = {
  endLabel: undefined,
  endName: undefined,
  setFieldTouched: () => {},
  setFieldValue: () => {},
  startLabel: undefined,
  startName: undefined,
  values: null,
};

FormikDateRange.propTypes = {
  endLabel: string,
  endName: string,
  startLabel: string,
  startName: string,
  setFieldTouched: func,
  setFieldValue: func,
  values: object,
};

export default FormikDateRange;
