import React, { Component } from "react";

class Counter extends Component {
  //state = { value: 0 };
  //state = { value: this.props.value };
  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div>
        <span className={this.handelBadgeColor()}>{counter.value}</span>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => onIncrement(counter)}>
          +
        </button>

        <button
          className="btn btn-primary m-2"
          type="button"
          onClick={() => onDecrement(counter)}>
          -
        </button>

        <button className="btn btn-danger" onClick={() => onDelete(counter.id)}>
          X
        </button>
      </div>
    );
  }

  /*
  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handelDecrement = () => {
    const value = this.state.value - 1;
    this.setState({ value: value < 0 ? 0 : value });
  };*/
  handelBadgeColor() {
    const value = this.props.counter.value;
    return value === 0
      ? "badge text-bg-warning m-2"
      : "badge text-bg-secondary m-2";
  }
}

export default Counter;
