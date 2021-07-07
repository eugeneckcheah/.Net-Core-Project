import React, {useState, useEffect} from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react';
import axios from 'axios';

const CreateProducts = (props) => {

    const [Name, setName] = useState("");
    const [Price, setPrice] = useState("");

    useEffect(() => {
      console.log(Name);
    }, [Name])

    const {open, toggleCreateModal, fetchProducts} = props;

    fetchProducts();

    const CreateProducts = () => {
      axios
      .post("./Products/PostProduct", {
        Name: Name,
        Price: Price,
      })
      .then(res => {
        console.log(res.data)
        toggleCreateModal(false)
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
    };
  
    return (
      <Modal open={open}>
        <Header>Create New Products</Header>

        <Modal.Content>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
          </Form.Field>
         </Form>

        </Modal.Content>
        <Modal.Actions>
          <Button color ="black" onClick={() => toggleCreateModal(false)}>Cancel</Button>
          <Button color="blue" onClick={CreateProducts}>Confirm</Button>
        </Modal.Actions>
        </Modal>
    )
  }
  
  export default CreateProducts