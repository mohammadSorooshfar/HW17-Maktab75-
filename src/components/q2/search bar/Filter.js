import React, { Component } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
const FilterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  border: 1px solid #e1e1e3;
  border-radius: 20px;
  padding: 0 1.5%;
`;

export default class Filter extends Component {
  render() {
    return (
      <FilterStyled>
        {this.props.children}
        {this.props.filterText}
        <FaAngleDown />
      </FilterStyled>
    );
  }
}
