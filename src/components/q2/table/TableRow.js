import React, { Component } from "react";
import styled from "styled-components";
const ActionButton = styled.button`
  background-color: transparent;
  padding: 2%;
  border-radius: 6px;
  border: 1px solid gray;
  color: blue;
  width: 100px;
  font-weight: bold;
`;
const TdActionsStyle = styled.td`
  display: flex;
  justify-content: space-between;
  width: 210px;
  padding: 15% 0 0 0;
`;
const TdGrayStyle = styled.td`
  color: gray;
`;
const TdBoldStyle = styled.td`
  font-weight: bold;
`;
const StatusStyle = styled.p`
  border-radius: 20px;
  width: 100px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  ${(props) => {
    if (props.children === "Rejected") {
      return `background-color:#FDD4D4; color:red`;
    } else if (props.children === "Completed") {
      return `background-color:#D2FBF0; color:green`;
    } else if (props.children === "Pending") {
      return `background-color:#FFE2CC; color:#FFA766`;
    } else if (props.children === "To ship") {
      return `background-color:#CCD8FF; color:#567DFF`;
    } else if (props.children === "Shipping") {
      return `background-color:#F7E2FE; color:purple`;
    } else if (props.children === "Unpaid") {
      return `background-color:#E8E8EA; color:gray`;
    } else {
      return `background-color:#FECCE6; color:#FC5DAF`;
    }
  }}
`;
const DeliveryStyle = styled.p`
  ${(props) => {
    if (props.delivery === "Received") {
      return `color:blue`;
    } else if (props.delivery === "Draft") {
      return ` color:gray`;
    } else if (props.delivery === "Completed") {
      return ` color:green`;
    } else if (props.delivery === "In Query") {
      return ` color:orange`;
    } else {
      return ` color:red`;
    }
  }}
`;
export default class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <TdGrayStyle>{this.props.id}</TdGrayStyle>
        <TdBoldStyle>{this.props.product}</TdBoldStyle>
        <TdGrayStyle>{this.props.customer}</TdGrayStyle>
        <td>
          <StatusStyle>{this.props.status}</StatusStyle>
        </td>
        <td>
          <DeliveryStyle delivery={this.props.delivery}>
            • {this.props.delivery}
          </DeliveryStyle>
        </td>
        <TdGrayStyle>{this.props.created}</TdGrayStyle>
        <TdGrayStyle>{this.props.deadline}</TdGrayStyle>
        <TdBoldStyle>{this.props.price}</TdBoldStyle>
        <TdActionsStyle>
          <ActionButton>Manage</ActionButton>
          <ActionButton>Actions</ActionButton>
        </TdActionsStyle>
      </tr>
    );
  }
}
