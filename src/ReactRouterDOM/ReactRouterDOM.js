import React from "react";
// import {  } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
  render,
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
const CompoenetD = ({ history }) => {
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
const CompoenetBC = ({ history }) => {
  return (
    <div>
      <h1>Im a Compoenent 3333333333333333</h1>
      <button
        onClick={() => {
          history("/about");
        }}
      >
        {" "}
        Home{" "}
      </button>
    </div>
  );
};

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
      <h1>
        <NavLink
          style={({ isActive }) => ({
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          })}
          to="/teacher"
        >
          Teacher
        </NavLink>
      </h1>
    </div>
  );
};
const Teacher = ({ arr }) => {
  return (
    <div>
      {arr.map((val, i) => {
        return <h1> {val} </h1>;
      })}
    </div>
  );
};
const ReactRouterDOM = () => {
  const history = useNavigate();
  const arr = ["harish", "mom", "Dad", "akka"];
  return (
    <div>
      <AllmyPathsUsingNavLink />
      <Routes>
        <Route path="/" element={<CompoenetA />} />
        <Route path="/:name" history={history} element={<CompoenetD />} />
        <Route path="/about" element={<CompoenetB />} />
        <Route path="/setting" element={<CompoenetBC history={history} />} />
        <Route
          path="/teacher"
          render={(props) => <Teacher {...props} arr={arr} />}
        />
      </Routes>
    </div>
  );
};
export default ReactRouterDOM;
