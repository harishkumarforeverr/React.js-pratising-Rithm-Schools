import React from "react";
import "./style.css";

class Props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: [
        {
          instr: "harish",
          Hobby: ["coding", "movies"],
        },
        {
          instr: "satish",
          Hobby: ["running", "army"],
        },
        {
          instr: "neha",
          Hobby: ["sleeping", "cooking"],
        },
      ],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState) => {
        const randomInstructor =
          prevState.instructor[Math.floor(Math.random() * 3)];
        const randomHobby =
          randomInstructor.Hobby[Math.floor(Math.random() * 2)];
        return {
          ...prevState,
          instructor: prevState.instructor.map((obj) => {
            if (obj.instr === randomInstructor.instr) {
              return {
                ...obj,
                Hobby: obj.Hobby.filter((val) => val !== randomHobby),
              };
            }
            return obj;
          }),
        };
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        <ul className="grid">
          {this.state.instructor.map((obj, i) => {
            return (
              <li key={i}>
                <h1>instructor : {obj.instr} </h1>
                <h2> Hobby : {obj.Hobby.map((val) => val + " ")} </h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Props;
