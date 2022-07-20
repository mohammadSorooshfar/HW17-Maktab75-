import React, { Component } from "react";
import styled from "styled-components";
import MainOptions from "./MainOptions";
import Pagination from "./Pagination";
import Table from "../table/Table";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const data = [
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "Rejected",
    delivery: "Received",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "Completed",
    delivery: "Draft",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "Pending",
    delivery: "In Query",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "Paid",
    delivery: "Rejected",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "To ship",
    delivery: "Received",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "Shipping",
    delivery: "Rejected",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
  {
    id: "998-5878",
    product: "Brand New Bike, Local buyer only",
    customer: "Oludayo Ayomide",
    status: "Unpaid",
    delivery: "Rejected",
    created: "Mar 13, 2021 08:05 AM",
    deadline: "jan 1, 2021",
    price: "$17.84",
  },
];

class Main extends Component {
  render() {
    return (
      <Container>
        <MainOptions />
        <Pagination />
        <Table data={data} />
        <Pagination />
      </Container>
    );
  }
}

export default Main;
