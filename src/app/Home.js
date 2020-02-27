import React from "react";
import styled from "styled-components";
import { Hook } from "./Hook";
import { Footer, Header, NavBar, HeaderBar } from "../base";

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

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Header img="img/bg01.jpeg">what up!</Header>
        <NavBar />
        <Hook />

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
        <img
          alt="cat"
          src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
        />
        <Footer>See ya latar!</Footer>
      </div>
    );
  }
}

export default Home;
