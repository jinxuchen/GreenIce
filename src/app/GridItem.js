import React from "react";
import styled from "styled-components";

const StyledItem = styled.div.attrs(props => ({
  style: {
    transform: "translate(" + props.moveX + "px," + props.moveY + "px" + ")",
    opacity: props.move ? "0.8" : "1",
    zIndex: props.move ? "200" : "100",
    backgroundColor: props.type === "drag" ? "lightblue" : "lightgreen"
  }
}))`
  display: flex;
  justify-content: center;
  align-items: start;
  color: white;
  font-size: 35px;

  height: 150px;
  width: 150px;

  cursor: pointer;
  position: relative;

  span {
    color: black;
    font-size: 30px;
  }
`;

export class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.gridItem = React.createRef();

    this.state = {
      coords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },
      move: false,
      moveX: 0,
      moveY: 0
    };
  }

  handleMouseMove = e => {
    e.preventDefault();
    if (this.state.move) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const initialX = this.gridItem.current.offsetLeft;
      const initialY = this.gridItem.current.offsetTop;

      const rect = this.gridItem.current.getBoundingClientRect();

      const coords = {
        a: { x: rect.left, y: rect.top },
        b: { x: rect.left + rect.width, y: rect.top },
        c: { x: rect.left, y: rect.top + rect.height },
        d: { x: rect.left + rect.width, y: rect.top + rect.height }
      };

      /*moving algrithmn*/
      const moveX = mouseX - initialX - 75;
      const moveY = mouseY - initialY - 75;

      this.setState({ moveX, moveY, coords });
    }
  };

  handleMouseDown = () => {
    if (this.props.type === "drag") {
      this.setState({ move: true });
    }
  };

  handleMouseUp = () => {
    if (this.props.type === "drag") {
      this.setState({ move: false });
    }
  };

  render() {
    return (
      <StyledItem
        ref={this.gridItem}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        moveX={this.state.moveX}
        moveY={this.state.moveY}
        move={this.state.move}
        type={this.props.type}
      >
        {this.props.name}

        <span>
          {Math.round(this.props.currentX)}
          {", "}
          {Math.round(this.props.currentY)}
        </span>
      </StyledItem>
    );
  }
}
