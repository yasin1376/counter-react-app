import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state = { counter: 0 }; 
    }
   
    handleIncrement = () => {
        let counter = this.state.counter;
        counter++;
        this.setState({counter});
    };
    render() { 
        return (
           <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.handleIncrement}>+ Add</button>
           </div>
        );
    }
}
 
export default Counter;