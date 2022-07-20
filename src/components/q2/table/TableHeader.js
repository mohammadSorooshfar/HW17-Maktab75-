import React, { Component } from "react";
import styled from "styled-components";
const TrStyle = styled.tr``;
const ThStyle = styled.th`
  text-align: left;
  background-color: #f9f9f9;
  padding: 1%;
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export default class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <ThStyle>
            <input type="checkbox" />
          </ThStyle>
          <ThStyle>ID No.</ThStyle>
          <ThStyle>Product</ThStyle>
          <ThStyle>Customer</ThStyle>
          <ThStyle>Status</ThStyle>
          <ThStyle>Delivery status</ThStyle>
          <ThStyle>Created date</ThStyle>
          <ThStyle>Deadline</ThStyle>
          <ThStyle>Price</ThStyle>
          <ThStyle>Actions</ThStyle>
        </tr>
      </thead>
    );
  }
}
