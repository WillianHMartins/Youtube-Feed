import React, { useState } from 'react';
import { func, object, string } from 'prop-types';

import { Button } from 'reactstrap';

import ConfirmModal from '../Modal/ConfirmationModal';
import MessageModal from '../Modal/MessageModal';

const formatMessage = (message = '') => {
  switch (message) {
    case 'created':
      return 'Registro criado.';
    case 'updated':
      return 'Registro editado.';
    case 'disabled':
      return 'Registro desativado.';
    case 'deleted':
      return 'Registro removido.';
    default:
      return message;
  }
};

const AsyncActionsFormik = ({
  cancel,
  confirm,
  onCancel,
  onConfirmError,
  onConfirmSuccess,
  onConfirm,
  setFieldTouched,
  validateForm,
  values,
}) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [result, setResult] = useState(undefined);

  const handleConfirmRequest = async () => {
    try {
      const { message, ...rest } = await onConfirm();
      setResult({
        message: formatMessage(message),
        ok: true,
      });
      onConfirmSuccess(rest);
    } catch (error) {
      setResult({
        ...error,
        message: error.message || error.data,
        ok: false,
      });
    }
    setConfirmModal(false);
  };

  return (
    <>
      <ConfirmModal
        body={
          values.id
            ? 'Tem certeza que deseja alterar esse registro?'
            : 'Tem certeza que deseja criar esse registro?'
        }
        onCancel={() => {
          setConfirmModal(false);
          setResult(undefined);
        }}
        header="Confirmação"
        onConfirm={handleConfirmRequest}
        open={confirmModal}
      />
      <MessageModal
        body={result ? result.message : ''}
        header={
          result && !result.ok
            ? 'Erro ao salvar o registro'
            : 'Operação realizada com sucesso'
        }
        onClose={() => {
          onConfirmError(result);
          setResult(undefined);
        }}
        open={!!result}
      />

      <div className="py-2 d-flex justify-content-end">
        {
          <Button
            className="mr-2 "
            color="secondary"
            onClick={onCancel}
            outline
          >
            {cancel}
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
                setConfirmModal(true);
              }
            }}
          >
            {confirm}
          </Button>
        }
      </div>
    </>
  );
};

AsyncActionsFormik.defaultProps = {
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  onCancel: () => {},
  onConfirmError: () => {},
  onConfirmSuccess: () => {},
  onConfirm: () => {},
  setFieldTouched: () => {},
  validateForm: () => ({}),
  values: {},
};

AsyncActionsFormik.propTypes = {
  cancel: string,
  confirm: string,
  onCancel: func,
  onConfirmError: func,
  onConfirmSuccess: func,
  onConfirm: func,
  setFieldTouched: func,
  validateForm: func,
  values: object,
};

export default AsyncActionsFormik;
