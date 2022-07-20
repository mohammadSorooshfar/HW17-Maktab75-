import React, { Component } from "react";
import styled from "styled-components";
import { FaAngleDown, FaHome } from "react-icons/fa";
const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    content: "/";
    padding: 0 15px;
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
    svg {
      margin-bottom: -2px;
      margin-right: 2px;
    }
  }
`;
const BluePStyle = styled.p`
  color: blue !important;
  font-weight: bold;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
            <p>
              <FaHome />
              Home page
            </p>
          </Crumb>
          <Crumb>
            <p>. . .</p>
          </Crumb>
          <Crumb>
            <p>
              Dashboard <FaAngleDown />
            </p>
          </Crumb>
          <Crumb>
            <p>
              Products <FaAngleDown />
            </p>
          </Crumb>
          <Crumb>
            <BluePStyle>Orders</BluePStyle>
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
