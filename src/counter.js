import React, { Component } from 'react';

class Counter extends Component {
    state = { counter: 0 }; 
    handleIncrement = () => {
        console.log("handle increment");
        this.setState({counter: this.state.counter++});
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