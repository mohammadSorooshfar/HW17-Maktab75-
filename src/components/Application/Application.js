import React, { Component } from "react";
import cssClasses from "./Application.module.css";
import InputComponent from "../InputComponent/InputComponent";
import PhoneBookTable from "../PhoneBookTable/PhoneBookTable";
class Application extends Component {
  constructor() {
    super();
    this.state = { contacts: [], showForm: true };
  }
  handleAddContact = (e) => {
    e.preventDefault();
    let newContact = {
      name: e.target.Name.value,
      family: e.target.Family.value,
      email: e.target.Email.value,
    };
    this.setState({
      contacts: [...this.state.contacts, newContact],
      showForm: false,
    });
  };
  handleFlagChange() {
    this.setState({
      showForm: true,
    });
  }
  render() {
    console.log(this.state);
    const showFormOrTable = () => {
      if (this.state.showForm) {
        return (
          <form className={cssClasses.form} onSubmit={this.handleAddContact}>
            <h1>Add Contacts</h1>
            <InputComponent name="Name" type="text" />
            <InputComponent name="Family" type="text" />
            <InputComponent name="Email" type="email" />
            <button className={cssClasses.button}>Add</button>
          </form>
        );
      } else {
        return (
          <>
            <PhoneBookTable
              handleFlagChange={() => {
                this.handleFlagChange();
              }}
              contacts={this.state.contacts}
            />
          </>
        );
      }
    };
    return <>{showFormOrTable()}</>;
  }
}

export default Application;
