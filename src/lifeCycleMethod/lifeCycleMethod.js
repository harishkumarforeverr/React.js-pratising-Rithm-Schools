import React from "react";
import axios from "axios";
import "./LifeCycleMethod.scss";
class LifeCycleMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrinfo: [],
      randomFlagIndex: undefined,
      finalRender: undefined,
    };
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        let randomFlag = data.sort(() => Math.random() - 0.5).slice(0, 3);
        let randomFlagIndex = Math.floor(Math.random() * 3);
        this.setState({
          arrinfo: randomFlag,
          randomFlagIndex,
        });
      });
  }
  // componentWillMount() {

  // }
  componentDidUpdate() {
    // const url = "https://restcountries.com/v3.1/all";
    // fetch(url)
    //   .then((data) => data.json())
    //   .then((data) => {
    //     let randomFlag = data.sort(() => Math.random() - 0.5).slice(0, 3);
    //     let randomFlagIndex = Math.floor(Math.random() * 3);
    //     this.setState({
    //       arrinfo: randomFlag,
    //       randomFlagIndex,
    //     });
    //   });
  }
  handleOnClick = (e) => {
    if (
      this.state.arrinfo[this.state.randomFlagIndex].name.official ===
      e.target.value
    ) {
      console.log("Roght answer");
      this.setState({
        finalRender: `Wow Great , Your Anser is Right and Answer is : ${e.target.value}`,
      });
    } else {
      this.setState({
        finalRender: `Sorry, your Anser is Wrong and Answer is : ${e.target.value} `,
      });
    }
  };
  render() {
    let view = "Loading";
    if (this.state.arrinfo.length >= 3) {
      view = this.state.arrinfo.map((Country, i) => {
        // console.log(Country);
        // console.log(Country.flags.svg, Country.name.official);
        return {
          flag: Country.flags.svg,
          name: Country.name.official,
        };
      });
    }
    return (
      <div className="LifeCycleMethod">
        <div className="LifeCycleMethod__content">
          {this.state.finalRender === undefined ? (
            <div>
              <div className="LifeCycleMethod__content__flagImg">
                {view == "Loading" ? (
                  view
                ) : (
                  <div>
                    <h1
                      style={{
                        color: "blue",
                      }}
                    >
                      {" "}
                      Guess the Flag Name 😀😀😀{" "}
                    </h1>
                    <img
                      style={
                        {
                          // width: "100%",
                        }
                      }
                      src={
                        this.state.arrinfo[this.state.randomFlagIndex].flags.svg
                      }
                      alt="flag"
                    />
                  </div>
                )}
              </div>

              <div className="LifeCycleMethod__content__countryName">
                <div>
                  {view == "Loading"
                    ? view
                    : view.map((obj, i) => {
                        return (
                          <div key={i}>
                            <input
                              onClick={this.handleOnClick}
                              type="checkbox"
                              name={`scales${i}`}
                              value={obj.name}
                            />
                            <label htmlFor={`scales${i}`}>{obj.name}</label>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1> {this.state.finalRender} </h1>
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                {" "}
                Play Again{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LifeCycleMethod;
