import React, { Component } from "react";
import { map } from "lodash";
import styled from "styled-components";

const StyledImg = styled.img`
  max-height: 600px;
  max-width: 600px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 600px;
  font-family: Andale Mono;
  color: black;
  font-size: 21px;

  background-color: ${props => props.theme.color.khaki};
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-item: center;
`;

const ImageButton = styled.div`
  display: flex;
  flex-direciton: row;
`;

export class FirstCall extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      resCat: [],
      resDog: {},
      imgHeight: "",
      tem: 0
    };
  }

  handleClickCat = () => {
    this._isMounted = true;
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => {
        if (this._isMounted) {
          this.setState({ resCat: data, imgHeight: data[0].height });
        }
      })
      .catch(console.log);
  };

  handleClickCatDog = () => {
    this._isMounted = true;
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        if (this._isMounted) {
          console.log(data);

          this.setState({ resDog: data });
        }
      })
      .catch(console.log);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const catImg = map(this.state.resCat, item => (
      <StyledImg
        src={item.url}
        key={item.id}
        height={this.state.imgHeight}
 
        onClick={this.handleClickCat}
 
      />
    ));
    const dogImg = (
      <StyledImg
        src={this.state.resDog.message}
        height={this.state.imgHeight}
        onClick={this.handleClickCatDog}
      />
    );

    return (
      <Board>
        <ImageButton>
          <div>{catImg}</div>
          <StyledButton
            height={this.state.imgHeight}
            onClick={this.handleClickCat}
          >
            Request a cat!
          </StyledButton>
        </ImageButton>
        <ImageButton>
          {dogImg}
          <StyledButton
            height={this.state.imgHeight}
            onClick={this.handleClickCatDog}
          >
            Request a puppy!
          </StyledButton>
        </ImageButton>
      </Board>
    );
  }
}
