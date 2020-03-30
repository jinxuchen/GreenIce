import styled from "styled-components";

export const Footer = styled.div`
  border-top: 3px solid #395d73;
  bottom: 0;
  background-color: ${props => props.theme.color.blueDark};
  height: 100px;

  display:flex;
  justify-content:center;
  align-items:center;
  color: white;
  font-size 35px;
`;
