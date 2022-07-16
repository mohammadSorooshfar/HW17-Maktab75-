import React, { Component } from "react";
import styled from "styled-components";
const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: "/";
    padding: 0 8px;
  }
`;

const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  p {
    color: grey;
    display: inline;
  }
`;
const BluePStyle = styled.p`
  color: blue !important;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2%;
`;
const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ButtonStyle = styled.button`
  border-radius: 10px;
  padding: 2% 4%;
  background: ${(props) => (props.primary ? "blue" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: ${(props) => (props.primary ? "none" : "1px solid #ccc")};
`;
const ButtonsDivStyle = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;
export default class Header extends Component {
  render() {
    return (
      <Nav>
        <Breadcrumbs>
          <Crumb>
            <p>Wine</p>
          </Crumb>
          <Crumb>
            <p>Red</p>
          </Crumb>
          <Crumb>
            <p>Mascota</p>
          </Crumb>
          <Crumb>
            <BluePStyle>Mascota</BluePStyle>
          </Crumb>
        </Breadcrumbs>
        <NavbarStyle>
          <h1>Orders</h1>
          <ButtonsDivStyle>
            <ButtonStyle>Export</ButtonStyle>
            <ButtonStyle>Print</ButtonStyle>
            <ButtonStyle primary>Create order</ButtonStyle>
          </ButtonsDivStyle>
        </NavbarStyle>
      </Nav>
    );
  }
}
