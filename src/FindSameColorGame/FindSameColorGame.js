import React from "react";
import ColorBoxes from "./ColorBoxes";
import "./FindSameColorGame.css";

class FindSameColorGame extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      colorBoxes: [
        {
          id: 1,
          backgroundColor: "red",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 2,
          backgroundColor: "red",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 3,
          backgroundColor: "green",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 4,
          backgroundColor: "green",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 5,
          backgroundColor: "blue",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 6,
          backgroundColor: "blue",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 7,
          backgroundColor: "yellow",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 8,
          backgroundColor: "yellow",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 9,
          backgroundColor: "pink",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 10,
          backgroundColor: "pink",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 11,
          backgroundColor: "khaki",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 12,
          backgroundColor: "khaki",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 13,
          backgroundColor: "aqua",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 14,
          backgroundColor: "aqua",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 15,
          backgroundColor: "chartreuse",
          visible: false,
          matchedTwo: undefined,
        },
        {
          id: 16,
          backgroundColor: "chartreuse",
          visible: false,
          matchedTwo: undefined,
        },
      ],
      tarckingOfBoxes: {
        id: 0,
        match: 0,
        matchedBoxes: 0,
        count: 0,
      },
    };
    this.state = this.initialState;
  }

  matchedFully = (id) => {
    this.setState((prevState) => {
      return {
        colorBoxes: prevState.colorBoxes.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              matchedTwo: true,
            };
          }
          return obj;
        }),
      };
    });
  };

  SetBackgroundColorTrueForSomeTime = (id) => {
    this.setState((prevState) => {
      return {
        colorBoxes: prevState.colorBoxes.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              visible: true,
            };
          }
          return obj;
        }),
      };
    });
  };
  RemoveBackgroundColorTrueForSomeTime = (id) => {
    this.setState((prevState) => {
      return {
        colorBoxes: prevState.colorBoxes.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              visible: true,
            };
          }
          return obj;
        }),
      };
    });
  };

  SetBackgroundColorTrue = (id) => {
    this.setState((prevState) => {
      return {
        colorBoxes: prevState.colorBoxes.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              visible: true,
              matchedTwo: true,
            };
          }
          return obj;
        }),
        tarckingOfBoxes: {
          ...prevState.tarckingOfBoxes,
          match: 1,
          id,
        },
      };
    });
  };

  removeMatchedTwo = (id) => {
    this.setState((prevState) => {
      return {
        colorBoxes: prevState.colorBoxes.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              visible: false,
              matchedTwo: false,
            };
          }
          return obj;
        }),
        tarckingOfBoxes: {
          ...prevState.tarckingOfBoxes,
          match: 0,
          id: 0,
        },
      };
    });
  };

  handleBoxesOnClick = (id, backgroundColor) => {
    // console.log(id);
    // const changeVisible = this.state.colorBoxes((obj) => obj.id === id);
    let getCurrentTestingBoxes = this.state.colorBoxes.find(
      (obj) => obj.id === id
    );

    if (!getCurrentTestingBoxes.matchedTwo) {
      if (this.state.tarckingOfBoxes.match === 0) {
        this.SetBackgroundColorTrue(id);
        console.log(id);
      } else if (this.state.tarckingOfBoxes.match === 1) {
        // this.SetBackgroundColorTrueForSomeTime(id);
        let getVisibleBackgroundObj = this.state.colorBoxes.find(
          (obj) => obj.id === this.state.tarckingOfBoxes.id
        );
        let getCurrentTestingBoxes = this.state.colorBoxes.find(
          (obj) => obj.id === id
        );
        if (
          getVisibleBackgroundObj.backgroundColor ===
          getCurrentTestingBoxes.backgroundColor
        ) {
          this.SetBackgroundColorTrue(id);
          this.setState((prevState) => {
            return {
              tarckingOfBoxes: {
                ...prevState.tarckingOfBoxes,
                match: 0,
                count: prevState.tarckingOfBoxes.count + 1,
              },
            };
          });
          this.matchedFully(getVisibleBackgroundObj.id);
          this.matchedFully(getCurrentTestingBoxes.id);
        } else {
          this.removeMatchedTwo(this.state.tarckingOfBoxes.id);
          this.SetBackgroundColorTrue(id);
          // this.RemoveBackgroundColorTrueForSomeTime(id);
        }
      }
    }
  };
  componentDidMount() {
    this.setState((prevState, props) => {
      return {
        colorBoxes: prevState.colorBoxes.sort(() => Math.random() - 0.5),
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.tarckingOfBoxes.count === 8 ? (
          <div>
            <h1> Game is Completed</h1>
          </div>
        ) : (
          <ColorBoxes
            handleBoxesOnClick={this.handleBoxesOnClick}
            colorBoxes={this.state.colorBoxes}
          />
        )}
        <h1
          style={{
            // backgroundColor: "red",
            textAlign: "right",
            fontSize: "3rem",
          }}
          onClick={() => {
            this.setState(this.initialState);
          }}
        >
          {" "}
          Reset{" "}
        </h1>
      </div>
    );
  }
}

export default FindSameColorGame;
