import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'


class App extends Component {
    constructor(props) {
    super(props)

    this.state = {
      counter : 0
    }
  }

  decreaseCounter = () => {
    this.setState(prevState => ({
      counter : prevState.counter - 1
    }))
  }

  increaseCounter = () => {
    this.setState(prevState => ({
      counter : prevState.counter + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.decreaseCounter}>-</button>
        <Counter counter = {this.state.counter}/>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    );
  }
}

export default App;
