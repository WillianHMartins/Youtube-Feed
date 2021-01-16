import React from 'react';
import { any, arrayOf, func, object, shape, string } from 'prop-types';

import { isArray } from 'lodash';

import { Field } from 'formik';

import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

import classnames from 'classnames';

import styles from './formikSelect.module.scss';

const animatedComponents = makeAnimated();

const Select = ({
  className,
  field,
  form: { errors, touched },
  label,
  labelKey,
  onSelectionChange,
  setFieldTouched,
  options,
  value,
  ...props
}) => {
  const mappedDataOptions = options.map(item => ({
    value: item.value ? item.value : item.id,
    label: item.label ? item.label : item[labelKey],
    ...item,
  }));

  let selectedValue = null;
  if (value && isArray(value)) {
    selectedValue = value.map(item => ({
      value: item.id,
      label: item.name,
      ...item,
    }));
  } else if (value) {
    selectedValue = {
      value: value.id,
      label: value.name,
      ...value,
    };
  }

  return (
    <>
      {label && <h6>{label}</h6>}
      <ReactSelect
        {...field}
        {...props}
        className={classnames(
          touched[field.name] && errors[field.name]
            ? styles.invalid
            : undefined,
          className
        )}
        components={animatedComponents}
        onBlur={() => setFieldTouched(field.name, true)}
        onChange={data => onSelectionChange(field.name, data)}
        options={mappedDataOptions}
        value={selectedValue}
      />
      {touched[field.name] && errors[field.name] && (
        <small className="form-text mb-2 text-danger">
          {errors[field.name]}
        </small>
      )}
    </>
  );
};

const FormikSelect = ({ name, ...props }) => (
  <Field component={Select} name={name} {...props} />
);

Select.defaultProps = {
  className: undefined,
  label: undefined,
  labelKey: 'name',
  onSelectionChange: () => {},
  options: [],
  setFieldTouched: () => {},
  value: null,
};

Select.propTypes = {
  field: shape({
    name: string.isRequired,
  }).isRequired,
  form: shape({
    errors: object.isRequired,
    touched: object.isRequired,
  }).isRequired,

  className: string,
  label: string,
  labelKey: string,
  onSelectionChange: func,
  options: arrayOf(
    shape({
      id: any,
      label: string,
      name: string,
      value: any,
    })
  ),
  setFieldTouched: func,
  value: any,
};

FormikSelect.propTypes = {
  name: string.isRequired,
};

export default FormikSelect;
