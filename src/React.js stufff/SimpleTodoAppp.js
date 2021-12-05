import React from "react";

class SimpleTodoAppp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: [],
      inputvalue: "",
    };
  }
  handleOnchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      return {
        ...prevState,
        Todo: [...prevState.Todo, this.state.inputvalue],
        inputvalue: "",
      };
    });
  };
  render() {
    return (
      <div
        style={{
          margin: "0 auto",
          // background: "red",
        }}
      >
        <div
          style={{
            width: "70%",
            // background: "blue",
            margin: "0 auto",
            textAlign: "center",
            // color: "white",
          }}
        >
          <form onSubmit={this.onSubmit}>
            <h1>Todo App</h1>
            <h2>
              Add Todo :
              <input
                name="inputvalue"
                value={this.state.inputvalue}
                onChange={this.handleOnchange}
              />{" "}
              <button> Submit </button>
            </h2>
            <ol
              style={{
                fontSize: "2rem",
              }}
            >
              {this.state.Todo.map((todo, i) => {
                return (
                  <li
                    style={{
                      textAlign: "left",
                    }}
                    key={i}
                  >
                    {" "}
                    {todo}{" "}
                  </li>
                );
              })}
            </ol>
          </form>
        </div>
      </div>
    );
  }
}
export default SimpleTodoAppp;
