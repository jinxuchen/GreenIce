import React from "react";
import styled from "styled-components";
import { GridItem } from "./GridItem";

const DragBoard = styled.div`
  background-color: white;
  height: 50%;
  display: flex;
  user-select: none;
`;

const LoadArea = styled.div`
  display: ${props => (props.show === true ? "flex" : "none")};

  justify-content: center;
  align-items: center;
  color: black;
  opacity: 0.7;
  font-size: 40px;
  z-index: 1;

  margin-left: 30px;
  width: 300px;
  height: 200px;
  border: 3px dashed black;
`;

const DragItem = styled.div.attrs(props => ({
  style: {
    transform: "translate(" + props.x + "px," + props.y + "px" + ")",
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

export class Drag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      move: false,
      currentX: 0,
      currentY: 0
    };
  }

  handleMouseMove = e => {
    //item should move with mouse

    if (this.state.move) {
      const x = e.clientX;
      const y = e.clientY;
      this.setState({ x, y });
    }
  };

  handleClick = () => {
    if (this.props.type === "click") {
      if (this.state.move) {
        this.setState({ move: false });
      } else {
        this.setState({ move: true });
      }
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

  handleDragEnter = e => {
    e.target.style.color = "red";
    console.log(e.target.style);
  };

  handleDragOver = e => {
    e.target.style.color = "red";
    console.log(e.target.style);
  };

  render() {
    return (
      <DragBoard onMouseMove={this.handleMouseMove}>
        <GridItem
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          x={this.state.x}
          y={this.state.y}
          move={this.state.move}
          type={this.props.type}
          name={this.props.name}
          currentX={this.state.currentX}
          currentY={this.state.currentY}
          onMouseMove={this.handleMouseMove}
        />

        <LoadArea
          show={this.props.showLoadArea}
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          onDragOver={this.handleDragOver}
        >
          Loading Zone
        </LoadArea>
      </DragBoard>
    );
  }
}
