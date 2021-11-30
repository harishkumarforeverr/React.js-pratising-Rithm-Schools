import React, { Component } from "react";
import "./RecipeApp.css";
import Recipe from "./Recipe";

class RecipeApp extends Component {
  static defaultProps = {
    Obj: [
      {
        title: "Tomato Dog",
        ingrediants: ["tomato", "potato"],
        img: "https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg",
        instr: "harish satish",
      },
      {
        title: "Dal Dog",
        ingrediants: ["dal", "haryana dal"],
        img: "https://images.dog.ceo/breeds/eskimo/n02109961_52.jpg",
        instr: "neha swetha",
      },
      {
        title: "Chickend Dog",
        // ingrediants: ["bmw", "cmw"],
        img: "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg",
        instr: "varsha harsha",
      },
    ],
  };
  render() {
    return (
      <div className="RecipeApp">
        {this.props.Obj.map((val, i) => {
          return (
            <div key={i} className="RecipeApp_div">
              <Recipe {...val} />
            </div>

            //       {/* <div key={i} className="RecipeApp_div">
            //       <Recipe
            //         key={i}
            //        title={val.title}
            //        ingrediants={val.ingrediants}
            //        img={val.img}
            //        instr={val.instr}
            //      />
            //    </div> */}
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
