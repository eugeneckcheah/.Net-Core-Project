import React, {useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';


const ProductsTable = (props) => {

    const { Products, fetchProducts } = props;
    const [ Product, setProducts ] = useState({
        Name: "",
        Price: ""
    });

    fetchProducts();

    const handleProductChange = () => {
        setProducts({
            ...Product,
            Name: "",
            Price: "",
        })
    }

    const DeleteProducts = (id) => {
        axios.delete(`/Customers/DeleteProducts/${id}`)
        .then(data => {
            console.log(data);
            fetchProducts();
        })
        .catch(err => {
            console.log(err);
        });
    };

  return(
  <Table celled>
     <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price $</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
    </Table.Header>

    <Table.Body>
        {Products.map((Product) => {
            return (
            <Table.Row>
                <Table.Cell>{Product.name}</Table.Cell>
                <Table.Cell>{Product.price}</Table.Cell>
                <Table.Cell>
                    <Button color='yellow' onClick={() => handleProductChange(Products.Id)}>Edit</Button>
                </Table.Cell>
                <Table.Cell>
                    <Button color='red' onClick={() => DeleteProducts(Products.Id)}>Delete</Button> 
                </Table.Cell>
            </Table.Row>
        )})}
    </Table.Body>
  </Table>
  )}

export default ProductsTable;