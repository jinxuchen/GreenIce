import React from "react";
import styled from "styled-components";
import { GridItem } from "./GridItem";

const DragBoard = styled.div`
  background-color: white;
  height: 50%;
  display: flex;
  user-select: none;
`;

const LoadArea = styled.div.attrs(props => ({
  style: {
    display: props.show ? "flex" : "none",
    backgroundColor: props.cover ? "green" : ""
  }
}))`
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
    this.gridLoadZone = React.createRef();

    this.state = {
      x: 0,
      y: 0,
      move: false,
      mouseX: 0,
      mouseY: 0,
      moveX: 0,
      moveY: 0,
      cover: false,

      loadZoneCoords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },

      itemCoords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },

      itemInitialX: 0,
      itemInitialY: 0
    };
  }

  componentDidMount = () => {
    const rect = this.gridLoadZone.current.getBoundingClientRect();
    const loadZoneCoords = {
      a: { x: rect.left, y: rect.top },
      b: { x: rect.left + rect.width, y: rect.top },
      c: { x: rect.left, y: rect.top + rect.height },
      d: { x: rect.left + rect.width, y: rect.top + rect.height }
    };

    this.setState({ loadZoneCoords });
  };

  handleMouseMove = e => {
    e.preventDefault();
    if (this.state.move) {
      /*get itemInitialX itemInitialY itemCoords from GridItem state*/
      const itemInitialX = this.gridItemRef.current.state.initialX;
      const itemInitialY = this.gridItemRef.current.state.initialY;
      const itemCoords = this.gridItemRef.current.state.coords;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = mouseX - itemInitialX - 75;
      const moveY = mouseY - itemInitialY - 75;
      console.log(itemInitialY);

      this.setState({
        itemCoords,
        itemInitialX,
        itemInitialY,
        mouseX,
        mouseY,
        moveX,
        moveY
      });

      this.checkCover();
    }
  };

  handleMouseDown = () => {
    if (this.props.type === "drag") {
      this.setState({ move: true });
    }
    console.log(this.props.type);
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

  checkCover = () => {
    const i = this.state.itemCoords;
    const l = this.state.loadZoneCoords;

    if (i.a.x <= l.a.x && i.b.x <= l.a.x) {
      this.setState({ cover: false });
      return;
    }
    if (i.a.x >= l.b.x && i.b.x >= l.b.x) {
      this.setState({ cover: false });
      return;
    }
    if (i.a.y <= l.a.y && i.c.y <= l.a.y) {
      this.setState({ cover: false });
      return;
    }
    if (i.a.y >= l.c.y && i.c.y >= l.c.y) {
      this.setState({ cover: false });
      return;
    }

    this.setState({ cover: true });
  };

  render() {
    return (
      <DragBoard onMouseMove={this.handleMouseMove}>
        <GridItem
          type={this.props.type}
          name={this.props.name}
          moveX={this.state.moveX}
          moveY={this.state.moveY}
          ref={this.gridItemRef}
          onMouseUp={this.handleMouseUp}
          onMouseDown={this.handleMouseDown}
        />

        <LoadArea
          show={this.props.showLoadArea}
          onDragEnter={this.handleDragEnter}
          onDragLeave={this.handleDragLeave}
          onDragOver={this.handleDragOver}
          ref={this.gridLoadZone}
          cover={this.state.cover}
        >
          Loading Zone
        </LoadArea>
      </DragBoard>
    );
  }
}
