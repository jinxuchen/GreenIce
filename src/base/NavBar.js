import React from "react";
import styled from "styled-components";
import { StyledHeaderBar } from "./HeaderBar";
import { NavLink } from "react-router-dom";

const StyledNavBar = styled(StyledHeaderBar)`
  display: flex;
  justify-content: start;
  background-color: ${props => props.theme.color.greenLight};
`;

const StyledNavItem = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  color: black;
  font-family: Andale Mono;

  &:hover {
    background-color: white;
    color: ${props => props.theme.color.greenLight};
  }
`;

export const NavBar = () => (
  <StyledNavBar>
    <StyledNavItem to="/home">Home</StyledNavItem>
    <StyledNavItem to="/game">Game</StyledNavItem>
    <StyledNavItem to="/travel">Travel</StyledNavItem>
    <StyledNavItem to="/about">about</StyledNavItem>
  </StyledNavBar>
);
