import { Component } from "react";
import Profile from "./Profile";

class Form extends Component {
  state = { firstname: "A name", lastname: "lastname" };

  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handlelastnamechange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleSubmit= (event) => {
    event.preventDefault();
    console.log( this.state.firstname + ' ' + this.state.lastname);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.firstname}
            ></input>
          </div>
          <div>
            <input
              onChange={this.handlelastnamechange}
              type="text"
              value={this.state.lastname}
            ></input>
          </div>
          <div>
            <button type="Submit">Submit</button>
          </div>
        </form>

        <p>
          Name is: FirstAndlastName
        </p>
      </div>
    );
  }
}

export default Form;
