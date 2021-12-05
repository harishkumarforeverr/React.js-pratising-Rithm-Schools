import React, { Component } from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";

class RecipeApp extends Component {
  static defaultProps = {
    dogsArr: [],
  };
  render() {
    // console.log(this.props.dogsArr);
    return (
      <div className="RecipeApp">
        {this.props.dogsArr
          .slice()
          .reverse()
          .map((val, i) => {
            return (
              <div key={i} className="RecipeApp_div">
                <Recipe removeDogById={this.props.removeDogById} {...val} />
              </div>
            );
          })}
      </div>
    );
  }
}
export default RecipeApp;

// // place these code in App.js filr
// import logo from "./logo.svg";
// import "./App.css";
// import RecipeApp from "./RecipeApp/RecipeApp";
// import PropsChildres from "./PropsChildres/PropsChildres";

// function App() {
//   return (
//     <div>
//       <RecipeApp />

//       {/* <PropsChildres>
//         <div>
//           <h1> im a children </h1>
//           <h2> harish is great </h2>
//           <h1> ends </h1>
//         </div>
//       </PropsChildres> */}
//     </div>
//   );
// }

// export default App;
