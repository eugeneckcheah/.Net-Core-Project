import React, {useState, useEffect} from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react';
import axios from 'axios';

const CreateCustomers = (props) => {

    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");

    useEffect(() => {
      console.log(Name);
    }, [Name])

    const {open, toggleCreateModal, fetchCustomers} = props;

    const CreateCustomers = () => {
      axios
      .post("./Customers/PostCustomers", {
        Name: Name,
        Address: Address,
      })
      .then(res => {
        console.log(res.data)
        toggleCreateModal(false)
        fetchCustomers();
      })
      .catch((err) => {
        console.log(err);
      });
    };
  
    return (
      <Modal open={open}>
        <Header>Create Customers</Header>

        <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
          </Form.Field>
         </Form>

        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => toggleCreateModal(false)}>Cancel</Button>
          <Button color="blue" onClick={CreateCustomers}>Confirm</Button>
        </Modal.Actions>
        </Modal>
    )
  }
  
  export default CreateCustomers