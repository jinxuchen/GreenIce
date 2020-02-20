import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateItem, addOne, addItem } from "./actions";
import { chunk } from "lodash";

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
    this.props.onAddItem(this.state);
  };

  handleMouseMove = e => {
    if (this.props.move) {
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
      this.props.onUpdateItem(this.state);
    }
  };

  handleClick = () => {
    this.props.onAddItem(this.state);
    console.log("this.props.item");
    console.log(this.props.item);
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
        onMouseUp={this.props.onMouseUp}
        onMouseDown={this.props.onMouseDown}
        move={this.props.move}
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

export const mapStateToProps = state => ({
  data: state.data,
  item: state.item
});

export const mapDispatchToProps = dispatch => ({
  onAddItem: itemInfo => {
    dispatch(addItem(itemInfo));
  },

  onUpdateItem: itemInfo => {
    dispatch(updateItem(itemInfo));
  },
  onAddOne: value => {
    dispatch(addOne(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
