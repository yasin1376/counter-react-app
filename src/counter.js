import React, { Component } from 'react';

class Counter extends Component {

    state = { counter: 0 }; 
   
    handleIncrement = () => {
        let counter = this.state.counter;
        counter++;
        this.setState({counter});
    };

    render() { 
        return (
           <div>
            <p className='mb-5'>
                You pushed 
                <span className='text-5xl font-bold'>{this.state.counter}</span>
                 times
            </p>
            <button className='bg-blue-600 py-2 px-4 rounded text-sm hover:bg-blue-500' onClick={this.handleIncrement}>+ Add</button>
           </div>
        );
    }
}
 
export default Counter;