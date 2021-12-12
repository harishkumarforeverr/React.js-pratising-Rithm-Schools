const inititState = {
  todo: [],
  id: 0,
};
const rootReducer = (state = inititState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      var newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todo: [
          ...newState.todo,
          {
            task: action.task,
            id: newState.id,
          },
        ],
      };
    case "REMOVE_TODO":
      // debugger;
      let todo = state.todo.filter((val) => val.id !== +action.id);
      return {
        ...state,
        todo,
      };
    default:
      return state;
  }
};
const store = Redux.createStore(rootReducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

/// action reducers
// const ADD_TODO = (val) => {
//   return {
//     type: "INCREMENT",
//     val,
//   };
// };

$("document").ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    let task = $("#task").val();
    store.dispatch({
      type: "ADD_TODO",
      task,
    });
    const currentState = store.getState();
    let $newListItem = $("<li>", {
      text: task,
    });

    let $button = $("<button>", {
      text: "X",
      id: currentState.id,
    });
    $newListItem.append($button);
    $("#todo").append($newListItem);

    $("ul").on("click", "button", function (e) {
      store.dispatch({
        type: "REMOVE_TODO",
        id: $(e.target).attr("id"),
      });
      $(e.target).parent().remove();
    });
    $("form").trigger("reset");
  });
});
