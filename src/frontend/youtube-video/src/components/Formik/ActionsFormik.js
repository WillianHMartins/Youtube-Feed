import React, { useState } from 'react';
import { func, object, string } from 'prop-types';

import { Button } from 'reactstrap';

import MessageModal from '../Modal/MessageModal';

const ActionsFormik = ({
  cancelText,
  confirmText,
  onCancel,
  onConfirmError,
  onConfirm,
  setFieldTouched,
  validateForm,
  values,
}) => {
  const [error, setError] = useState(undefined);

  const handleConfirm = () => {
    try {
      onConfirm(values);
    } catch (e) {
      setError({
        ...e,
        message: e.message || e.data,
      });
    }
  };

  return (
    <>
      <MessageModal
        body={error ? error.message : ''}
        header="Erro"
        onClose={() => {
          onConfirmError(error);
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
                handleConfirm();
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

ActionsFormik.defaultProps = {
  cancelText: 'Cancelar',
  confirmText: 'Confirmar',
  onCancel: () => {},
  onConfirmError: () => {},
  onConfirm: () => {},
  setFieldTouched: () => {},
  validateForm: () => ({}),
  values: {},
};

ActionsFormik.propTypes = {
  cancelText: string,
  confirmText: string,
  onCancel: func,
  onConfirmError: func,
  onConfirm: func,
  setFieldTouched: func,
  validateForm: func,
  values: object,
};

export default ActionsFormik;
