import React from "react";
import styled from "styled-components";
import { IconBars, IconCodepen, IconAppStore } from "../base/Icon";

export const StyledHeaderBar = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${props => props.theme.color.blueDark};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-decoration: none;
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

export const HeaderBar = () => (
  <StyledHeaderBar>
    <BarItemFirst>
      <IconBars />
    </BarItemFirst>
    <BarItemCenter>
      <IconCodepen />
    </BarItemCenter>
    <BarItemThird>
      <IconAppStore />
    </BarItemThird>
  </StyledHeaderBar>
);
