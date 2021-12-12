import React from "react";
import TodoList from "./TodoWithReactRedux/TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./TodoWithReactRedux/rootReducer";
// import { BrowserRouter } from "react-router-dom";
const store = createStore(rootReducer,
  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const ReduxCompoenet = () => {
  // debugger;
  return (
    <Provider store={store}>
    {/* <BrowserRouter> */}
      <TodoList />
      {/* </BrowserRouter> */}
    </Provider>
  );
};
export default ReduxCompoenet;
