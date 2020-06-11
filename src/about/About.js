import React from "react";
import styled from "styled-components";
import { FirstCall } from "../apiCalls/FirstCall";
import { Footer, Header, NavBar, HeaderBar } from "../base";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 1
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count2 + 1
    });
  };

  render() {
    return (
      <div>
        <HeaderBar />
        <Header img="img/course_schedule.png">About Me!</Header>
        <NavBar />

        <img src="img/auska_pic.jpg" />

        <button
          style={{ height: "100px", width: "100px", backgroundColor: "red" }}
          onClick={this.handleClick}
        >
          click me to change state
        </button>
        <div>{this.state.count}</div>
        <div>{this.state.count2}</div>

        <Footer>See ya latar!</Footer>
      </div>
    );
  }
}

export default About;
