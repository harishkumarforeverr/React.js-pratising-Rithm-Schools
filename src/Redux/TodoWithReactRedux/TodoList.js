import React from "react"; 
import { connect } from "react-redux";
import Todo from "./Todo";
import { addTodo, removeTodo } from "./actionCreator";

class TodoList extends React.Component {
  constructor(props) {
    //debugger;
    super(props);
    this.state = {
      task: "",
    };
    this.handleonSubmit = this.handleonSubmit.bind(this);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }
  handleonSubmit(e) {
    e.preventDefault();
    //debugger;
    // this.props.dispatch({
    //   type: "ADD_TODO",
    //   task: this.state.task,
    // });
    this.props.addTodo(this.state.task);
    // //debugger;

    e.target.reset();
  }
  handleOnChangeInput(e) {
    //debugger;
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleRemoveTodo(id) {
    // console.log(id);
    //debugger;
    // this.props.dispatch({
    //   type: "REMOVE_TODO",
    //   id,
    // });
    this.props.removeTodo(id);
  }
  render() {
    // debugger;
    // console.log(this.props)
    let todos = this.props.todo.map((taskObj, index) => {
      // console.log(this);
      return (
        <Todo
          taskObj={taskObj}
          key={index}
          handleRemoveTodo={this.handleRemoveTodo.bind(this, taskObj.id)}
        />
      );
    });
    return (
      <div>
        <form onSubmit={this.handleonSubmit}>
          <label htmlFor="task">Task</label>
          <input type="text" name="task" onChange={this.handleOnChangeInput} />
          <button>Add todo</button>
        </form>
        <ul>{todos}</ul>
      </div>
    );
  }
}
const mapStateToProps = (ReduxState) => {
  // debugger;
  return {
    todo: ReduxState.todo,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (task) => dispatch(addTodo(task)),
//     removeTodo:(id)=>dispatch(removeTodo(id))
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);
