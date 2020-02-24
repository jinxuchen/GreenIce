import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { findIndex, map } from "lodash";
import GridPiece from "./GridPiece";
import { addLoadArea } from "./actions";

const StyledLoadArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr 1fr 1fr;
  width: 282px;
  height: 282px;
  border: 3px dashed black;
`;

export class LoadArea extends React.Component {
  constructor(props) {
    super(props);
    this.gridLoadZone = React.createRef();

    this.state = {
      coords: {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 0 },
        c: { x: 0, y: 0 },
        d: { x: 0, y: 0 }
      }
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
    this.props.onAddLoadArea({ coords });
  };

  render() {
    return (
      <StyledLoadArea
        ref={this.gridLoadZone}
        cover={this.props.cover}
        gridMap={this.props.gridMap}
      >
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[0][0].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[0][1].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[0][2].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[0][3].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[1][0].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[1][1].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[1][2].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[1][3].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[2][0].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[2][1].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[2][2].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[2][3].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[3][0].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[3][1].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[3][2].cover : false
          }
        />
        <GridPiece
          maxWidth={4}
          maxHeight={4}
          cover={
            this.props.grid.length > 1 ? this.props.grid[3][3].cover : false
          }
        />
      </StyledLoadArea>
    );
  }
}

const mapStateToProps = state => {
  let grid;

  grid = state.grid;

  return {
    grid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddLoadArea: coords => {
      dispatch(addLoadArea(coords));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadArea);
