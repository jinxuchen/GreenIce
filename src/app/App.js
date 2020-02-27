import React from "react";

import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { theme } from "./theme";

import Home from "./Home";
import Game from "../game/Game";
import Travel from "../travel/Travel";
import About from "../about/About";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Redirect to="/home" />
            <Link to="/about" />
            <Link to="/travel" />
            <Link to="/game" />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/travel">
                <Travel />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
