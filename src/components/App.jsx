import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./Counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
    ],
  };
  render() {
    return (
      <main role="main" className="container">
        <NavBar
          onCountersItemsTotal={this.handelCounterItemsTotal()}
          onCountersTotal={this.handelCountersTotal()}
        />
        <Counters
          counters={this.state.counters}
          onCountersDelete={this.handelDelete}
          onCountersIncrement={this.handelIncrement}
          onCountersDecrement={this.handelDecrement}
          onCountersReset={this.handelReset}
        />
      </main>
    );
  }
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
  handelCounterItemsTotal = () => {
    const counters = [...this.state.counters];
    const total = counters.reduce((a, b) => a + b.value, 0);
    //console.log("totalItems", total);
    return total;
  };

  handelCountersTotal = () => {
    const counters = [...this.state.counters];
    const total = counters.length;
    console.log("totallength", total);
    return total;
  };
}

export default App;
