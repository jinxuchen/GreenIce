import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  top: 0;
  background-color: ${props => props.theme.color.blue};
  color: white;
  font-size 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 666px;

  background-image: url(${props => props.img});

 `;

export const Header = ({ img, children }) => (
  <StyledHeader img={img}>{children}</StyledHeader>
);
