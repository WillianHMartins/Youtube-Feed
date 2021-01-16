import React from 'react';
import { any, func, object, shape, string } from 'prop-types';

import { Field } from 'formik';

import { Input as ReactstrapInput, FormFeedback } from 'reactstrap';

const setValue = (type, value) => {
  switch (type) {
    case 'number':
      return Number(value) || '';
    case 'checkbox':
      return value || false;
    default:
      return value || '';
  }
};

export const Input = ({
  field,
  label,
  form: { touched, errors },
  onInputChange,
  type,
  value,
  ...props
}) => (
  <>
    {label && <h6>{label}</h6>}
    <ReactstrapInput
      {...field}
      {...props}
      invalid={!!(touched[field.name] && errors[field.name])}
      onChange={event => {
        if (event && event.target) {
          if (!type === 'checkbox') {
            event.preventDefault();
          }
          onInputChange(
            field.name,
            type === 'checkbox'
              ? setValue(type, event.target.checked)
              : setValue(type, event.target.value)
          );
        }
      }}
      type={type}
      checked={type === 'checkbox' ? setValue(type, value) : undefined}
      value={setValue(type, value)}
    />
    {touched[field.name] && errors[field.name] && (
      <FormFeedback className="mb-2">{errors[field.name]}</FormFeedback>
    )}
  </>
);

const FormikInput = ({ name, ...props }) => (
  <Field component={Input} name={name} {...props} />
);

Input.defaultProps = {
  label: undefined,
  type: 'text',
  onInputChange: () => {},
  value: undefined,
};

Input.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    touched: object.isRequired,
    errors: object.isRequired,
  }).isRequired,
  onInputChange: func,

  label: string,
  type: string,
  value: any,
};

FormikInput.propTypes = {
  name: string.isRequired,
};

export default FormikInput;
