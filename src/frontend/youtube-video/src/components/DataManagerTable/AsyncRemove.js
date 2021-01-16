import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';

import ConfirmModal from '../Modal/ConfirmationModal';
import MessageModal from '../Modal/MessageModal';

const formatMessage = (message = '') => {
  switch (message) {
    case 'disabled':
      return 'Registro desativado.';
    case 'deleted':
      return 'Registro removido.';
    default:
      return message;
  }
};

const AsyncRemove = ({
  onDestroy,
  onDestroyCancel,
  onDestroyError,
  onDestroySuccess,
  open,
}) => {
  const [confirmModal, setConfirmModal] = useState(open);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    if (!open) {
      setResult(undefined);
    }
    setConfirmModal(open);
  }, [open]);

  const onConfirmRequest = async () => {
    try {
      const { message, ...rest } = await onDestroy();
      setResult({
        ...rest,
        message: formatMessage(message),
        ok: true,
      });
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
        body="Tem certeza que deseja remover esse registro?"
        header="Confirmação"
        onCancel={onDestroyCancel}
        onConfirm={onConfirmRequest}
        open={confirmModal}
      />
      <MessageModal
        body={result ? result.message : ''}
        header={
          result && !result.ok
            ? 'Erro ao remover o registro'
            : 'Operação realizada com sucesso'
        }
        onClose={() => {
          if (result && !result.ok) {
            onDestroyError(result);
          } else {
            onDestroySuccess(result);
          }
          setResult(undefined);
        }}
        open={!!result}
      />
    </>
  );
};

AsyncRemove.defaultProps = {
  onDestroy: () => {},
  onDestroyCancel: () => {},
  onDestroyError: () => {},
  onDestroySuccess: () => {},
  open: false,
};

AsyncRemove.propTypes = {
  onDestroy: func,
  onDestroyCancel: func,
  onDestroyError: func,
  onDestroySuccess: func,
  open: bool,
};

export default AsyncRemove;
