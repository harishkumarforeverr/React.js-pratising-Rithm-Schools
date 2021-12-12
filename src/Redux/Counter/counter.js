// const inititalState={
//   count:0
// }

// const rootReducer=(state=inititalState, action)=>{
//   debugger;
//   return state;
// }
// const store=Redux.createStore(rootReducer);

// console.log(store.getState())

// ///##########################################################################
// const inititalState={
//   count:0
// }

// const rootReducer=(state, action)=>{
//   debugger;
//   return state;
// }
// const store=Redux.createStore(rootReducer);

// console.log(store.getState())

// ///##########################################################################
// const inititalState={
//   count:0
// }

// const rootReducer=(state=inititalState, action)=>{
//   debugger;
//   return state;
// }
// const store=Redux.createStore(rootReducer);

// console.log(store.getState());

// $("document").ready(function(){
//   $("#increment").on("click",()=>{
//      store.dispatch({
//        type:"INCREMENT"
//      })
//   })
//   $("#decrement").on("click",()=>{
//     console.log("clicked the decrement");
//   })
// })

// ///##########################################################################
// const inititalState = {
//   count: 0,
// };

// const rootReducer = (state = inititalState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       debugger;
//       let newState = Object.assign({}, state);
//       newState.count++;
//       return newState;
//     default:
//       debugger;
//       return state;
//   }
// };
// const store = Redux.createStore(rootReducer);

// console.log(store.getState());

// $("document").ready(function () {
//   $("#increment").on("click", () => {
//     store.dispatch({
//       type: "INCREMENT",
//     });
//   });
//   $("#decrement").on("click", () => {
//     console.log("clicked the decrement");
//   });
// });

// ///##########################################################################
// const inititalState = {
//   count: 0,
// };

// const rootReducer = (state = inititalState, action) => {
//   let newState = undefined;
//   switch (action.type) {
//     case "INCREMENT":
//       // debugger;
//       newState = Object.assign({}, state);
//       newState.count++;
//       return newState;
//     case "DECREMENT":
//       newState = Object.assign({}, state);
//       newState.count--;
//       return newState;
//     default:
//       // debugger;
//       return state;
//   }
// };
// const store = Redux.createStore(rootReducer);

// console.log(store.getState());

// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// $("document").ready(function () {
  
//   let currentCount = store.getState();
//   $("#count").text(currentCount.count);
//   $("#increment").on("click", () => {
//     store.dispatch(increment());
//     let currentCount = store.getState();
//     $("#count").text(currentCount.count);
//   });
//   $("#decrement").on("click", () => {
//     store.dispatch(decrement());
//     let currentCount = store.getState();
//     $("#count").text(currentCount.count);
//   });
// });

///##########################################################################
const inititalState = {
  count: 0,
};

const rootReducer = (state = inititalState, action) => {
  let newState = undefined;
  switch (action.type) {
    case "INCREMENT":
      // debugger;
      newState = {...state};
      newState.count++;
      return   newState
    case "DECREMENT":
      newState = {...state};    
      newState.count--;
      return newState;
    default:
      // debugger;
      return state;
  }
};
const store = Redux.createStore(rootReducer);

console.log(store.getState());

const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

$("document").ready(function () {
  
  let currentCount = store.getState();
  $("#count").text(currentCount.count);
  $("#increment").on("click", () => {
    store.dispatch(increment());
    let currentCount = store.getState();
    $("#count").text(currentCount.count);
  });
  $("#decrement").on("click", () => {
    store.dispatch(decrement());
    let currentCount = store.getState();
    $("#count").text(currentCount.count);
  });
});
