import React, { useState } from 'react';
import { func, object, string } from 'prop-types';

import { Button } from 'reactstrap';

import MessageModal from '../Modal/MessageModal';

const AsyncSearchFormik = ({
  cancelText,
  confirmText,
  onCancel,
  onSearchError,
  onSearchSuccess,
  onSearch,
  setFieldTouched,
  validateForm,
  values,
}) => {
  const [error, setError] = useState(undefined);

  const handleSearchRequest = async () => {
    try {
      const response = await onSearch();
      onSearchSuccess(response);
    } catch (e) {
      setError({
        ...e,
        message: e.message || e.data,
        ok: false,
      });
    }
  };

  return (
    <>
      <MessageModal
        body={error ? error.message : ''}
        header="Erro ao buscar os registros"
        onClose={() => {
          onSearchError(error);
          setError(undefined);
        }}
        open={!!error}
      />

      <div className="py-2 d-flex justify-content-end">
        {
          <Button
            className="mr-2 "
            color="secondary"
            onClick={onCancel}
            outline
          >
            {cancelText}
          </Button>
        }
        {
          <Button
            color="primary"
            onClick={async () => {
              // run form validations
              const errors = await validateForm(values);
              const keys = Object.keys(errors);
              if (keys.length) {
                keys.forEach(key => {
                  setFieldTouched(key, true);
                });
              } else {
                // if no errors are found, render the confirmation mode
                handleSearchRequest();
              }
            }}
          >
            {confirmText}
          </Button>
        }
      </div>
    </>
  );
};

AsyncSearchFormik.defaultProps = {
  cancelText: 'Cancelar',
  confirmText: 'Buscar',
  onCancel: () => {},
  onSearchError: () => {},
  onSearchSuccess: () => {},
  onSearch: () => {},
  setFieldTouched: () => {},
  validateForm: () => ({}),
  values: {},
};

AsyncSearchFormik.propTypes = {
  cancelText: string,
  confirmText: string,
  onCancel: func,
  onSearchError: func,
  onSearchSuccess: func,
  onSearch: func,
  setFieldTouched: func,
  validateForm: func,
  values: object,
};

export default AsyncSearchFormik;
