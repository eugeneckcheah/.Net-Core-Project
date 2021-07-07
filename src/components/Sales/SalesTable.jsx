import React, {useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';


const SalesTable = (props) => {

    const { Sales, fetchSales } = props;
    const [ Sale, setSales ] = useState({
        ProductId: "",
        CustomerId: "",
        StoreId: "",
        DateSold: "",
    });

    fetchSales();

    const handleSaleChange = () => {
        setSales({
            ...Sale,
            ProductId: "",
            CustomerId: "",
            StoreId: "",
            DateSold: "",
        })
    }

    const DeleteSales = (id) => {
        axios.delete(`/Sales/DeleteSales/${id}`)
        .then(data => {
            console.log(data);
            fetchSales();
        })
        .catch(err => {
            console.log(err);
        });
    };

  return(
  <Table celled>
     <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Product Id</Table.HeaderCell>
                <Table.HeaderCell>Customer Id</Table.HeaderCell>
                <Table.HeaderCell>Store Id</Table.HeaderCell>
                <Table.HeaderCell>Date Sold</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
    </Table.Header>

    <Table.Body>
        {Sales.map((Sale) => {
            return (
            <Table.Row>
                <Table.Cell>{Sale.productId}</Table.Cell>
                <Table.Cell>{Sale.customerId}</Table.Cell>
                <Table.Cell>{Sale.storeId}</Table.Cell>
                <Table.Cell>{Sale.dateSold}</Table.Cell>
                <Table.Cell>
                    <Button color='yellow' onClick={() => handleSaleChange(Sales.Id)}>Edit</Button>
                </Table.Cell>
                <Table.Cell>
                    <Button color='red' onClick={() => DeleteSales(Sales.Id)}>Delete</Button> 
                </Table.Cell>
            </Table.Row>
        )})}
    </Table.Body>
  </Table>
  )}

export default SalesTable;