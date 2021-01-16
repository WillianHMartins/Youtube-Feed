import React, { useEffect, useState } from 'react';
import { bool, string } from 'prop-types';
import { Modal as ReactstrapModal, ModalBody, ModalHeader } from 'reactstrap';

const SimpleModal = ({ open, body, header }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <ReactstrapModal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
    </ReactstrapModal>
  );
};

SimpleModal.defaultProps = {
  open: false,
  body: '',
  header: '',
};

SimpleModal.propTypes = {
  open: bool,
  body: string,
  header: string,
};

export default SimpleModal;
