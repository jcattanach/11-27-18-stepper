import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <label>{this.props.counter}</label>
      </div>
    );
  }
}

export default Counter;
