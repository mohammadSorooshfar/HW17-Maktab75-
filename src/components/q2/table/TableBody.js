import React, { Component } from "react";
import styled from "styled-components";
import TableRow from "./TableRow";
export default class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.data.map((elem) => (
          <TableRow
            id={elem.id}
            product={elem.product}
            customer={elem.customer}
            status={elem.status}
            delivery={elem.delivery}
            created={elem.created}
            deadline={elem.deadline}
            price={elem.price}
          />
        ))}
      </tbody>
    );
  }
}
