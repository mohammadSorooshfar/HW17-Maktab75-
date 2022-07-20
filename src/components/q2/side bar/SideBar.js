import React, { Component } from "react";
import {
  FaChartPie,
  FaFilter,
  FaFlag,
  FaHome,
  FaPercent,
  FaSearch,
  FaShoppingBasket,
} from "react-icons/fa";
import { BsMenuUp, BsArrowBarRight } from "react-icons/bs";
import styled from "styled-components";
import profilePic from "./download.png";
const AsideStyle = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 25px gray;
  width: 6%;
  padding: 4% 1%;
  border-radius: 20px;
`;
const IconsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  align-items: center;
`;
const ProfileStyle = styled.div`
  position: relative;
`;
const ProfileImageStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;
const OnlineCircleStyle = styled.div`
  position: absolute;
  top: 35px;
  left: 38px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  border: 3px solid white;
`;
export default class SideBar extends Component {
  render() {
    return (
      <AsideStyle>
        <IconsStyle>
          <BsArrowBarRight />
          <FaSearch />
          <FaHome />
          <FaChartPie />
          <FaFlag />
          <FaShoppingBasket style={{ color: "blue" }} />
          <FaPercent />
          <BsMenuUp />
          <FaFilter />
        </IconsStyle>
        <ProfileStyle>
          <ProfileImageStyle src={profilePic} />
          <OnlineCircleStyle />
        </ProfileStyle>
      </AsideStyle>
    );
  }
}
