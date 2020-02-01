import React from "react";
import styled from "styled-components";

export const StyledFooterBar = styled.div`
  height: 145px;
  background-color: white;
  color: white;

  position: fix;
  display: flex;
  justify-conten: center;
  align-items: center;
`;

const BarItem = styled.div`
  color: white;
  height: 15px;
  width: 15px;
`;

export class FooterBar extends React.Component {
  render() {
    return (
      <StyledFooterBar>
        <div>{this.props.child}</div>
      </StyledFooterBar>
    );
  }
}
