import React from "react";
import Drag from "../app/Drag";
import { Footer, Header, NavBar, HeaderBar } from "../base";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Header
          img="https://images.unsplash.com/photo-1509280951623-4a17506e3eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80
"
        >
          Treasure Island
        </Header>
        <NavBar />
        <Drag name="drag me!" type="drag" />

        <Footer>See ya latar!</Footer>
      </div>
    );
  }
}

export default Home;
