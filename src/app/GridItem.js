import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateMove, updateCoords, addOne, addItem } from "./actions";
import { findIndex } from "lodash";

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
      id: props.id,
      coords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },
      move: false,
      moveX: 0,
      moveY: 0,
      initialX: 0,
      initialY: 0
    };
  }

  componentDidMount = () => {
    const initialX = this.gridItem.current.offsetLeft;
    const initialY = this.gridItem.current.offsetTop;

    this.setState({ initialX, initialY });
    this.props.onAddItem({ ...this.state, initialX, initialY });
  };

  handleMouseMove = e => {
    if (this.state.move) {
      e.preventDefault();

      const rect = this.gridItem.current.getBoundingClientRect();
      const coords = {
        a: { x: rect.left, y: rect.top },
        b: { x: rect.left + rect.width, y: rect.top },
        c: { x: rect.left, y: rect.top + rect.height },
        d: { x: rect.left + rect.width, y: rect.top + rect.height }
      };

      this.setState({ coords });

      //pass item json to store
      this.props.onUpdateCoords(this.state.id, this.state.coords);
    }
  };

  handleMouseDown = () => {
    if (this.props.type === "drag") {
      this.setState({ move: true });
      this.props.onUpdateMove(this.state.id, true);
    }
  };

  handleMouseUp = () => {
    if (this.props.type === "drag") {
      this.setState({ move: false });
      this.props.onUpdateMove(this.state.id, false);
    }
  };

  handleClick = () => {
    this.props.onAddItem(this.state);
  };

  render() {
    return (
      <StyledItem
        id={this.props.id}
        type={this.props.type}
        ref={this.gridItem}
        onMouseMove={this.handleMouseMove}
        moveX={this.props.moveX}
        moveY={this.props.moveY}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        move={this.state.move}
      >
        {this.props.name}

        <button onClick={this.handleClick}>Add Item</button>
        {Math.round(this.state.coords.a.x)}
        {", "}
        {Math.round(this.state.coords.a.y)}
      </StyledItem>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  let index;
  let targetItem;
  let moveX;
  let moveY;

  index = findIndex(state.item, { id: ownProps.id });
  if (index !== -1) {
    targetItem = state.item[index];

    moveX = targetItem.moveX;
    moveY = targetItem.moveY;
  }

  return {
    data: state.data,
    item: state.item,
    moveX,
    moveY
  };
};

export const mapDispatchToProps = dispatch => ({
  onAddItem: itemInfo => {
    dispatch(addItem(itemInfo));
  },

  onUpdateMove: (id, move) => {
    dispatch(updateMove(id, move));
  },

  onUpdateCoords: (id, coords) => {
    dispatch(updateCoords(id, coords));
  },

  onAddOne: value => {
    dispatch(addOne(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
