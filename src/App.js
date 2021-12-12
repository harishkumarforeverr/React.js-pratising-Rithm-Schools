import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import StateLessFun from "./React.js stufff/stateless function";
import Counter from "./React.js stufff/Counter";
import ProblemWithSetState from "./React.js stufff/Problems with setState";
import Props from "./React.js stufff/Props";
import RandomColorBoxes from "./React.js stufff/RandomColorBoxes";
import ReturnJsxAsArray from "./React.js stufff/ReturnJsxAsArray";
import OnClickHandler from "./React.js stufff/OnClickHandler";
import ReactForm from "./React.js stufff/ReactForm";
import SimpleTodoAppp from "./React.js stufff/SimpleTodoAppp";
import Refs from "./React.js stufff/Refs";
import RecipeApp from "./RecipeApp/index";
import MyRecipeApp from "./RecipeApp";
import FindSameColorGame from "./FindSameColorGame/FindSameColorGame";
import LifeCycleMethod from "./lifeCycleMethod/lifeCycleMethod";
import ReactRouterDOM from "./ReactRouterDOM/ReactRouterDOM";
import ReduxCompoenet from "./Redux/ReduxCompoenet";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<FindSameColorGame />} />
          <Route path="/StateLessFun" element={<StateLessFun />} />
          <Route path="/Counter" element={<Counter />} />
          <Route
            path="/ProblemWithSetState"
            element={<ProblemWithSetState />}
          />
          <Route path="/Props" element={<Props />} />
          <Route path="/RandomColorBoxes" element={<RandomColorBoxes />} />
          <Route path="/ReturnJsxAsArray" element={<ReturnJsxAsArray />} />
          <Route path="/OnClickHandler" element={<OnClickHandler />} />
          <Route path="/StateLessFun" element={<StateLessFun />} />

          <Route path="/ReactForm" element={<ReactForm />} />
          <Route path="/SimpleTodoAppp" element={<SimpleTodoAppp />} />
          <Route path="/Refs" element={<Refs />} />
          <Route path="/RecipeApp" element={<RecipeApp />} />
          <Route path="/MyRecipeApp" element={<MyRecipeApp />} />
          <Route path="/FindSameColorGame" element={<FindSameColorGame />} />
          <Route path="/LifeCycleMethod" element={<LifeCycleMethod />} />
          <Route path="/ReactRouterDOM" element={<ReactRouterDOM />} />
          <Route path="/ReduxCompoenet" element={<ReduxCompoenet />} />
        </Routes>
      </header>
      <section>
        <h1> Some Pratising (Projects) during learning React.js </h1>
        <div className="linktags">
          <h1>
            <Link to="/StateLessFun"> StateLessFun </Link>
          </h1>
          <h1>
            <Link to="/Counter"> Counter </Link>
          </h1>
          <h1>
            <Link to="/ProblemWithSetState"> ProblemWithSetState </Link>
          </h1>
          <h1>
            <Link to="/Props"> Props </Link>
          </h1>
          <h1>
            <Link to="/RandomColorBoxes"> RandomColorBoxes </Link>
          </h1>
          <h1>
            <Link to="/ReturnJsxAsArray"> ReturnJsxAsArray </Link>
          </h1>
          <h1>
            <Link to="/OnClickHandler"> OnClickHandler </Link>
          </h1>
          <h1>
            <Link to="/ReactForm"> ReactForm </Link>
          </h1>
          <h1>
            <Link to="/SimpleTodoAppp"> SimpleTodoAppp </Link>
          </h1>
          <h1>
            <Link to="/Refs"> Refs </Link>
          </h1>
          <h1>
            <Link to="/RecipeApp"> RecipeApp </Link>
          </h1>
          <h1>
            <Link to="/MyRecipeApp"> MyRecipeApp </Link>
          </h1>
          <h1>
            <Link to="/FindSameColorGame"> FindSameColorGame </Link>
          </h1>
          <h1>
            <Link to="/LifeCycleMethod"> LifeCycleMethod </Link>
          </h1>
          <h1>
            <Link to="/ReactRouterDOM"> ReactRouterDOM </Link>
          </h1>
          <h1>
            <Link to="/ReduxCompoenet"> ReduxCompoenet </Link>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default App;
