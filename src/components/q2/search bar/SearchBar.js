import React, { Component } from "react";
import styled from "styled-components";

const BackgroundSearch = styled.div`
  background-color: gray;
  border-radius: 20px;
  padding: 0 2%;
`;

export default class SearchBar extends Component {
  render() {
    return <BackgroundSearch>SearchBar</BackgroundSearch>;
  }
}
