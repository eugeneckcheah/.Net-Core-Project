import React, {useState, useEffect} from 'react';
import { Button, Header, Form, Modal } from 'semantic-ui-react';
import axios from 'axios';
//import moment from 'moment';

const CreateSales = (props) => {

  //moment().format("MMM Do YYYY");

    const [ProductId, setProductId] = useState("");
    const [CustomerId, setCustomerId] = useState("");
    const [StoreId, setStoreId] = useState("");
    const [DateSold, setDateSold] = useState("");


    useEffect(() => {
      console.log(ProductId);
    }, [ProductId])

    const {open, toggleCreateModal, fetchSales} = props;

    const CreateSales = () => {
      axios
      .post("./Sales/PostSale", {
        ProductId: ProductId,
        CustomerId: CustomerId,
        StoreId: StoreId,
        DateSold: DateSold,
      })
      .then(res => {
        console.log(res.data)
        toggleCreateModal(false)
        fetchSales();
      })
      .catch((err) => {
        console.log(err);
      });
    };
  
    return (
      <Modal open={open}>
        <Header>Create Sales</Header>

        <Modal.Content>
        <Form>
          <Form.Field>
            <label>Product ID</label>
            <input placeholder='Product Id' onChange={(e) => setProductId(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Customer ID</label>
            <input placeholder='Customer Id' onChange={(e) => setCustomerId(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Store ID</label>
            <input placeholder='Store Id' onChange={(e) => setStoreId(e.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input placeholder='YYYY-MM-DD' onChange={(e) => setDateSold(e.target.value)}/>
          </Form.Field>
         </Form>

        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => toggleCreateModal(false)}>Cancel</Button>
          <Button color="blue" onClick={CreateSales}>Confirm</Button>
        </Modal.Actions>
        </Modal>
    )
  }
  
  export default CreateSales;