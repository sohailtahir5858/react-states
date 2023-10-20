import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <>
        <span className="badge badge-primary mr-2">{this.formatText()} </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }

  formatText() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}
