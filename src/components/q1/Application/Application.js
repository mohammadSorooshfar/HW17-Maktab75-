import React, { Component } from "react";
import cssClasses from "./Application.module.css";
import InputComponent from "../InputComponent/InputComponent";
import PhoneBookTable from "../PhoneBookTable/PhoneBookTable";
import AddPhone from "../AddPhone/AddPhone";
class Application extends Component {
  constructor() {
    super();
    this.state = { contacts: [], showForm: true };
  }
  handleAddContact = (e) => {
    e.preventDefault();
    let newContact = {
      id: this.state.contacts.length + 1,
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
  handleDelete(id) {
    let contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: contacts,
    });
  }
  handleSave(index, updatedContact) {
    let contacts = this.state.contacts;
    console.log(index, updatedContact);
    const { name, family, email } = updatedContact;
    contacts[index].name = name;
    contacts[index].family = family;
    contacts[index].email = email;
    this.setState({
      contacts: contacts,
    });
  }
  render() {
    console.log(this.state);
    const showFormOrTable = () => {
      if (this.state.showForm) {
        return <AddPhone handleAddContact={(e) => this.handleAddContact(e)} />;
      } else {
        return (
          <>
            <PhoneBookTable
              handleFlagChange={() => {
                this.handleFlagChange();
              }}
              handleDelete={(id) => {
                this.handleDelete(id);
              }}
              handleSave={(index, updatedContact) => {
                this.handleSave(index, updatedContact);
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
