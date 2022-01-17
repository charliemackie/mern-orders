import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

// make each order component

const Order = props => (

// link to new page, passes object _id to the page

    <Link to={props.order._id}>
        <br></br>
        <button type="button" className="btn btn-light">
            <div>{props.order.Name}</div>
            <div>{props.order.Address}</div>
            <div>{props.order.Item_Name}</div>
            <div>{props.order.Item_Price}</div>
            <div>{props.order.Item_Size}</div>
        </button>
        <br></br>
        <br></br>
    </Link>
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
            <div className="m-3">
                <h2>Current Orders</h2>
                { this.OrderList() }
            </div>
        );
    }
}