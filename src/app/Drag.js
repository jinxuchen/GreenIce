import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { addOne, addItem } from "./actions";

import GridItem from "./GridItem";

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

    this.gridItem1 = React.createRef();
    this.gridItem2 = React.createRef();
    this.gridLoadZone = React.createRef();

    this.state = {
      mouseX: 0,
      mouseY: 0,

      cover: false,
      loadZoneCoords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },

      item: {
        move: false,
        moveX: 0,
        moveY: 0,
        moveX: 0,
        moveY: 0,
        initialX: 0,
        initialY: 0,
        coords: {
          a: { x: 0, y: 0 },
          b: { x: 0, y: 0 },
          c: { x: 0, y: 0 },
          d: { x: 0, y: 0 }
        }
      }
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
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = mouseX - this.props.initialX - 75;
      const moveY = mouseY - this.props.initialY - 75;
      this.setState({ item: { moveX, moveY } });
      this.checkCover();
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

  checkCover = () => {
    const i = this.props.coords;
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
          id="1"
          type={this.props.type}
          name={this.props.name}
          moveX={this.state.item.moveX}
          moveY={this.state.item.moveY}
          onMouseUp={this.handleMouseUp}
          onMouseDown={this.handleMouseDown}
          move={this.state.move}
        />

        <LoadArea
          onClick={() => this.props.onAddOne(21)}
          show={this.props.showLoadArea}
          ref={this.gridLoadZone}
          cover={this.state.cover}
        >
          {this.props.data}
        </LoadArea>
      </DragBoard>
    );
  }
}

export const mapStateToProps = state => {
  const item = state.item[0];
  const coords = item.coords;
  const initialX = item.initialX;
  const initialY = item.initialY;

  return {
    data: state.data,
    coords,
    initialX,
    initialY
  };
};

export const mapDispatchToProps = dispatch => ({
  onAddOne: value => {
    dispatch(addOne(value));
  },
  onAddItem: itemInfo => {
    dispatch(addItem(itemInfo));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drag);
