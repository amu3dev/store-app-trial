import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  /*state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
    ],
  };*/
  render() {
    const {
      onCountersDelete,
      onCountersIncrement,
      onCountersDecrement,
      counters,
      onCountersTotal,
      onCountersReset,
    } = this.props;
    return (
      <div>
        <div>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onCountersDelete}
              onIncrement={onCountersIncrement}
              onDecrement={onCountersDecrement}
              counter={counter}
              //onTotal={console.log("total", this.handelTotal())}
              onTotal={onCountersTotal}
            />
          ))}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark btn-sm m-2"
            onClick={onCountersReset}>
            Reset
          </button>
        </div>
      </div>
    );
  } /*
  handelDelete = (counterID) => {
    //console.log("handelDelete", counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };
  handelIncrement = (counter) => {
    //console.log("Increment Clicked", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(counters);
    this.setState({ counters });
  };
  handelDecrement = (counter) => {
    //console.log("Decrement Clicked", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : console.log("value is zero already");
    this.setState({ counters });
  };
  handelReset = () => {
    //console.log("Reset Clicked");
    const counters = [...this.state.counters].map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handelTotal = () => {
    const counters = [...this.state.counters];
    const total = counters.reduce((a, b) => a + b.value, 0);
    console.log("totalItems", total);
    return total;
  };*/
}

export default Counters;
