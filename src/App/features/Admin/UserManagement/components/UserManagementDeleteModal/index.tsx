import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IUserManagementDeleteModalProps } from '../../containers/UserManagementDeleteModalContainer';

export class UserManagementDeleteModal extends React.Component<
  IUserManagementDeleteModalProps | any
> {
  render() {
    const { handleClose, confirmDelete } = this.props;

    return (
      <Modal isOpen toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Confirm delete operation</ModalHeader>
        <ModalBody>Are you sure you want to delete this User?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose}>
            <FontAwesomeIcon icon="ban" />&nbsp; Cancel
          </Button>
          <Button color="danger" onClick={confirmDelete}>
            <FontAwesomeIcon icon="trash" />&nbsp; Delete
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
