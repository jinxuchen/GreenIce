import React from "react";
import styled from "styled-components";

const DragBoard = styled.div`
  background-color: white;
  height: 50%;
`;

const DragItem = styled.div.attrs(props => ({
  style: {
    transform: "translate(" + props.x + "px," + props.y + "px" + ")",
    opacity: props.move ? "0.5" : "1",
    backgroundColor: props.type === "drag" ? "lightblue" : "lightgreen"
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;

  height: 150px;
  width: 150px;

  cursor: pointer;
  position: relative;
`;

export class Drag extends React.Component {
  constructor(props) {
    super(props);

    this.dragMe = React.createRef();
    this.state = {
      moveX: 0,
      moveY: 0,
      move: false
    };
  }

  getMouseCoords = e => {
    e.preventDefault();

    const x = e.clientX;
    const y = e.clientY;

    this.setState({ x, y });
    console.log("(", this.state.x, ",", this.state.y, ")");
  };

  handleMouseMove = e => {
    //item should move with mouse

    if (this.state.move) {
      const x = e.clientX;
      const y = e.clientY;

      const offsetLeft = this.dragMe.current.offsetLeft;
      const offsetTop = this.dragMe.current.offsetTop;

      /*
     for setting value for left and bottom
      const moveX = offsetLeft - x + this.state.moveX + 75;
      const moveY = offsetTop - y + this.state.moveY + 75;
      */

      const moveX = x - offsetLeft - 75;
      const moveY = y - offsetTop - 75;

      /*
      console.log("mouse: ", x, y);
      console.log("object offset: ", offsetLeft, offsetTop);
      console.log("move: ", moveX, moveY);
      */
      this.setState({ moveX, moveY });
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

  render() {
    return (
      <DragBoard onMouseMove={this.handleMouseMove}>
        <DragItem
          ref={this.dragMe}
          /*use ref to get this.dragMe.current.offsetTop */
          onClick={this.handleClick}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          x={this.state.moveX}
          y={this.state.moveY}
          move={this.state.move}
          type={this.props.type}
        >
          {this.props.name}
        </DragItem>
      </DragBoard>
    );
  }
}
