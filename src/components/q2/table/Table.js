import React, { Component } from "react";
import styled from "styled-components";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
const TableStyle = styled.table``;

export default class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody data={this.props.data} />
      </table>
    );
  }
}
