import React, { Component } from 'react'
import './ItemCount.css';
import Button from '@material-ui/core/Button';

export default class ItemCount extends Component {
    constructor() {
        super()
    this.state = {
        count: 0,
    }
    }
    
    handleIncrement = () => {
        this.setState({count: this.state.count +1})
    };
    
    handleDecrement = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count -1})
       }
    };

    render() {
        return (
            <div className="itemCount-container">
                <p>{this.state.count}</p>
                <div className="buttons-container">
                    <Button  variant="contained" color="primary" onClick={this.handleDecrement}>-</Button> 
                    <Button  variant="contained" color="primary" onClick={this.handleIncrement}>+</Button>
                </div>
            </div>
        )
    }
};
