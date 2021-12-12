import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
const CompoenetA = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h1>Im a Compoenent 111111111111</h1>
      {/* <h2> Hello , {match.params.name}</h2> */}
    </div>
  );
};
const CompoenetD = (props) => {
  console.log(useParams());
  return (
    <div>
      <h1>Im a Compoenent 4444444444444444</h1>
      <h2> Hello , {useParams().name}</h2>
    </div>
  );
};
const CompoenetB = () => {
  return (
    <div>
      <h1>Im a Compoenent 22222222222222</h1>
    </div>
  );
};
const CompoenetBC = () => {
  return (
    <div>
      <h1>Im a Compoenent 3333333333333333</h1>
    </div>
  );
};

// const AllMyPathUSingLink = () => {
//   return (
//     <div>
//       <h1> Welcome to the React Router Dom </h1>
//       <h1>
//         {" "}
//         <Link to="/">Home</Link>
//       </h1>
//       <h1>
//         {" "}
//         <Link to="/about">About</Link>
//       </h1>
//     </div>
//   );
// };

const AllmyPathsUsingNavLink = () => {
  return (
    <div>
      <h1> Using NAvi link </h1>
      <h1>
        <NavLink
          style={({ isActive }) => ({
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          })}
          to="/"
        >
          home
        </NavLink>
      </h1>
      <h1>
        <NavLink
          style={({ isActive }) => ({
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          })}
          to="/about"
        >
          about
        </NavLink>
      </h1>
      <h1>
        <NavLink
          style={({ isActive }) => ({
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          })}
          to="/setting"
        >
          setting
        </NavLink>
      </h1>
    </div>
  );
};

const ReactRouterDOM = () => {
  return (
    <div>
      <AllmyPathsUsingNavLink />
      <Routes>
        <Route path="/" element={<CompoenetA />} />
        <Route path="/:name" element={<CompoenetD />} />
        <Route path="/about" element={<CompoenetB />} />
        <Route path="/setting" element={<CompoenetBC />} />
      </Routes>
    </div>
  );
};
export default ReactRouterDOM;
