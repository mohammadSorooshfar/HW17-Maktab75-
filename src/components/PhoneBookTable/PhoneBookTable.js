import React, { Component } from "react";
import cssClasses from "./PhoneBookTable.module.css";

export default class PhoneBookTable extends Component {
  render() {
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
              >
                <td>{contact.name}</td>
                <td>{contact.family}</td>
                <td>{contact.email}</td>
                <td>
                  <button className={cssClasses.edit}>Edit</button>
                </td>
                <td>
                  <button className={cssClasses.delete}>Delete</button>
                </td>
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
