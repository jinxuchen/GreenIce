import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { updateMoveXY } from "./actions";
import { findIndex } from "lodash";

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
      cover: false,
      loadZoneCoords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
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

    if (this.props.move) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const moveX = mouseX - this.props.initialX - 75;
      const moveY = mouseY - this.props.initialY - 75;

      this.checkCover();

      this.props.onUpdateMoveXY(this.props.id, moveX, moveY);
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
        <GridItem id="1" type={this.props.type} name={this.props.name} />

        <LoadArea
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
  let coords;
  let initialX;
  let initialY;
  let index;
  let moveItem;
  let move = false;
  let id;

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
    data: state.data,
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
