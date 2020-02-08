import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const moveAround = keyframes`
  0%{
  }
  25%{
    transform: translate(1000px);
  }
  50%{
    transform: translate(1000px, 500px);
  }
  75%{
    transform: translate(0, 500px);
  }
  100%{
    transform: translate(0, 0);
  }
`;

const moveAlong = keyframes`
  0%{
    transform: translate(-70px, -50px);
  }
  25%{
    transform: translate(750px, -50px);
  }
  50%{
    transform: translate(750px, 445px);
  }
  75%{
    transform: translate(-70px,  445px);
  }
  100%{
    transform: translate(-70px, -50px);
  }
`;

const Field = styled.div`
  &: active {
    opacity: 0.5;
  }

  margin-top: 50px;
  margin-left: 70px;
  background-color: lightblue;
  width: 50%;
  height: 505px;
  color: lightgreen;
  cursor: grab;
`;

const Image = styled.img`
  display: flex;
  height: 100px;
  width: 140px;
  border: 5px solid #544014;
  animation: ${moveAlong} 4s infinite;
  user-drag: none;

  animation-play-state: ${props => (props.animationOn ? "runinng" : "paused")};
`;

export class WalktheDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationOn: false
    };
  }

  ToggleAnimation = () => {
    this.setState({
      animationOn: this.state.animationOn ? false : true
    });
    console.log(this.state.animationOn);
  };

  render() {
    return (
      <Field onClick={this.ToggleAnimation}>
        <Image
          onClick={this.ToggleAnimation}
          src="https://img.huffingtonpost.com/asset/5d77bb332300001c05512ad8.jpeg?cache=3GBrP7GYfU&ops=scalefit_720_noupscale&format=webp"
          animationOn={this.state.animationOn}
        />
      </Field>
    );
  }
}
