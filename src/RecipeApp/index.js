import React from "react";
import NavBar from "./NavBar";
import RecipeApp from "./RecipeApp";
import Form from "./Form";
import "./index.css";
const axios = require("axios");
class MyRecipeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: false,
      imgurl: "",
      id: 2,
      dogsArr: [
        {
          id: 0,
          title: "hasy Dog",
          ingrediants: ["eating", "sleeping"],
          img: "https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg",
          instr: "harish",
        },
        {
          id: 1,
          title: "Mosy Dog",
          ingrediants: ["roaming", "barking"],
          img: "https://images.dog.ceo/breeds/eskimo/n02109961_52.jpg",
          instr: "Satish",
        },
        {
          id: 2,
          title: "Chickend Dog",
          ingrediants: ["bowww", "playing"],
          img: "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg",
          instr: "varsha",
        },
      ],
    };
    this.removeDogById = this.removeDogById.bind(this);
  }
  handleisFormVisible = (manualProp) => {
    this.setState((prevState) => {
      if (manualProp) {
        axios
          .get("https://dog.ceo/api/breeds/image/random")
          .then((res) => {
            this.setState({
              imgurl: res.data.message,
            });
          })
          .catch((err) => console.log(err));
      }
      return {
        isFormVisible: manualProp === true ? true : false,
      };
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let formdata = {};
    for (let [key, value] of formData.entries()) {
      if (key === "ingrediants") {
        value =
          formdata[key] === undefined ? [value] : [...formdata[key], value];
      }
      formdata[key] = value;
    }
    this.setState((prevState) => {
      return {
        dogsArr: [
          ...prevState.dogsArr,
          {
            ...formdata,
            id: prevState.id + 1,
          },
        ],
      };
    });
    e.target.reset();
    this.handleisFormVisible();
  };
  removeDogById(id) {
    this.setState((prevState, props) => {
      return {
        dogsArr: prevState.dogsArr.filter((val) => val.id !== id),
      };
    });
  }
  render() {
    return (
      <div>
        <NavBar handleisFormVisible={this.handleisFormVisible} />
        <div>
          {this.state.isFormVisible && (
            <Form
              imgurl={this.state.imgurl}
              handleisFormVisible={this.handleisFormVisible}
              handleFormSubmit={this.handleFormSubmit}
            />
          )}
        </div>
        <RecipeApp
          removeDogById={this.removeDogById}
          dogsArr={this.state.dogsArr}
        />
      </div>
    );
  }
}
export default MyRecipeApp;
