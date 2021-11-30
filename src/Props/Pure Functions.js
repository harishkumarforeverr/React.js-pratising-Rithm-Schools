import React from "react";

class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  render() {
    // function addJob(Person, job) {
    //   let newobj = Object.assign({}, Person, { job });
    //   console.log(newobj);
    // }
    // let Person = {
    //   name: "harish",
    //   age: "21",
    // };
    // // console.log(Person);
    // console.log(addJob(Person, "react developer"));

    // // Person = addJob(Person, "react developer");
    // // console.log(Person);

    /// ###########################################################
    function addJob(Person, job) {
      // let newobj = Object.assign({}, Person, { job });
      console.log({ ...Person, job });
    }
    let Person = {
      name: "harish",
      age: "21",
    };
    console.log(addJob(Person, "react developer"));
    return <div></div>;
  }
}
export default Props;
