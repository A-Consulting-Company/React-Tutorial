import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("Class based event handling");
  }

  render() {
    return (
      <div>
        This is class based Component
        <button onClick={this.handleClick}>Click Class based</button>
      </div>
    );
  }
}

export default ClassEvent;
