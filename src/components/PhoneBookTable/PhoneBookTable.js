import React, { Component } from "react";
import cssClasses from "./PhoneBookTable.module.css";
import InputComponent from "../InputComponent/InputComponent";
export default class PhoneBookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEdit: Array(props.contacts.length).fill(false),
      disableEdit: false,
      name: "",
      family: "",
      email: "",
    };
  }
  handleEdit = (index, contact) => {
    let enableEdit = this.state.enableEdit;
    enableEdit[index] = true;
    this.setState({
      enableEdit: enableEdit,
      disableEdit: true,
      name: contact.name,
      family: contact.family,
      email: contact.email,
    });
  };
  handleChange = (e) => {
    const name = e.target.name.toLowerCase();
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSave = (index) => {
    console.log(this.state);
    let updatedContact = {
      name: this.state.name,
      family: this.state.family,
      email: this.state.email,
    };
    let enableEdit = this.state.enableEdit;
    enableEdit[index] = false;
    this.setState({
      enableEdit: enableEdit,
      disableEdit: false,
      name: "",
      family: "",
      email: "",
    });
    this.props.handleSave(index, updatedContact);
  };
  render() {
    console.log(this.state);
    const showEditInputs = (contact, index) => {
      if (this.state.enableEdit[index]) {
        return (
          <>
            {" "}
            <td>
              <InputComponent
                name="Name"
                type="text"
                label={false}
                handleChange={(e) => this.handleChange(e)}
                value={this.state.name}
                error=""
              />
            </td>
            <td>
              <InputComponent
                name="Family"
                type="text"
                label={false}
                handleChange={(e) => this.handleChange(e)}
                value={this.state.family}
                error="fuckman"
              />
            </td>
            <td>
              <InputComponent
                name="Email"
                type="email"
                label={false}
                handleChange={(e) => this.handleChange(e)}
                value={this.state.email}
                error=""
              />
            </td>
            <td>
              <button
                className={cssClasses.save}
                onClick={() => this.handleSave(index)}
              >
                Save
              </button>
            </td>
            <td>
              <button
                className={
                  this.state.disableEdit
                    ? cssClasses.disabled
                    : cssClasses.delete
                }
                onClick={() => this.props.handleDelete(contact.id)}
                disabled={this.state.disableEdit}
              >
                Delete
              </button>
            </td>
          </>
        );
      } else {
        return (
          <>
            {" "}
            <td>{contact.name}</td>
            <td>{contact.family}</td>
            <td>{contact.email}</td>
            <td>
              <button
                className={
                  this.state.disableEdit ? cssClasses.disabled : cssClasses.edit
                }
                onClick={() => this.handleEdit(index, contact)}
                disabled={this.state.disableEdit}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className={
                  this.state.disableEdit
                    ? cssClasses.disabled
                    : cssClasses.delete
                }
                onClick={() => this.props.handleDelete(contact.id)}
                disabled={this.state.disableEdit}
              >
                Delete
              </button>
            </td>
          </>
        );
      }
    };
    return (
      <div className={cssClasses.flex}>
        <table className={cssClasses.table}>
          <thead>
            <tr className={cssClasses.trHead}>
              <th>Name</th>
              <th>Family</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((contact, index) => (
              <tr
                className={
                  index % 2 === 0 ? cssClasses.trLight : cssClasses.trDark
                }
                key={contact.id}
              >
                {showEditInputs(contact, index)}
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className={cssClasses.flagButton}
          onClick={() => {
            this.props.handleFlagChange();
          }}
        >
          Add new contact
        </button>
      </div>
    );
  }
}
