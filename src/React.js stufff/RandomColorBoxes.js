import React from "react";
var randomColor = require("randomcolor");

const ColorBoxes = ({ color, count }) => {
  // debugger;
  return (
    <div
      style={{
        background: color,
        width: "100%",
        height: "11rem",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
      }}
      className={`ColorBoxes${count}`}
    >
      harish {count}
    </div>
  );
};

class RandomColorBoxes extends React.Component {
  constructor(props) {
    super(props);
    const colors = Array.from(Array(30)).map((val, i) => {
      return randomColor();
    });
    this.state = {
      random: 0,
      colors,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        random: Math.floor(Math.random() * 30),
      });
    }, 300);
  }
  render() {
    // let random = Math.floor(Math.random() * 30);
    return (
      <div>
        <h1> Hello world</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(10rem, 1fr))",
            gap: "1rem",
          }}
        >
          {this.state.colors.map((color, i) => {
            if (i === this.state.random) {
              return <ColorBoxes key={i} color={randomColor()} count={i} />;
            }
            return <ColorBoxes key={i} color={color} count={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default RandomColorBoxes;
