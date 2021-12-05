import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingrediants: [
        <input
          style={{
            marginBottom: "0.3rem",
          }}
          type="text"
          name="ingrediants"
        />,
      ],
    };
  }
  addNewInputOfingrediants = () => {
    this.setState((prevState) => {
      return {
        ingrediants: [
          ...prevState.ingrediants,
          <input
            style={{
              marginBottom: "0.3rem",
            }}
            type="text"
            name="ingrediants"
          />,
        ],
      };
    });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleFormSubmit}>
          <label> Dog name </label>
          <input required type="text" name="title" />
          <label> Hobbies</label>
          <ol>
            {this.state.ingrediants.map((val, i) => (
              <li
                style={{
                  fontSize: "1.6rem",
                }}
                key={i}
              >
                {" "}
                {val}{" "}
              </li>
            ))}
          </ol>
          <button
            type="button"
            style={{
              margin: "0 0 2rem auto",
              display: "block",
            }}
            onClick={this.addNewInputOfingrediants}
          >
            {" "}
            Add new Hobby{" "}
          </button>{" "}
          <label> img url() </label>
          <input
            type="url"
            name="img"
            value={this.props.imgurl}
            onChange={() => {}}
          />
          <label> Dog owner</label>
          <input type="text" name="instr" />
          <div className="formbtn">
            <button type="submit">Submit</button>
            <button type="button" onClick={this.props.handleisFormVisible}>
              close
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
