import React, { Component } from "react";
import styled from "styled-components";
const OptionsDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const OptionsStyle = styled.div`
  display: flex;
  width: 100%;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 1%;
  width: 8%;
  justify-content: space-between;
`;
const OptionText = styled.p`
  color: ${(props) => (props.primary ? "blue" : "black")};
  margin: 0;
`;
const OptionCount = styled.p`
  margin: 0;
  background-color: ${(props) => (props.primary ? "orange" : "gray")};
  color: white;
  border-radius: 5px;
  padding: 0 5%;
`;
const OptionsBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;
const OptionBar = styled.div`
  width: 10%;
  height: 3px;
  border-radius: 5px;
  background-color: blue;
`;
export default class MainOptions extends Component {
  render() {
    return (
      <OptionsDivStyle>
        <OptionsStyle>
          <Option>
            <OptionText primary>All orders</OptionText>
            <OptionCount primary>88</OptionCount>
          </Option>
          <Option>
            <OptionText>Pickups</OptionText>
            <OptionCount>61</OptionCount>
          </Option>
          <Option>
            <OptionText>Returns</OptionText>
            <OptionCount>27</OptionCount>
          </Option>
        </OptionsStyle>
        <OptionsBar>
          <OptionBar></OptionBar>
        </OptionsBar>
      </OptionsDivStyle>
    );
  }
}
