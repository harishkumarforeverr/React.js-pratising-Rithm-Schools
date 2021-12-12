// // const store = Redux.createStore();
// // console.log(store);

// var initialState = {
//   count: 0,
// };

// function rootReducer(state = initialState, action) {
//   return state;
// }

// const store = Redux.createStore(rootReducer);

// // console.log(store);
// // console.log(store.getState());

// // console.log(store.dispatch());

// ///###########################################################################################################################

// // const store = Redux.createStore();
// // console.log(store);

// var initialState = {
//   count: 0,
// };

// function rootReducer(state = initialState, action) {
//   debugger;
//   return state;
// }

// const store = Redux.createStore(rootReducer);

// // console.log(store);
// // console.log(store.getState());

// // console.log(store.dispatch({}));
// console.log(
//   store.dispatch({
//     type: "INCREMENT",
//   })
// );

// ///###########################################################################################################################

// // const store = Redux.createStore();
// // console.log(store);

// var initialState = {
//   count: 0,
// };

// function rootReducer(state = initialState, action) {
//   if (action.type === "INCREMENT") {
//     debugger;
//     return ++state.count;
//   }
//   return state;
// }

// const store = Redux.createStore(rootReducer);

// // console.log(store);

// // console.log(store.dispatch({}));
// console.log(
//   store.dispatch({
//     type: "INCREMENT",
//   })
// );
// console.log(store.getState());

// ///###########################################################################################################################

// // const store = Redux.createStore();
// // console.log(store);

// var initialState = {
//   count: 0,
// };

// function rootReducer(state = initialState, action) {
//   if (action.type === "INCREMENT") {
//     let newState = Object.assign({}, state);
//     newState.count++;
//     return newState;
//   }
//   return state;
// }

// const store = Redux.createStore(rootReducer);

// // console.log(store);

// // console.log(store.dispatch({}));
// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());
// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

///###########################################################################################################################

// const store = Redux.createStore();
// console.log(store);

// var initialState = {
//   count: 0,
// };

// function rootReducer(state = initialState, action) {
//   if (action.type === "INCREMENT") {
//     let newState = Object.assign({}, state);
//     newState.count++;
//     return newState;
//   }
//   if (action.type === "DECREMENT") {
//     let newState = Object.assign({}, state);
//     newState.count--;
//     return newState;
//   }
//   return state;
// }

// const store = Redux.createStore(rootReducer);

// // console.log(store);

// // console.log(store.dispatch({}));
// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());
// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());


// store.dispatch({
//   type:"DECREMENT"
// })

// console.log("DCREMENT ", store.getState());

// store.dispatch({
//   type:"DECREMENT"
// })

// console.log("DCREMENT ", store.getState());

// store.dispatch({
//   type:"DECREMENT"
// })

// console.log("DCREMENT ", store.getState());








var initialState = {
  count: 0,
};

function rootReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    let newState = Object.assign({}, state);
    newState.count++;
    return newState;
  }
  if (action.type === "DECREMENT") {
    let newState = Object.assign({}, state);
    newState.count--;
    return newState;
  }
  return state;
}

const store = Redux.createStore(rootReducer);

// console.log(store);

// console.log(store.dispatch({}));
const Increment=()=> ({
  type:"INCREMENT"
})
store.dispatch(Increment());
console.log(store.getState());

store.dispatch(Increment());
console.log(store.getState());

store.dispatch(Increment());
console.log(store.getState());

store.dispatch(Increment());
console.log(store.getState());


store.dispatch({
  type:"DECREMENT"
})

console.log("DCREMENT ", store.getState());

store.dispatch({
  type:"DECREMENT"
})

console.log("DCREMENT ", store.getState());

store.dispatch({
  type:"DECREMENT"
})

console.log("DCREMENT ", store.getState());