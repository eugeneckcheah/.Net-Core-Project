import React, { Component } from 'react';
import axios from 'axios';
import CustomersTable from './CustomersTable';
import { Button } from 'semantic-ui-react';
import CreateCustomers from './CreateCustomers';



export default class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customers: [],
            open: false,
        }
    }

fetchCustomers = () => {
    axios
     .get("/Customers/GetCustomers")
     .then(res => {
         console.log(res.data);
         this.setState({
             Customers: res.data,
         });
     })
     .catch(err => {
         console.log(err);
     });
    };

toggleCreateModal = (value) => {
    this.setState({
        open: value
    })
}


render() {
    
    const {Customers, open} = this.state;

    return(
        <div>
            <CreateCustomers toggleCreateModal={this.toggleCreateModal} open={open} fetchCustomers={this.fetchCustomers}/>
            <Button color='blue' onClick={() => {this.toggleCreateModal(true)}}>Create</Button>
            <CustomersTable Customers={Customers} fetchCustomers={this.fetchCustomers}/>
        </div>
    )
}};
