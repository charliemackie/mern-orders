import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default class ConfirmOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            Name: '',
            Address: '',
            Item_Name: '',
            Item_Price: 0,
            Item_Size:'',
            complete_1: true,
            complete_2: true,
            button: true
        }
        this.onChange_1 = this.onChange_1.bind(this);
        this.onChange_2 = this.onChange_2.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/order'+window.location.pathname)
          .then(response => {
            this.setState({ 
                id: response.data._id,
                Name: response.data.Name,
                Address: response.data.Address,
                Item_Name: response.data.Item_Name,
                Item_Price: response.data.Item_Price,
                Item_Size: response.data.Item_Size
            })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
    // check if the checkboxes are checked

    onChange_1(event) {
        this.setState({
            complete_1: !this.state.complete_1
        });
    }

    onChange_2(event) {
        this.setState({
            complete_2: !this.state.complete_2
        });
    }

    render () {
        
        return (
            <div>
                <h2>Order for {this.state.Name}</h2>
                <div className='container'>
                    {this.state.Address}
                    <br></br>
                    <br></br>

                    <div className="alert alert-secondary" role="alert">
                        <h3>Order Number: {this.state.id}</h3>
                        {this.state.Item_Name}
                        <br></br>
                        {this.state.Item_Price}
                        <br></br>
                        {this.state.Item_Size}
                    </div>

                    <br></br>

                    <div>
                        Check the boxes below to confirm:
                    </div>

                    <br></br>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="flexCheckDefault" 
                            onChange={this.onChange_1}
                            
                        ></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Customer has confirmed they will be shipping this order back
                        </label>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="flexCheckDefault" 
                            onChange={this.onChange_2} 
                            
                        ></input>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Item is not being returned because it is damaged OR it is not the indicated item at purchase
                            <div style={{color:"grey"}}>(Example of acceptable return reason: Item doesn't fit, Changed my mind ... etc.)</div>
                        </label>
                    </div>

                    <br></br>

                    <button type="button" className="btn btn-success" 
                        disabled={this.state.complete_1 === false && this.state.complete_2 === false ? false : true}>
                        Return with Frate!
                    </button>
                    
                </div>
            </div>
        );
    }
}