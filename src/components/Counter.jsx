import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = (params) => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatText()} </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {this.handleIncrement({id: 1})}}
        >
          Increment
        </button>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge mr-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatText() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}
