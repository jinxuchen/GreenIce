import React, { Component } from "react";
import { map } from "lodash";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: ${props => props.height}px;
  background-color: ${props => props.theme.color.blue};
`;

const Board = styled.div`
  display: flex;
  align-items: center;
`;

export class FirstCall extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      imgHeight: "",
      tem: 0
    };
  }

  handleClick = () => {
    this._isMounted = true;
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => {
        if (this._isMounted) {
          console.log(data);
          console.log(data[0].height);

          this.setState({ items: data, imgHeight: data[0].height });
        }
      })
      .catch(console.log);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const catImg = map(this.state.items, item => (
      <img src={item.url} key={item.id} />
    ));

    return (
      <Board>
        {catImg}
        <StyledButton height={this.state.imgHeight} onClick={this.handleClick}>
          Request a cat!
        </StyledButton>
      </Board>
    );
  }
}
