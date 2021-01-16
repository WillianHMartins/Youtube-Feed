import React from 'react';
import { instanceOf, func, object, shape, string } from 'prop-types';

import ReactDatePicker from 'react-datepicker';

import { Field } from 'formik';

import ptBR from 'date-fns/locale/pt-BR';

import classnames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
// Required  Css import https://github.com/Hacker0x01/react-datepicker

const DatePicker = ({
  field,
  form: { errors, touched },
  label,
  onChange,
  setFieldTouched,
  value,
  ...props
}) => {
  return (
    <>
      {label && <h6>{label}</h6>}
      <div
        className={classnames('reactDatePicker', {
          reactDatePickerInvalid: touched[field.name] && errors[field.name],
        })}
      >
        <ReactDatePicker
          {...field}
          {...props}
          autoComplete="off"
          className="form-control"
          dateFormat="dd/MM/yyyy"
          fixedHeight
          isClearable
          locale={ptBR}
          onChange={date => {
            onChange(field.name, date);
          }}
          placeholderText="--/--/----"
          popperPlacement="bottom-end"
          selected={value ? new Date(value) : null}
        />
        {touched[field.name] && errors[field.name] && (
          <small className="form-text mb-2 text-danger">
            {errors[field.name]}
          </small>
        )}
      </div>
    </>
  );
};

const FormikDatePicker = ({ name, ...props }) => (
  <Field component={DatePicker} name={name} {...props} />
);

DatePicker.defaultProps = {
  label: undefined,
  onChange: () => {},
  setFieldTouched: () => {},
  value: null,
};

DatePicker.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    errors: object.isRequired,
    touched: object.isRequired,
  }).isRequired,

  label: string,
  onChange: func,
  setFieldTouched: func,
  value: instanceOf(Date),
};

FormikDatePicker.propTypes = {
  name: string.isRequired,
};

export default FormikDatePicker;
