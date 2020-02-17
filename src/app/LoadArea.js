import React from "react";
import styled from "styled-components";

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
  }

  render() {
    return <StyledLoadArea cover={this.props.cover}>Load Area</StyledLoadArea>;
  }
}
