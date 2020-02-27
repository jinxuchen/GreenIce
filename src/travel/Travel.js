import React from "react";
import styled from "styled-components";
import { FirstCall } from "../apiCalls/FirstCall";
import { Footer, Header, NavBar, HeaderBar } from "../base";

class Travel extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Header img="https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80">
          API calls
        </Header>
        <NavBar />

        <FirstCall />

        <Footer>See ya latar!</Footer>
      </div>
    );
  }
}

export default Travel;
