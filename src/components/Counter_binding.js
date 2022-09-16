import { Component } from "react";

class Counter_binding extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    //  this.increment = this.increment.bind(this); //Method 1: Bind event handler in constructor, Method 2 = Arrow function
    this.decrement = this.decrement.bind(this);
  }

  //Recommened method -> use arrow functions

  increment = () => {
    //Method 2 -> Bind the function to this
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement() {
    //Method 3
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Class-based Count value is: {this.state.counter}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter_binding;
