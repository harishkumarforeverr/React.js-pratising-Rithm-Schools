import React from "react";

class ProblemWithSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "harish",
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    debugger;
    this.setState(
      {
        name: "harish mama",
      },
      () => {
        console.log(this.state.name);
      }
    );
    debugger;

    this.setState(
      {
        name: "neha",
      },
      () => {
        console.log(this.state.name);
      }
    );
    debugger;
    this.setState(
      {
        name: "mom",
      },
      () => {
        console.log(this.state.name);
      }
    );
    debugger;
  }
  ///###################################################
  // changeName() {
  //   this.setState((prevState) => {
  //     return {
  //       name: prevState.name + 1,
  //     };
  //   });
  //   this.setState((prevState) => {
  //     return {
  //       name: prevState.name + 1,
  //     };
  //   });
  //   this.setState((prevState) => {
  //     return {
  //       name: prevState.name + 1,
  //     };
  //   });
  // }
  render() {
    return (
      <div>
        <h1> Counter : {this.state.name}</h1>
        <button onClick={this.changeName}>Incremnt</button>
      </div>
    );
  }
}
export default ProblemWithSetState;
