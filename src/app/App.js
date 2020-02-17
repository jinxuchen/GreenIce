import React from "react";
import styled, { keyframes } from "styled-components";
import {
  HeaderBar,
  BarItem,
  BarItemFirst,
  BarItemCenter,
  BarItemThird
} from "../base/HeaderBar";
import { FooterBar } from "../base/FooterBar";
import { IconBars, IconCodepen, IconAppStore } from "../base/Icon";
import { WalktheDog } from "./WalktheDog";
import { Drag } from "./Drag";
import { LoadArea } from "./LoadArea";

const Header = styled.div`
  top: 0;
  background-color: #8399a1;
  color: white;
  font-size 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
`; //35vw

const PlayGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 600px;
  border: 7px solid #395d73;
  background-color: #acd9bb;
`;

export const ImageDialog = styled.div`
  border-top: 3px solid #395d73;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  border-right: 1px solid #395d73;
  width: 65%;
`;

const Dialog = styled.div`
  width: 35%;
  background-color: #df9c9d;
`;

const DialogItem = styled.div`
  height: 35px;
  background-color: ${props => props.color};

  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 7px;
`;

const Body = styled.div``;

const List = styled.div``;

const Footer = styled.div`
  border-top: 3px solid #395d73;
  bottom: 0;
  background-color: #8399a1;
  height: 100px;

  display:flex;
  justify-content:center;
  align-items:center;
  color: white;
  font-size 35px;
`;

export class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar>
          <BarItemFirst>
            <IconBars />
          </BarItemFirst>
          <BarItemCenter>
            <IconCodepen />
          </BarItemCenter>
          <BarItemThird>
            <IconAppStore />
          </BarItemThird>
        </HeaderBar>

        <Header>what up!</Header>

        <PlayGround>
          <Drag name="drag me!" type="drag" showLoadArea={true} />

          <WalktheDog />
        </PlayGround>

        <ImageDialog>
          <Image src="https://www.petmd.com/sites/default/files/adult-homeless-cat-asking-for-food-picture-id847415388.jpg" />
          <Dialog>
            <DialogItem color="#EEC9C8">
              <span>name</span>
            </DialogItem>
            <DialogItem color="#F6DDDF">
              <span>name</span>
            </DialogItem>
            <DialogItem color="#6F04D9">
              <span>name</span>
            </DialogItem>
            <DialogItem color="#05F29B">
              <span>name</span>
            </DialogItem>
          </Dialog>
        </ImageDialog>

        <Footer>See ya latar!</Footer>
      </div>
    );
  }
}

export default App;
