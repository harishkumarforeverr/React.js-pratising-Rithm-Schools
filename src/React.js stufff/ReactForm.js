// import React from "react";

// const ReactForm = () => {
//   debugger;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           debugger;
//           console.log(this);
//         }}
//       >
//         this
//       </button>
//     </div>
//   );
// };
// export default ReactForm;

import React from "react";

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "harish",
      store: {
        age: "22",
        value: "harishkumarforever",
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const store = {
      ...this.state.store,
      value: this.state.value,
    };
    this.setState({
      ...this.state,
      store,
      value: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Normal input </label>
          <input type="text" />
          <label> react input </label>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({
                value: e.target.value,
              });
            }}
          />
          <div>
            <h1> name : {this.state.value} </h1>
            <h1> From React State (see the State in Chrome DevTools) </h1>
            <h1> name : {this.state.store.value} </h1>
            <h1> age : {this.state.store.age} </h1>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default ReactForm;
