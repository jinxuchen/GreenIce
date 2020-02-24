import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { updateMoveXY } from "./actions";
import { findIndex } from "lodash";

import GridItem from "./GridItem";
import LoadArea from "./LoadArea";

const DragBoard = styled.div`
  background-color: white;
  height: 50%;
  display: flex;
  user-select: none;
`;

export class Drag extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseMove = e => {
    e.preventDefault();
    const width = this.props.gridPieces[0];
    const height = this.props.gridPieces.length;

    if (!this.props.move) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = mouseX - this.props.initialX - 75;
      const moveY = mouseY - this.props.initialY - 75;

      const width = this.props.gridPieces[0].length;
      const height = this.props.gridPieces.length;
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          const gridPiece = this.props.gridPieces[i][j];
          this.checkCover(gridPiece);
        }
      }

      this.props.onUpdateMoveXY(this.props.id, moveX, moveY);
    }
  };

  checkCover = gridPiece => {
    const i = this.props.coords;
    const l = gridPiece;

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
        <GridItem id="1" type={this.props.type} name={this.props.name} />

        <LoadArea ref={this.gridLoadZone}>{this.props.data}</LoadArea>
      </DragBoard>
    );
  }
}

export const mapStateToProps = state => {
  let coords = {
    a: { x: 0, y: 0 },
    b: { x: 0, y: 0 },
    c: { x: 0, y: 0 },
    d: { x: 0, y: 0 }
  };
  let gridPieces;
  let initialX;
  let initialY;
  let index;
  let moveItem;
  let move = false;
  let id;

  gridPieces = state.grid;

  //get moving item index
  index = findIndex(state.item, { move: true });
  moveItem = state.item[index];

  if (index !== -1) {
    coords = moveItem.coords;
    initialX = moveItem.initialX;
    initialY = moveItem.initialY;
    move = moveItem.move;
    id = moveItem.id;
  }
  console.log(coords);

  return {
    gridPieces,
    coords,
    initialX,
    initialY,
    move,
    id
  };
};

export const mapDispatchToProps = dispatch => ({
  onUpdateMoveXY: (id, moveX, moveY) => {
    dispatch(updateMoveXY(id, moveX, moveY));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drag);
