import React, { Component } from "react";
import "./Recipe.css";
import PropTypes from "prop-types";

class Recipe extends Component {
  // static defaultProps = {
  //   ingrediants: [],
  // };
  static propTypes = {
    ingrediants: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string,
    instr: PropTypes.string,
  };
  render() {
    const { title, img, instr, id } = this.props;
    const ingrediants = this.props.ingrediants.map((val, i) => (
      <li key={i}> {val}</li>
    ));
    return (
      <div>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>Hobbies </h2>
          <ul>{ingrediants}</ul>
          <h2> Owner name </h2>
          <p> {instr} </p>
        </div>
        <div>
          <button
            onClick={() => {
              this.props.removeDogById(id);
            }}
          >
            {" "}
            REMOVE
          </button>
        </div>
      </div>
    );
  }
}
Recipe.defaultProps = {
  ingrediants: [],
};
export default Recipe;
