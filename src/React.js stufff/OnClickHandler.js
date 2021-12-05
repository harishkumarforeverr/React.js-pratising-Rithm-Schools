// import React from "react";

// class OnClickHandler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "harish",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello : {this.state.name} </h1>
//         <button onClick={() => this.setState({ name: "HARISH" })}>
//           UpperCase
//         </button>
//       </div>
//     );
//   }
// }
// export default OnClickHandler;

// /// #####################################################################################################
// import React from "react";

// class OnClickHandler extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "harish",
//     };
//     this.handleClickEvent = this.handleClickEvent.bind(this);
//   }

//   // /// here we are using arrow functions so this refer to close Object tbaht is OnclickHandler
//   // handleClickEvent = () => {
//   //   console.log(this.state);
//   // };

//   handleClickEvent() {
//     this.setState((prevState, props) => {
//       return {
//         name: prevState.name.toUpperCase(),
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello : {this.state.name} </h1>
//         <button onClick={this.handleClickEvent}>UpperCase</button>
//       </div>
//     );
//   }
// }
// export default OnClickHandler;

/// #####################################################################################################
import React from "react";

class OnClickHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "harish",
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  // /// here we are using arrow functions so this refer to close Object tbaht is OnclickHandler
  // handleClickEvent = () => {
  //   console.log(this.state);
  // };

  handleClickEvent() {
    this.setState((prevState, props) => {
      return {
        name: prevState.name.toUpperCase(),
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello : {this.state.name} </h1>
        <button onClick={this.handleClickEvent}>UpperCase</button>
      </div>
    );
  }
}
export default OnClickHandler;
