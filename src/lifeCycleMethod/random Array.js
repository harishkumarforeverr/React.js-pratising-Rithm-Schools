import React from "react";

class LifeCycleMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrinfo: [],
    };
  }
  componentWillMount() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const urlInfo = "https://hacker-news.firebaseio.com/v0/item/";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          arrinfo: data,
        });
      });
  }
  render() {
    let views = "Loading";
    if (this.state.arrinfo.length > 400) {
      views = this.state.arrinfo.map((arr, i) => {
        return <li key={i}> {arr}</li>;
      });
    }
    return (
      <div>
        <h1> Array of Infitiet no</h1>
        <ol
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          }}
        >
          {" "}
          {views}
        </ol>
      </div>
    );
  }
}

export default LifeCycleMethod;
