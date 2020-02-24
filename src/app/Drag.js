import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { updateMoveXY, updateCover } from "./actions";
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

    if (this.props.move) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = mouseX - this.props.initialX - 75;
      const moveY = mouseY - this.props.initialY - 75;

      const width = this.props.gridPieces[0].length;
      const height = this.props.gridPieces.length;

      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          const gridPiece = this.props.gridPieces[i][j];
          this.checkCover(gridPiece, i, j);
        }
      }

      this.props.onUpdateMoveXY(this.props.id, moveX, moveY);
    }
  };

  checkCover = (gridPiece, x, y) => {
    const i = this.props.coords;
    const l = gridPiece;

    if (i.a.x <= l.a.x && i.b.x <= l.a.x) {
      this.props.onUpdateCover(false, x, y);
      return;
    }
    if (i.a.x >= l.b.x && i.b.x >= l.b.x) {
      this.props.onUpdateCover(false, x, y);
      return;
    }
    if (i.a.y <= l.a.y && i.c.y <= l.a.y) {
      this.props.onUpdateCover(false, x, y);
      return;
    }
    if (i.a.y >= l.c.y && i.c.y >= l.c.y) {
      this.props.onUpdateCover(false, x, y);
      return;
    }

    this.props.onUpdateCover(true, x, y);
  };

  render() {
    return (
      <DragBoard onMouseMove={this.handleMouseMove}>
        <GridItem id="1" type={this.props.type} name={this.props.name} />
        <GridItem id="2" type={this.props.type} name={this.props.name} />

        <LoadArea ref={this.gridLoadZone} gridMap={this.props.gridMap}>
          {this.props.data}
        </LoadArea>
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

  const gridPiecesHeight = gridPieces.length;
  const gridPiecesWidth = gridPieces[0].length;

  let gridMap = [];

  for (let i = 0; i < gridPiecesHeight; i++) {
    gridMap.push([]);
    for (let j = 0; j < gridPiecesWidth; j++) {
      const cover = gridPieces[i][j].cover;
      gridMap[i][j] = cover;
    }
  }

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

  return {
    gridPieces,
    coords,
    initialX,
    initialY,
    move,
    id,
    gridMap
  };
};

export const mapDispatchToProps = dispatch => ({
  onUpdateMoveXY: (id, moveX, moveY) => {
    dispatch(updateMoveXY(id, moveX, moveY));
  },

  onUpdateCover: (cover, x, y) => {
    dispatch(updateCover(cover, x, y));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drag);
