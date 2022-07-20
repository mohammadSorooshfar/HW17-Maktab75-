import React, { Component } from "react";
import styled from "styled-components";
import {
  FaSearch,
  FaSlidersH,
  FaCalendar,
  FaLocationArrow,
} from "react-icons/fa";
import Filter from "./Filter";
const BackgroundSearchStyled = styled.div`
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 1%;
  display: flex;
  justify-content: space-between;
`;
const InputSearchStyled = styled.input`
  background-color: white;
  border: none;
  padding: 2%;
  width: 75%;
`;
const SearchDivStyled = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 1%;
  align-items: center;
`;
const FiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
export default class SearchBar extends Component {
  render() {
    return (
      <BackgroundSearchStyled>
        <SearchDivStyled>
          <FaSearch />
          <InputSearchStyled placeholder="Search anything..." />
          <FaSlidersH />
        </SearchDivStyled>
        <FiltersStyled>
          <Filter filterText="Date range">
            <FaCalendar />
          </Filter>
          <Filter filterText="Status">
            <FaCalendar />
          </Filter>
          <Filter filterText="Address">
            <FaLocationArrow />
          </Filter>
          <Filter filterText="Saved filters">
            <FaCalendar />
          </Filter>
          <Filter filterText="More filters">
            <FaCalendar />
          </Filter>
        </FiltersStyled>
      </BackgroundSearchStyled>
    );
  }
}
