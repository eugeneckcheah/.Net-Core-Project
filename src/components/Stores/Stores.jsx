import React, { Component } from 'react';
import axios from 'axios';
import StoresTable from './StoresTable';
import { Button } from 'semantic-ui-react';
import CreateStores from './CreateStores';


export default class Stores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Stores: [],
            open: false,
        }
    }

fetchStores = () => {
    axios
     .get("/Stores/GetStores")
     .then(res => {
         console.log(res.data);
         this.setState({
             Stores: res.data,
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
    
    const {Stores, open} = this.state;

    return(
        <div>
            <CreateStores toggleCreateModal={this.toggleCreateModal} open={open} fetchStores={this.fetchStores}/>
            <Button color='blue' onClick={() => {this.toggleCreateModal(true)}}>Create</Button>
            <StoresTable Stores={Stores} fetchStores={this.fetchStores}/>
        </div>
    )
}};