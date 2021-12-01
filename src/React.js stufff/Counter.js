import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.increment = this.increment.bind(this);
  }
  // increment() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }
  ///###################################################
  // increment() {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  // }
  render() {
    return (
      <div>
        <h1> Counter : {this.state.count}</h1>
        <button onClick={() => {}}>Incremnt</button>
      </div>
    );
  }
}
export default Counter;

/// ############################################################
