import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    data: "",
    active: true
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

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  };

  generateNewBody = () =>
    this.state.data.map((news, index) => (
      <div className="headline-body" key={index}>
        <h3>{news.Headline}</h3>
        <ul className="headline-detail-wrapper">
          <li className="agency-wrapper">{news.Agency}</li>
          <li className="time-wrapper">{news.Time}</li>
        </ul>
        <div className={this.state.active ? "subHeading-wrapper" : "hidden"}>
          {news["Sub Heading"].map((data, index) => (
            <ul>
              <li>
                <h4 className="subheading">{data.Headline}</h4>
                <ul className="subheadline-detail-wrapper">
                  <li className="agency-wrapper">{data.Agency}</li>
                  <li type="disc" className="time-wrapper">
                    {data.Time}
                  </li>
                </ul>
              </li>
            </ul>
          ))}
        </div>
        <div
          className="button-container"
          onClick={() => this.handleClick(index)}
        >
          <div className="button-wrapper">{"View more"}</div>
          <img src={"./image/down-arrow.png"} />
        </div>
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
