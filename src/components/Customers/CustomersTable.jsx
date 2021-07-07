import React, {useState} from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
//import DeleteCustomersModal from './DeleteCustomersModal';


const CustomersTable = (props) => {
  const { Customers, fetchCustomers } = props;
  const [Customer, setCustomers] = useState({
    Name: "",
    Address: "",
  });

  fetchCustomers();

  const handleCustomerChange = () => {
    setCustomers({
      ...Customer,
      Name: "",
      Address: "",
    });
  };

  const DeleteCustomers = (id) => {
    axios
      .delete(`/Customers/DeleteCustomers/${id}`)
      .then((data) => {
        console.log(data);
        fetchCustomers();
      })
      .catch((err) => {
        console.log(err);
      });
  };


//const [ setOpenModal ] = useState(false);

  return (
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
        {Customers.map((Customer) => {
          return (
            <Table.Row>
              <Table.Cell>{Customer.name}</Table.Cell>
              <Table.Cell>{Customer.address}</Table.Cell>
              <Table.Cell>
                <Button color="yellow" onClick={() => handleCustomerChange(Customers.Id)}>
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button color="red" onClick={() => {DeleteCustomers(Customers.Id)}}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default CustomersTable;
 


