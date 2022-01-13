import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

// make each order component

const Order = props => (
    <tr>
      <td>{props.order.Name}</td>
      <td>{props.order.Address}</td>
      <td>{props.order.Item_Name}</td>
      <td>{props.order.Item_Price}</td>
      <td>{props.order.Item_Size}</td>
    </tr>
  )

// load all of the orders 

export default class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {orders: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/order/')
          .then(response => {
            this.setState({ orders: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    OrderList() {
        return this.state.orders.map( currentOrder => {
            return <Order order={currentOrder} key={currentOrder._id}></Order>;
        })
    }

    render () {
        return (
            <div>
        <h3>Current Orders</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Item</th>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            { this.OrderList() }
          </tbody>
        </table>
      </div>
        );
    }
}