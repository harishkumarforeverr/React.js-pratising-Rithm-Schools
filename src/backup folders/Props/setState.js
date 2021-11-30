import React from "react";

class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
    setTimeout(() => {
      console.log("start of setState");
      // debugger;
      this.setState({
        color: "green",
      });
      console.log("end of setState");
      // debugger;
    }, 3000);
  }
  render() {
    // debugger;
    console.log("render method invoked");
    return (
      <div>
        <h1> Hello world </h1>
        <p> Color is : {this.state.color} </p>
      </div>
    );
  }
}
export default Props;
