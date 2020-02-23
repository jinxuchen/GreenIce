import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { findIndex } from "lodash";

const StyledLoadArea = styled.div.attrs(props => ({
  style: {
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

export class LoadArea extends React.Component {
  constructor(props) {
    super(props);
    this.gridLoadZone = React.createRef();

    this.state = {
      coords: {}
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
  };

  render() {
    return (
      <StyledLoadArea ref={this.gridLoadZone} cover={this.props.cover}>
        Load Area
      </StyledLoadArea>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadArea);
