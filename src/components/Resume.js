import { Component } from "react";

class Resume extends Component {
  render() {
    const { name } = this.props; //Destructuring
    return <h1>This person's name is {name}</h1>;
  }
}

export default Resume;
