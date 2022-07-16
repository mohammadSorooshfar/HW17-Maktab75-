import React, { Component } from "react";
import styled from "styled-components";

const AsideStyle = styled.aside`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 25px gray;
  width: 8%;
  padding: 4% 1%;
  border-radius: 20px;
`;

export default class SideBar extends Component {
  render() {
    return <AsideStyle>hello</AsideStyle>;
  }
}
