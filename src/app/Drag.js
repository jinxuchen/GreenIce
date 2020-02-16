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

export class Drag extends React.Component {
  constructor(props) {
    super(props);

    this.gridItemRef = React.createRef();

    this.state = {
      x: 0,
      y: 0,
      move: false,
      mouseX: 0,
      mouseY: 0
    };
  }

  componentDidUpdate = () => {
    const itemCoords = this.gridItemRef.current.offsetLeft;
    console.log(itemCoords);
  };

  handleMouseMove = e => {
    e.preventDefault();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    this.setState({ mouseX, mouseY });
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
          type={this.props.type}
          name={this.props.name}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
          ref={this.gridItemRef}
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
