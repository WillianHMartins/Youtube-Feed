import React from 'react';
import { instanceOf, func, object, shape, string } from 'prop-types';

import DatePicker from 'react-datepicker';

import { Input as ReactstrapInput } from 'reactstrap';

import { Field } from 'formik';

import { format } from 'date-fns';

import classnames from 'classnames';

import ptBR from 'date-fns/locale/pt-BR';

// Required  Css import https://github.com/Hacker0x01/react-datepicker
import 'react-datepicker/dist/react-datepicker.css';

const splitDateAndTime = value => {
  if (value) {
    return [new Date(value), format(value, 'HH:mm')];
  }
  const date = new Date();
  return [date, format(date, 'HH:mm')];
};

const DateTime = ({
  field,
  form: { errors, touched },
  id,
  label,
  onChange,
  value,
  ...props
}) => {
  const [currentDate, currentTime] = splitDateAndTime(value);

  const updateDateTime = (newDate, newTime) => {
    const [hours = '00', minutes = '00'] = newTime.split(':');
    const date = new Date(newDate);
    date.setHours(hours, minutes);
    onChange(field.name, date);
  };

  return (
    <>
      {label && <h6>{label}</h6>}
      <div
        className={classnames('d-flex flex-row', {
          reactDatePickerInvalid: touched[field.name] && errors[field.name],
        })}
      >
        <DatePicker
          {...field}
          {...props}
          autoComplete="off"
          className="form-control"
          dateFormat="dd/MM/yyyy"
          fixedHeight
          id={id}
          locale={ptBR}
          onChange={date => {
            updateDateTime(date || new Date(), currentTime);
          }}
          placeholderText="--/--/----"
          selected={currentDate || null}
        />
        <ReactstrapInput
          className="ml-2"
          invalid={!!(touched[field.name] && errors[field.name])}
          onChange={event => {
            if (event && event.target) {
              event.preventDefault();
              updateDateTime(currentDate, event.target.value || '');
            }
          }}
          type="time"
          value={currentTime}
        />
      </div>
      {touched[field.name] && errors[field.name] && (
        <small className="form-text mb-2 text-danger">
          {errors[field.name]}
        </small>
      )}
    </>
  );
};

const FormikDateTime = ({ name, ...props }) => (
  <Field component={DateTime} name={name} {...props} />
);

DateTime.defaultProps = {
  id: 'FormikDateTime',
  label: undefined,
  onChange: () => {},
  value: null,
};

DateTime.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    errors: object.isRequired,
    touched: object.isRequired,
  }).isRequired,

  id: string,
  label: string,
  onChange: func,
  value: instanceOf(Date),
};

FormikDateTime.propTypes = {
  name: string.isRequired,
};

export default FormikDateTime;
