import React, { useEffect, useState } from 'react';
import { bool, func, string } from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const MessageModal = ({ close, onClose, open, body, header }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => {
        if (isOpen) {
          onClose();
        }
        setIsOpen(!isOpen);
      }}
    >
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button
          outline
          color="secondary"
          onClick={() => {
            onClose();
            setIsOpen(false);
          }}
        >
          {close}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

MessageModal.defaultProps = {
  close: 'Fechar',
  onClose: () => {},
  open: false,
  body: '',
  header: '',
};

MessageModal.propTypes = {
  close: string,
  onClose: func,
  open: bool,
  body: string,
  header: string,
};

export default MessageModal;
