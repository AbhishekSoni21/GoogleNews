import React, { Component } from "react";

class NewBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      viewMore: "View more"
    };
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
      viewMore: this.state.active ? "View more" : ""
    });
  };
  render() {
    console.log("this.props", this.props.index);

    return (
      <div>
        <div key={this.props.index}>
          <h3>{this.props.news.Headline}</h3>
          <ul className="headline-detail-wrapper">
            <li className="agency-wrapper">{this.props.news.Agency}</li>
            <li className="time-wrapper">{this.props.news.Time}</li>
          </ul>

          {this.props.news["Sub Heading"].length > 0
            ? this.props.news["Sub Heading"].map((data, index) => (
                <div
                  className={
                    index === 0 || this.state.active
                      ? "subHeading-wrapper"
                      : "hidden"
                  }
                >
                  <ul key={index}>
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
                </div>
              ))
            : ""}
          {this.props.news["Sub Heading"].length !== 0 ? (
            <div
              className="button-container"
              onClick={() => this.handleClick(this.props.index)}
            >
              <div className="button-wrapper">{this.state.viewMore}</div>
              {this.state.active ? (
                <img src={"./image/up-arrow.png"} alt="up-arrow img" />
              ) : (
                <img src={"./image/down-arrow.png"} alt="down-arrow img" />
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default NewBody;
