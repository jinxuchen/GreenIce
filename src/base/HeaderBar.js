import React from "react";
import styled from "styled-components";

export const HeaderBar = styled.div`
  position: fixed;

  width: 100%;
  height: 45px;
  background-color: #123859;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const BarItem = styled.div`
  color: white;
  padding: 15px;
`;

export const BarItemFirst = styled(BarItem)`
  justify-self: start;
`;

export const BarItemCenter = styled(BarItem)`
  justify-self: center;
`;

export const BarItemThird = styled(BarItem)`
  justify-self: end;
`;
