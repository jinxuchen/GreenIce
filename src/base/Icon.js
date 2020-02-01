import React from "react";
import styled, { keyframes } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faCodepen,
  faFacebook,
  faAppStoreIos
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheckSquare, faCoffee, fab, faBars, faCodepen, faAppStoreIos);

//create animation using keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

//apply animation into styled-components
export const Rotate = styled.div`
  &: hover {
    color: powderblue;
    animation: ${rotate} 2s linear infinite;
  }
`;

const StyledIconBars = styled.div`
  &: hover {
    color: black;
  }
`;

const StyledAppStore = styled.div`
  &: hover {
    color: black;
  }
`;

export const IconBars = () => (
  <StyledIconBars>
    <FontAwesomeIcon icon="bars" />
  </StyledIconBars>
);

export const IconCodepen = () => (
  <Rotate>
    <FontAwesomeIcon icon={faCodepen} size="lg" />
  </Rotate>
);

export const IconAppStore = () => (
  <StyledAppStore>
    <FontAwesomeIcon icon={faAppStoreIos} />
  </StyledAppStore>
);
