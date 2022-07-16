import React, { Component } from "react";
import cssClasses from "./PhoneBookTable.module.css";
import InputComponent from "../InputComponent/InputComponent";
export default class PhoneBookTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableEdit: Array(props.contacts.length).fill(false),
      disableEdit: false,
      editInputs: {
        name: "",
        family: "",
        email: "",
      },
      modalDetails: {
        name: "",
        family: "",
        email: "",
        id: "",
      },
      errors: {
        name: "",
        family: "",
        email: "",
      },
      showDeleteModal: false,
    };
  }
  handleEdit = (index, contact) => {
    let enableEdit = this.state.enableEdit;
    enableEdit[index] = true;
    this.setState({
      enableEdit: enableEdit,
      disableEdit: true,
      editInputs: {
        name: contact.name,
        family: contact.family,
        email: contact.email,
      },
    });
  };
  handleChange = (e) => {
    const name = e.target.name.toLowerCase();
    const value = e.target.value;
    this.setState({
      editInputs: { ...this.state.editInputs, [name]: value },
    });
    this.validation(e);
  };
  validation = (e) => {
    const name = e.target.name.toLowerCase();
    let error = "";
    if (!e.target.checkValidity()) {
      switch (name) {
        case "name":
          error = "Min length of name is 4";
          break;
        case "family":
          error = "Family is required";
          break;
        case "email":
          error = "Email format is invalid";
          break;
        default:
          break;
      }
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: error,
        },
      });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: error,
        },
      });
    }
  };
  handleSave = (index) => {
    let haveError = Object.values(this.state.errors).filter(
      (elem) => elem !== ""
    );
    if (haveError.length === 0) {
      let updatedContact = {
        name: this.state.editInputs.name,
        family: this.state.editInputs.family,
        email: this.state.editInputs.email,
      };
      let enableEdit = this.state.enableEdit;
      enableEdit[index] = false;
      this.setState({
        enableEdit: enableEdit,
        disableEdit: false,
        editInputs: {
          name: "",
          family: "",
          email: "",
        },
      });
      this.props.handleSave(index, updatedContact);
    }
  };
  handleModal = (contact) => {
    this.setState({
      showDeleteModal: true,
      modalDetails: {
        name: contact.name,
        family: contact.family,
        email: contact.email,
        id: contact.id,
      },
    });
  };
  render() {
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
                onChange={(e) => this.handleChange(e)}
                value={this.state.editInputs.name}
                error={this.state.errors.name}
                validation={{
                  required: true,
                  minLength: 4,
                }}
              />
            </td>
            <td>
              <InputComponent
                name="Family"
                type="text"
                label={false}
                onChange={(e) => this.handleChange(e)}
                value={this.state.editInputs.family}
                error={this.state.errors.family}
                validation={{
                  required: true,
                }}
              />
            </td>
            <td>
              <InputComponent
                name="Email"
                type="email"
                label={false}
                onChange={(e) => this.handleChange(e)}
                value={this.state.editInputs.email}
                error={this.state.errors.email}
                validation={{
                  required: true,
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                }}
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
                onClick={() => this.handleModal(contact)}
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
      <>
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

        <div
          className={
            this.state.showDeleteModal
              ? cssClasses.modalBlock
              : cssClasses.modal
          }
        >
          <div className={cssClasses.modalContent}>
            <h3>name: {this.state.modalDetails.name}</h3>
            <h3>family: {this.state.modalDetails.family}</h3>
            <h3>email: {this.state.modalDetails.email}</h3>
          </div>
          <div className={cssClasses.modalFooter}>
            <button
              className={cssClasses.delete}
              onClick={() => {
                this.props.handleDelete(this.state.modalDetails.id);
                this.setState({ showDeleteModal: false });
              }}
            >
              Delete
            </button>
            <button
              className={cssClasses.cancel}
              onClick={() => this.setState({ showDeleteModal: false })}
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }
}
