import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import DeleteCustomers from './CustomersTable';

function DeleteCustomersModal(props) {
  const {open, toggleModal} = props;


  return (
    <Modal open={open}>  
      <Modal.Header>Warning</Modal.Header>
      <Modal.Content>
        <h1>Are you sure?</h1>
      </Modal.Content>
      <Modal.Actions>
        <Button color='grey' onClick={() => toggleModal(false)}>
          Cancel
        </Button>
        <Button color='red' onClick={DeleteCustomers}>
          Delete
        </Button>  
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteCustomersModal;