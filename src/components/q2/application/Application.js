import React, { Component } from "react";
import Header from "../header/Header";
import SideBar from "../side bar/SideBar";
import styled from "styled-components";
import SearchBar from "../search bar/SearchBar";
const BodyStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.2% 0.5%;
`;
const MainStyle = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default class Application extends Component {
  render() {
    return (
      <BodyStyle>
        <SideBar />
        <MainStyle>
          <Header />
          <SearchBar />
        </MainStyle>
      </BodyStyle>
    );
  }
}
