import React, {useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';


const StoresTable = (props) => {

    const { Stores, fetchStores } = props;
    const [Store, setStores] = useState({
        Name: "",
        Address: "",
    });
 
    fetchStores();

    const handleStoreChange = () => {
        setStores({
            ...Store,
            Name: "",
            Address: "",
        })
    }

    const DeleteStores = (id) => {
        axios
        .delete(`/Stores/DeleteStores/${id}`)
        .then(data => {
            console.log(data);
            fetchStores();
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
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
    </Table.Header>

    <Table.Body>
        {Stores.map((Store) => {
            return (
            <Table.Row>
                <Table.Cell>{Store.name}</Table.Cell>
                <Table.Cell>{Store.address}</Table.Cell>
                <Table.Cell>
                    <Button color='yellow' onClick={() => handleStoreChange(Stores.Id)}>Edit</Button>
                </Table.Cell>
                <Table.Cell>
                    <Button color='red' onClick={() => DeleteStores(Stores.Id)}>Delete</Button> 
                </Table.Cell>
            </Table.Row>
        )})}
    </Table.Body>
  </Table>
  )}

export default StoresTable;