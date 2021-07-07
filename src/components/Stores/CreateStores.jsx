import React, {useState, useEffect} from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react';
import axios from 'axios';

const CreateStores = (props) => {

    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");

    useEffect(() => {
      console.log(Name);
    }, [Name])

    const {open, toggleCreateModal, fetchStores} = props;

    const CreateStores = () => {
      axios
      .post("./Stores/PostStore", {
        Name: Name,
        Address: Address,
      })
      .then(res => {
        console.log(res.data)
        toggleCreateModal(false)
        fetchStores();
      })
      .catch((err) => {
        console.log(err);
      });
    };
  
    return (
      <Modal open={open}>
        <Header>Create new store</Header>

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
          <Button color="blue" onClick={CreateStores}>Confirm</Button>
        </Modal.Actions>
        </Modal>
    )
  }
  
  export default CreateStores