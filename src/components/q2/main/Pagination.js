import React, { Component } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% 0;
`;
const PStyle = styled.p`
  color: gray;
  margin: 0;
`;
const PaginationDiv = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
`;
const PageNumberStyle = styled.p`
  color: ${(props) => (props.primary ? "blue" : "black")};
  font-weight: ${(props) => (props.primary ? "bold" : "normal")}; ;
`;
const PerPageDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 12%;
`;
export default class Pagination extends Component {
  render() {
    return (
      <ContainerStyle>
        <PStyle>showing 21 - 30 of 88 results</PStyle>
        <PaginationDiv>
          <FaChevronLeft />
          <PageNumberStyle>1</PageNumberStyle>
          <PageNumberStyle>2</PageNumberStyle>
          <PageNumberStyle primary>3</PageNumberStyle>
          <PageNumberStyle>4</PageNumberStyle>
          <PageNumberStyle>5</PageNumberStyle>
          <PageNumberStyle>6</PageNumberStyle>
          <FaChevronRight />
        </PaginationDiv>
        <PerPageDivStyle>
          <PStyle>Items per page</PStyle>
          <select name="per-page">
            <option value="10" selected>
              10
            </option>
          </select>
        </PerPageDivStyle>
      </ContainerStyle>
    );
  }
}
