import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { findIndex } from "lodash";
import { addGridPiece } from "./actions";

const StyledGridPiece = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.cover ? "green" : ""
  }
}))`
  color: black;
  opacity: 0.7;
  z-index: 1;

  width: 70px;
  height: 70px;
  border: 0.1px solid grey;

  &:hover {
    background-color: grey;
  }
`;

export class GridPiece extends React.Component {
  constructor(props) {
    super(props);
    this.gridLoadZone = React.createRef();

    this.state = {
      coords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      },
      hover: false,
      cover: false
    };
  }

  componentDidMount = () => {
    const rect = this.gridLoadZone.current.getBoundingClientRect();
    const coords = {
      a: { x: rect.left, y: rect.top },
      b: { x: rect.left + rect.width, y: rect.top },
      c: { x: rect.left, y: rect.top + rect.height },
      d: { x: rect.left + rect.width, y: rect.top + rect.height }
    };

    this.setState({ coords });
    this.props.onAddGridPiece(
      { coords },
      this.props.maxWidth,
      this.props.maxHeight
    );
  };

  handleMouseOver = () => {
    this.setState({ hover: true });
  };

  render() {
    return (
      <StyledGridPiece
        ref={this.gridLoadZone}
        cover={this.props.cover}
        onMouseOver={this.handleMouseOver}
        hover={this.state.hover}
        maxWidth={this.props.maxWidth}
        maxHeight={this.props.maxHeight}
      >
        ({Math.round(this.state.coords.a.x)}
        {", "}
        {Math.round(this.state.coords.a.y)})
      </StyledGridPiece>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let coords;
  let index;
  let moveItem;
  let move = false;
  let id;
  let loadAreaCoords;
  let gridMap;

  gridMap = state.grid;

  loadAreaCoords = Object.assign({}, state.loadArea.coords);

  //get moving item index
  index = findIndex(state.item, { move: true });
  moveItem = state.item[index];

  if (index !== -1) {
    coords = moveItem.coords;
  }

  return {
    loadAreaCoords,
    coords,
    gridMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddGridPiece: ({ coords }, maxWidth, maxHeight) => {
      dispatch(addGridPiece({ coords }, maxWidth, maxHeight));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridPiece);
