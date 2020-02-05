import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <p>You've clicked {this.state.count} times!</p>
        <button
          data-testid="counter-button"
          onClick={() => this.setState({ count: count + 1 })}
        >
          Increment Count
          </button>
        <button
          data-testid="decrement-button"
          onClick={() => this.setState({count: count - 1})}
        >Decrement Count
        </button>
      </div>
    );
  }
}
