import { ADD_TODO, REMOVE_TODO } from "./actionCreator";

const inititalState = {
  todo: [],
  id: 0,
};

export default function rootReducer(state = inititalState, action) {
  //debugger;
  var newState

  switch (action.type) {
    case ADD_TODO: 
    //debugger;
    newState={...state}; 
    newState.id++;
    return {
      ...newState,
      todo:[...newState.todo, {
        task:action.task ,
        id:newState.id
      }]
    }
    case REMOVE_TODO:  
    //debugger;
    newState={...state};
    return {
      ...newState,
      todo:newState.todo.filter((todo)=>todo.id!==action.id)
    };
    default:
      //debugger;
      return state;
  }
}
