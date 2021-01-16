import React, { useEffect, useState } from 'react';
import { bool, func, string } from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ConfirmationModal = ({
  cancel,
  confirm,
  onCancel,
  onConfirm,
  open,
  body,
  header,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        if (isOpen) {
          onCancel();
        }
        setIsOpen(!isOpen);
      }}
    >
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>
        <span>{body}</span>
      </ModalBody>
      <ModalFooter>
        <Button
          outline
          color="secondary"
          onClick={() => {
            onCancel();
            setIsOpen(false);
          }}
        >
          {cancel}
        </Button>
        <Button
          color="primary"
          onClick={() => {
            onConfirm();
            setIsOpen(false);
          }}
        >
          {confirm}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ConfirmationModal.defaultProps = {
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  onCancel: () => {},
  onConfirm: () => {},
  open: false,
  body: '',
  header: '',
};

ConfirmationModal.propTypes = {
  cancel: string,
  confirm: string,
  onCancel: func,
  onConfirm: func,
  open: bool,
  body: string,
  header: string,
};

export default ConfirmationModal;
