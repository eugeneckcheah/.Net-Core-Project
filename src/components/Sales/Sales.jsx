import React, { Component } from 'react';
import axios from 'axios';
import SalesTable from './SalesTable';
import { Button } from 'semantic-ui-react';
import CreateSales from './CreateSales';


export default class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sales: [],
            open: false,
        }
    }

fetchSales = () => {
    axios
     .get("/Sales/GetSales")
     .then(res => {
         console.log(res.data);
         this.setState({
             Sales: res.data,
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
    
    const {Sales, open} = this.state;

    return(
        <div>
            <CreateSales toggleCreateModal={this.toggleCreateModal} open={open} fetchSales={this.fetchSales}/>
            <Button color='blue' onClick={() => {this.toggleCreateModal(true)}}>Create</Button>
            <SalesTable Sales={Sales} fetchSales={this.fetchSales}/>
        </div>
    )
}};