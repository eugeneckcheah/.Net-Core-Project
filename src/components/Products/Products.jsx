import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import ProductsTable from './ProductsTable';
import CreateProducts from './CreateProducts';



export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            open: false,
        }
    }

fetchProducts = () => {
    axios
     .get("/Products/GetProducts")
     .then(res => {
         console.log(res.data);
         this.setState({
             Products: res.data,
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
    
    const {Products, open} = this.state;

    return(
        <div>
            <CreateProducts toggleCreateModal={this.toggleCreateModal} open={open} fetchProducts={this.fetchProducts}/>
            <Button color='blue' onClick={() => {this.toggleCreateModal(true)}}>Create</Button>
            <ProductsTable Products={Products} fetchProducts={this.fetchProducts}/>
        </div>
    )
}};