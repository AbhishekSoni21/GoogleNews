import React from "react";
import "./App.css";
import NewBody from "./NewBody";
class App extends React.Component {
  state = {
    data: ""
  };

  fetchData = () => {
    fetch("./json/news.json")
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            data
          },
          console.log("data", data)
        )
      );
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetchData();
    }, 3000);
  }

  generateNewBody = () =>
    this.state.data.map((news, index) => (
      <div className="headline-body" key={index}>
        <NewBody news={news} index={index} />
      </div>
    ));

  render() {
    return (
      <div className="news-container">
        <h2 className="headline-title">Headlines</h2>
        {this.state.data ? this.generateNewBody() : "Loading Data....."}
      </div>
    );
  }
}

export default App;
